import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    id: 1,
    title: "Borrow, Don’t Buy",
    description: "How shared tools reduce waste and save money.",
    image:
      "/images/Rectangle 15.png",
  },
  {
    id: 2,
    title: "From Box to Home",
    description: "What happens after you leave the IKEA store.",
    image:
      "/images/now.jpg",
  },
  {
    id: 3,
    title: "Sustainable Craft",
    description: "The artisans keeping traditional techniques alive.",
    image:
      "https://images.unsplash.com/photo-1452457750107-cd084dce177d?w=600&q=80",
  },
];

export default function ExploreMore() {
  return (
    <section
      id="stories"
      className="section-spacing border-t border-[#E5E5E5]"
    >
      <div className="editorial-container">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 md:mb-16">
          Explore more stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* CTA Card */}
          <Link
            href="#"
            className="group bg-[#D4A843] p-8 md:p-10 flex flex-col justify-between min-h-[300px] lg:min-h-[400px] rounded-sm"
          >
            <div />
            <div className="flex items-center gap-4">
              <span className="text-lg md:text-xl font-medium text-[#1A1A1A]">
                View all stories
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-2 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Story Cards */}
          {stories.map((story) => (
            <Link key={story.id} href="#" className="group">
              <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-sm">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:underline underline-offset-4">
                {story.title}
              </h3>
              <p className="text-sm text-[#4A4A4A]">{story.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
