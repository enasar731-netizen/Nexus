import { motion } from "framer-motion";
import { Eye, Crosshair, Bone, Save, Settings, Target } from "lucide-react";

const features = [
  { icon: Eye, title: "Full ESP Suite", desc: "Box, Name, Health, Distance, Tracers & Skeleton rendering" },
  { icon: Crosshair, title: "Advanced Aimbot", desc: "FOV Circle with custom smoothing for natural aim" },
  { icon: Target, title: "Bone Selection", desc: "Target Head, Torso, or custom bone for precision" },
  { icon: Save, title: "Config System", desc: "Save, Load & Auto-save your perfect settings" },
  { icon: Settings, title: "ImGui Menu", desc: "Beautiful overlay menu with INSERT toggle" },
  { icon: Bone, title: "Skeleton ESP", desc: "Full bone structure rendering with distance fade" },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Features</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every tool you need, built with precision and performance in mind.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card p-6 group hover:border-primary/40 transition-all duration-300"
            >
              <f.icon className="w-8 h-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(270,91%,65%)] transition-all duration-300" />
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
