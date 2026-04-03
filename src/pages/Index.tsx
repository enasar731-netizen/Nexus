import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TerminalSection from "@/components/TerminalSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyNexusSection from "@/components/WhyNexusSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen relative pb-10">
      <Navbar />
      <HeroSection />
      <TerminalSection />
      <FeaturesSection />
      <WhyNexusSection />
      <PricingSection />
    </div>
  );
};

export default Index;
