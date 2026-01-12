"use client";

import { useEffect, useRef, useState } from "react";

type ChatMsg = { role: "user" | "assistant"; text: string };

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "assistant",
      text: "Hi! Tell me what you bought from IKEA, and I’ll tell you which tools you need (and what you can borrow nearby).",
    },
  ]);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  async function send() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setError(null);
    setLoading(true);

    const nextMessages: ChatMsg[] = [...messages, { role: "user", text: trimmed }];
    setMessages(nextMessages);
    setInput("");

    try {
      const res = await fetch("/api/ai/toolmatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: nextMessages,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle retryable 503 nicely
        if (res.status === 503 && data?.retryable) {
          setMessages((m) => [
            ...m,
            {
              role: "assistant",
              text: "I’m a bit busy right now. Please try again in a few seconds 🙂",
            },
          ]);
          return;
        }
        throw new Error(data?.error || "Something went wrong");
      }

      setMessages((m) => [...m, { role: "assistant", text: data.reply || "" }]);
    } catch (e: any) {
      setError(e.message || "Request failed");
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send();
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Bubble button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full shadow-lg px-4 py-3 bg-black text-white text-sm"
        >
          🛠️ AI Assistant
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="w-[340px] h-[460px] rounded-2xl shadow-2xl border bg-white flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div>
              <div className="font-semibold text-sm">IKEA Together – AI Assistant</div>
              <div className="text-xs text-gray-500">AI-powered tool matching</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-sm px-2 py-1 rounded hover:bg-gray-100"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap ${
                  m.role === "user"
                    ? "ml-auto bg-black text-white"
                    : "mr-auto bg-gray-100 text-gray-900"
                }`}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="mr-auto bg-gray-100 text-gray-900 max-w-[85%] rounded-2xl px-3 py-2 text-sm">
                Thinking…
              </div>
            )}

            <div ref={endRef} />
          </div>

          {error && (
            <div className="px-3 pb-2 text-xs text-red-600">
              {error}
            </div>
          )}

          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="e.g., I bought a shelf and a mirror"
              className="flex-1 rounded-xl border px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={send}
              disabled={loading}
              className="rounded-xl px-3 py-2 text-sm bg-black text-white disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}