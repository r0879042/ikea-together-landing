import Image from "next/image";

export default function ImageGallery() {
  return (
    <section className="section-spacing">
      <div className="editorial-container">
        {/* First Gallery Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/AI.PNG"
              alt="Cozy living room with natural light"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/tools.PNG"
              alt="Minimalist bedroom design"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Block */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
          Building IKEA furniture doesn’t stop at checkout.

          Sometimes you’re missing the right drill bit.
          Sometimes you need a level — just once.
          Sometimes the instructions leave you unsure.

          IKEA Together helps you finish what you started.
          With guidance powered by AI and tools shared by people nearby,
          you move from box to built — without waste, stress, or buying tools you’ll never use again.
          </p>
        </div>

        {/* Second Gallery - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-16 md:mb-24">
          <div className="md:col-span-5 relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/kitchen 2.jpg"
              alt="Modern sofa in natural tones"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7 relative aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/home.jpg"
              alt="Bedroom with wooden accents"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Caption Text */}
        <div className="md:ml-auto md:max-w-xl mb-16 md:mb-24">
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
          Building IKEA furniture often looks simple — until you realise you’re missing the right tools.

          IKEA Together supports you after purchase, helping you understand what you need, guiding you step by 
          step, and connecting you with nearby neighbors who already have the tools.

         It’s a calmer, more sustainable way to finish your project — without buying things you’ll only use once.
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
