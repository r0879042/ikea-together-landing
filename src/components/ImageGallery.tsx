import Image from "next/image";

export default function ImageGallery() {
  return (
    <section className="section-spacing">
      <div className="editorial-container">
        {/* First Gallery Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="Cozy living room with natural light"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Minimalist bedroom design"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Block */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
            Every piece tells a story of heritage and innovation. From handwoven
            textiles to sustainably sourced wood, our materials are chosen with
            care for both beauty and longevity. This is design that respects
            tradition while embracing the future.
          </p>
        </div>

        {/* Second Gallery - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-16 md:mb-24">
          <div className="md:col-span-5 relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
              alt="Modern sofa in natural tones"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7 relative aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"
              alt="Bedroom with wooden accents"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Caption Text */}
        <div className="md:ml-auto md:max-w-xl mb-16 md:mb-24">
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
            Cushions in natural linen and wool, a mix of muted earth tones and
            soft textures, come together for a look that feels both refined and
            inviting. From morning coffee to evening gatherings, this timeless
            aesthetic brings warmth and character to every moment.
          </p>
        </div>

        {/* Third Gallery Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80"
              alt="Dining area with pendant light"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"
              alt="Kitchen with natural materials"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
