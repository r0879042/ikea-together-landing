export default function Keywords() {
  const keywords = ["Simple", "Practical", "Together", "Sustainable"];
  const colors = [
    { name: "Blue primary", color: "#0058A3" },
    { name: "Golden yellow", color: "#FFCC00" },
    { name: "White", color: "#F7F5EF" },
    { name: "Charcoal Black", color: "#111111" },
  ];

  const materials = [
    {
      src: "/images/1.PNG",
      alt: "Natural wood grain texture",
    },
    {
      src: "/images/2.PNG",
      alt: "Woven linen fabric texture",
    },
    {
      src: "/images/3.PNG",
      alt: "Handmade ceramic texture",
    },
    {
      src: "/images/4.PNG",
      alt: "Natural wool pattern",
    },
  ];

  return (
    <section className="section-spacing border-t border-[#E5E5E5]">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Keywords */}
          <div>
            <p className="text-sm text-[#4A4A4A] mb-6 uppercase tracking-wider">
              Keywords
            </p>
            <div className="space-y-2 mb-16">
              {keywords.map((keyword) => (
                <h2
                  key={keyword}
                  className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
                >
                  {keyword}
                </h2>
              ))}
            </div>


            {/* Color Palette */}
            <div>
              <p className="text-sm text-[#4A4A4A] mb-4 uppercase tracking-wider">
                Colour palette
              </p>
              <div className="flex gap-3 flex-wrap">
                {colors.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-2">
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full"
                      style={{ backgroundColor: c.color }}
                    />
                    <span className="text-xs text-[#4A4A4A]">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Patterns and Materials */}
          <div>
            <p className="text-sm text-[#4A4A4A] mb-6 uppercase tracking-wider">
              Patterns and Materials
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-3 mb-12">
              {materials.map((material) => (
                <div
                  key={material.alt}
                  className="aspect-square relative overflow-hidden rounded-sm"
                >
                  <img
                    src={material.src}
                    alt={material.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
