import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Pendant Light",
    description:
      "Handcrafted ceramic pendant with a soft, diffused glow perfect for any room.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80",
  },
  {
    id: 2,
    name: "Lounge Chair",
    description:
      "Oak frame with woven seat, combining traditional craft with modern comfort.",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
  },
  {
    id: 3,
    name: "Side Table",
    description:
      "Solid birch construction with clean lines and a natural finish.",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400&q=80",
  },
  {
    id: 4,
    name: "Wool Throw",
    description:
      "Sustainably sourced wool blanket in heritage patterns and earthy tones.",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&q=80",
  },
  {
    id: 5,
    name: "Ceramic Vase",
    description:
      "Hand-thrown stoneware with organic shapes and a matte glaze finish.",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&q=80",
  },
  {
    id: 6,
    name: "Linen Cushion",
    description:
      "Stone-washed linen cover with a subtle texture and removable insert.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
  },
];

export default function ProductGrid() {
  return (
    <section id="collection" className="section-spacing border-t border-[#E5E5E5]">
      <div className="editorial-container">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 md:mb-16">
          Shop the look
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-sm bg-[#F5F5F5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  type="button"
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
              <h3 className="text-lg font-medium mb-1">{product.name}</h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
