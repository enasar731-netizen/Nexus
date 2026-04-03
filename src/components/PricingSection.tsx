import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Heart, Monitor, Cpu, Settings2, ShieldQuestion, MessageCircle } from "lucide-react";

const benefits = [
  "Full External ESP Suite",
  "Advanced Aimbot with Smoothing",
  "Skeleton & Bone Selection",
  "Configuration Save/Load System",
  "Clean ImGui Overlay Menu",
  "24/7 Discord Support",
];

const requirements = [
  { icon: Monitor, label: "OS", value: "Windows 10/11 (x64)" },
  { icon: Cpu, label: "GPU", value: "DirectX 11+ Ready" },
  { icon: Settings2, label: "Runtime", value: "C++ Redists Installed" },
  { icon: ShieldQuestion, label: "Privilege", value: "Administrator required" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Plans & Requirements</h2>
          <p className="text-muted-foreground text-lg">Transparent pricing. Clear technical standards.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 glass-card-glow p-10 h-full flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Nexus Beta</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-gradient">$0</span>
                <span className="text-muted-foreground font-medium">/ forever</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 flex-grow">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
               <button className="glow-button w-full py-4 text-lg font-bold flex items-center justify-center gap-2 opacity-70 cursor-not-allowed">
                  Coming Soon
               </button>
               <p className="text-xs text-center text-muted-foreground/60 flex items-center justify-center gap-1.5">
                  <Heart className="w-3 h-3 text-red-500" />
                  Supporting the community since 2026.
               </p>
            </div>
          </motion.div>

          {/* Technical Requirements Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 glass-card p-8 h-full flex flex-col border-primary/10"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
               <Settings2 className="w-5 h-5 text-primary" />
               Technical Requirements
            </h3>
            
            <div className="space-y-6">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                     <req.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-tighter mb-0.5">{req.label}</p>
                    <p className="text-sm text-foreground/80">{req.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-primary/5 text-xs text-muted-foreground leading-relaxed">
              <p>Please ensure all security software is configured appropriately before launch. External overlays require specialized environment permissions for optimal performance.</p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase"><ShieldCheck className="w-5 h-5"/> Verified External</div>
           <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase"><Zap className="w-5 h-5"/> Zero Latency</div>
        </div>

        <div className="mt-20 text-center text-muted-foreground/40 text-xs space-y-4">
          <div>
            <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-4">
              <MessageCircle className="w-4 h-4" />
              Join our Discord
            </a>
          </div>
          <div>
            <p>&copy; 2026 Nexus. All rights reserved.</p>
            <p>Use at your own risk.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
