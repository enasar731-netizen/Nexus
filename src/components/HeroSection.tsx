import { motion } from "framer-motion";
import { useState } from "react";
import { Download, Shield, Cpu, Zap, Box } from "lucide-react";
import SetupGuide from "./SetupGuide";

const HeroSection = () => {
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  
  const handleDownload = () => {
    setIsSetupOpen(true);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 px-4 overflow-hidden border-b border-primary/5">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-gradient mb-4">
            NEXUS
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-4"
        >
          Premium External Overlay
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base md:text-lg font-mono-code text-primary/80 mb-10 tracking-wider"
        >
          Smooth ESP &bull; Silent Aimbot &bull; Clean Configs
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
               <button 
                className="w-full sm:w-auto px-8 py-4 bg-primary/20 text-primary font-bold rounded-full cursor-not-allowed border border-primary/30 flex items-center justify-center gap-2 opacity-80"
               >
                  <Download className="w-5 h-5 opacity-50" />
                  Coming Soon
               </button>
               <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-foreground font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
               >
                  Explore Features
               </button>
            </div>
            
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground opacity-50">
               Research & Educational Utility Only
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground opacity-50">
               Currently Invite Only
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary" /> Undetected</span>
            <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-primary" /> External</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-primary" /> Performance</span>
          </div>
        </motion.div>
      </div>

      <SetupGuide isOpen={isSetupOpen} onClose={() => setIsSetupOpen(false)} />
    </section>
  );
};

export default HeroSection;
