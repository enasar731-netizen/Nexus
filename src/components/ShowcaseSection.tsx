import { motion } from "framer-motion";
import overlayImg from "@/assets/showcase-overlay.jpg";
import menuImg from "@/assets/showcase-menu.jpg";

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">See It In Action</h2>
          <p className="text-muted-foreground text-lg">Clean overlay. Zero clutter.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-glow overflow-hidden rounded-xl"
          >
            <img src={overlayImg} alt="Nexus ESP and Aimbot overlay preview" className="w-full h-auto" loading="lazy" width={1280} height={720} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card-glow overflow-hidden rounded-xl"
          >
            <img src={menuImg} alt="Nexus ImGui menu interface" className="w-full h-auto" loading="lazy" width={1280} height={720} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
