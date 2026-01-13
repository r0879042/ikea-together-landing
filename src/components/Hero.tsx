import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-spacing">
      <div className="editorial-container">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 md:mb-12 max-w-4xl">
          Finish what you started.
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl mb-12 md:mb-16">
          Sometimes, finishing a home project takes more than furniture.
          It takes the right tools — and a little help.

          IKEA Together helps you borrow tools from nearby neighbors,
          so you can finish what you started without buying things
          you’ll only use once.
        </p>

        {/* Button to our product page */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://ikea-two.vercel.app/"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0058A3] text-white font-medium rounded-sm hover:bg-[#004F93] transition"
          >
            Build with IKEA Together
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#E5E5E5] text-[#1A1A1A] rounded-sm hover:bg-[#F5F5F5] transition"
          >
            How it works
          </a>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
          <Image
            src="/images/hero.PNG"
            alt="IKEA Together assembling furniture at home"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
