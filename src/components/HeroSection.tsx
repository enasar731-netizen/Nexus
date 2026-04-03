import { motion } from "framer-motion";
import { Download, Shield, Cpu, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-gradient mb-4">
            NEXUS
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-4"
        >
          Premium Roblox External Overlay
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
          className="flex flex-col items-center gap-6"
        >
          <span className="glow-button text-lg flex items-center gap-2 opacity-70 cursor-not-allowed">
            Coming Soon
          </span>
          
          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary" /> Undetected</span>
            <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-primary" /> External</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-primary" /> Performance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
