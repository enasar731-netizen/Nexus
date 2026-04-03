import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import WhyNexusSection from "@/components/WhyNexusSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <WhyNexusSection />
      <FooterSection />
    </div>
  );
};

export default Index;
