import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function isOverloaded503(err: any) {
  const code = err?.error?.code ?? err?.status ?? err?.response?.status;
  const msg = err?.error?.message ?? err?.message ?? "";
  return code === 503 || /overloaded|unavailable/i.test(msg);
}

async function withRetry<T>(fn: () => Promise<T>, tries = 3) {
  let lastErr: any;
  for (let i = 0; i < tries; i++) {
    try {
      return await fn();
    } catch (err: any) {
      lastErr = err;
      if (!isOverloaded503(err) || i === tries - 1) break;

      const base = 400 * Math.pow(2, i); // 400, 800, 1600
      const jitter = Math.floor(Math.random() * 150);
      await sleep(base + jitter);
    }
  }
  throw lastErr;
}

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
    }
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Missing/invalid message" }, { status: 400 });
    }

    // small safety limits
    if (message.length > 1500) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // System instruction: keep AI narrow and purposeful
    const system = `
You are the IKEA Together Tool Assistant.
Goal: Help users figure out which tools they need for an IKEA purchase and how to borrow them from nearby neighbors.
Rules:
- Ask 1 clarifying question if needed (e.g., which product type, wall-mounted or floor, size).
- Return answers in simple bullet points.
- Do NOT go off-topic. If user asks unrelated questions, gently redirect to tool matching.
- Keep it short.
`;

    // Turn "history" into a simple transcript (beginner-friendly approach)
    const transcript = Array.isArray(history)
      ? history
          .slice(-8)
          .map((m: any) => `${m.role === "assistant" ? "Assistant" : "User"}: ${m.text}`)
          .join("\n")
      : "";

    const prompt = `${system}\n\n${transcript}\nUser: ${message}\nAssistant:`;

    const resp = await withRetry(
      () =>
        ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        }),
      3
    );

    return NextResponse.json(
      {
        reply: resp.text ?? "",
      },
      { status: 200 }
    );
  } catch (err: any) {
    if (isOverloaded503(err)) {
      return NextResponse.json(
        { error: "AI is busy right now. Please try again.", retryable: true },
        { status: 503 }
      );
    }

    console.error("🔥 /api/ai/toolmatch error:", err);
    return NextResponse.json({ error: err?.message || "AI request failed" }, { status: 500 });
  }
}