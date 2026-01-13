import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Your IKEA Purchase",
    description:
      "You start with an IKEA product — flat-packed, affordable, and ready to become part of your home..",
    image:
      "/images/ikea.jpg",
  },
  {
    id: 2,
    name: "The Right Tools, Ready",
    description:
      "Borrow exactly what’s needed — no waste, no unnecessary purchases, no guesswork..",
    image:
      "/images/First tool.jpg",
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
    name: "IKEA Together website",
    description:
      "Upload your receipt or product photo and let the AI identify what tools and steps are required..",
    image:
      "/images/website.jpg",
  },
  {
    id: 5,
    name: "Ceramic Vase",
    description:
      "Hand-thrown stoneware with organic shapes and a matte glaze finish.",
    image:
      "/images/tools.PNG",
  },
  {
    id: 6,
    name: "Trusted Neighbors Nearby",
    description:
      "Find people in your building or neighborhood who already own the tools you need.",
    image:
      "/images/Neighbour.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section id="collection" className="section-spacing border-t border-[#E5E5E5]">
      <div className="editorial-container">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 md:mb-16">
        What you need to get it done
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
