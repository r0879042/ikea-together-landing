import Image from "next/image";

export default function Quote() {
  return (
    <section className="section-spacing bg-white">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-tight mb-12">
            &ldquo;GA home isn’t finished when the furniture arrives — it’s finished when people can actually build it.

IKEA Together is about removing friction, reducing waste, and helping neighbors support each other through simple, shared solutions.”.&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-right">
              <p className="font-medium text-[#1A1A1A]">IKEA Together Team</p>
              <p className="text-sm text-[#4A4A4A]">Product & Experience</p>
            </div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#E5E5E5]">
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&q=80"
                alt="Anna Lindberg portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
