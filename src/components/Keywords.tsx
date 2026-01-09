export default function Keywords() {
    const keywords = ["Timeless", "Natural", "Minimal", "Warm"];
    const colors = [
      { name: "Sage green", color: "#8B9A7D" },
      { name: "Golden yellow", color: "#D4A843" },
      { name: "Falu red", color: "#8B2323" },
      { name: "Navy blue", color: "#1E3A5F" },
    ];
  
    const materials = [
      {
        src: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=400&q=80",
        alt: "Natural wood grain texture",
      },
      {
        src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80",
        alt: "Woven linen fabric texture",
      },
      {
        src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
        alt: "Handmade ceramic texture",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
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
              <div className="space-y-2">
                {keywords.map((keyword) => (
                  <h2
                    key={keyword}
                    className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
                  >
                    {keyword}
                  </h2>
                ))}
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
          </div>
        </div>
      </section>
    );
  }
  