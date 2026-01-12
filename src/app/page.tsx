import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Keywords from "@/components/Keywords";
import ImageGallery from "@/components/ImageGallery";
import Quote from "@/components/Quote";
import ProductGrid from "@/components/ProductGrid";
import ExploreMore from "@/components/ExploreMore";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <Keywords />
      </FadeInSection>

      <FadeInSection>
        <ImageGallery />
      </FadeInSection>

      <FadeInSection>
        <Quote />
      </FadeInSection>

      <FadeInSection>
        <ProductGrid />
      </FadeInSection>

      <FadeInSection>
        <ExploreMore />
      </FadeInSection>

    </main>
    
  );
}
