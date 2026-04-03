import { motion } from "framer-motion";
import { Download, AlertTriangle, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <section id="download" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Ready to Dominate?</h2>
          
          <a href="#" className="glow-button text-lg inline-flex items-center gap-2 mb-8">
            <Download className="w-5 h-5" />
            Download Nexus
          </a>
          
          <div className="glass-card p-4 flex items-center gap-3 text-sm text-muted-foreground mb-8">
            <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0" />
            <span>Use at your own risk &bull; Alt accounts recommended</span>
          </div>
          
          <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
            <MessageCircle className="w-4 h-4" />
            Join our Discord
          </a>
        </motion.div>
      </div>
      
      <div className="mt-20 text-center text-muted-foreground/40 text-xs">
        &copy; 2026 Nexus. All rights reserved.
      </div>
    </section>
  );
};

export default FooterSection;
