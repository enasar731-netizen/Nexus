import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Terminal, Play, Key } from "lucide-react";

interface SetupGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  { 
    icon: Terminal, 
    title: "Extract Artifacts", 
    desc: "Unzip your downloaded archive to a dedicated folder on your desktop." 
  },
  { 
    icon: Play, 
    title: "Launch Preferred Game", 
    desc: "Start your target game and ensure it is running in Windowed or Borderless mode." 
  },
  { 
    icon: Key, 
    title: "Execute & Activate", 
    desc: "Run the Nexus launcher as Administrator and press INSERT to toggle the menu." 
  }
];

const SetupGuide = ({ isOpen, onClose }: SetupGuideProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass-card-glow p-8 md:p-10 overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-primary w-6 h-6 animate-pulse" />
                <h3 className="text-2xl font-bold text-foreground">Download Started!</h3>
              </div>
              <p className="text-muted-foreground">Follow these steps carefully to ensure a seamless setup experience.</p>
            </div>
            
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-primary/10 -z-10" />
              
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Step {i + 1}: {step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={onClose}
              className="w-full mt-10 py-4 bg-primary/10 border border-primary/20 text-primary font-bold rounded-xl hover:bg-primary/20 transition-all duration-300"
            >
              Got it, let's go!
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SetupGuide;
