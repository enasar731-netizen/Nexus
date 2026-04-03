import { motion } from "framer-motion";
import { Eye, Crosshair, Save, Shield, RefreshCw, Zap } from "lucide-react";

const features = [
  { icon: Crosshair, title: "Combat", desc: "Advanced Silent Aimbot with custom smoothing and specialized bone targeting." },
  { icon: Eye, title: "Visuals", desc: "High-performance ESP suite including Skeleton, Box, Health, and Distance." },
  { icon: Shield, title: "Undetected", desc: "Built as a 100% external overlay for maximum security and peace of mind." },
  { icon: RefreshCw, title: "Updated Frequently", desc: "Constant improvements and security patches to stay ahead of the curve." },
  { icon: Save, title: "Config System", desc: "Seamlesslly save and load your custom settings for any game scenario." },
  { icon: Zap, title: "Misc", desc: "A collection of specialized utilities and experimental modules designed for a custom, optimized experience." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-300"
            >
              <f.icon className="w-8 h-8 text-primary mb-5 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300" />
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
