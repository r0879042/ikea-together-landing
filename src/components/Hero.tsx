import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-spacing">
      <div className="editorial-container">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 md:mb-12 max-w-4xl">
          Embracing Simplicity
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl mb-12 md:mb-16">
          Welcome to a world where design meets nature. Drawing inspiration from
          the serene landscapes of Scandinavia, our collection celebrates
          craftsmanship, natural materials, and the art of mindful living. Let
          us guide you through spaces filled with warmth, light, and timeless
          elegance.
        </p>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
            alt="Scandinavian interior with natural light"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
