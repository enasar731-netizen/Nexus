import { motion } from "framer-motion";
import { Code2, HeartHandshake, Rocket } from "lucide-react";

const reasons = [
  { icon: HeartHandshake, title: "Built by Players", desc: "Developed by experienced players who understand what matters in gameplay." },
  { icon: Rocket, title: "Buttery Smooth", desc: "Optimized for zero frame drops. External architecture means minimal overhead." },
  { icon: Code2, title: "Clean Codebase", desc: "Well-structured, regularly updated, and designed for long-term stability." },
];

const WhyNexusSection = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Why Nexus?</h2>
          <p className="text-muted-foreground text-lg">Built by players, for players.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNexusSection;
