import Image from "next/image";

export default function Quote() {
  return (
    <section className="section-spacing bg-white">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-tight mb-12">
            &ldquo;Great design is born from the harmony between function and
            beauty. We draw inspiration from nature, tradition, and the quiet
            moments of everyday life.&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-right">
              <p className="font-medium text-[#1A1A1A]">Anna Lindberg</p>
              <p className="text-sm text-[#4A4A4A]">Lead Designer</p>
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
