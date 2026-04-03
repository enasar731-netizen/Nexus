import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TerminalSection from "@/components/TerminalSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyNexusSection from "@/components/WhyNexusSection";
import PricingSection from "@/components/PricingSection";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <TerminalSection />
      <FeaturesSection />
      <WhyNexusSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
