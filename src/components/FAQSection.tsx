import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Shield, Cpu } from "lucide-react";

const faqs = [
  {
    question: "What is the primary purpose of Nexus?",
    answer: "Nexus is a dedicated research and analytical framework designed for the study of external overlays and memory interface techniques. It is developed entirely for educational use and technical study of process interaction.",
    icon: Shield
  },
  {
    question: "How safe is my account when using Nexus?",
    answer: "As a 100% external utility, Nexus never modifies game files or memory. While our technology is designed with the highest security standards, use of any third-party framework in a multiplayer environment is entirely at your own discretion. Users assume all responsibility and risk for their account safety.",
    icon: Shield
  },
  {
    question: "Is Nexus currently undetected?",
    answer: "Yes, Nexus is built as a 100% external overlay. Unlike internal exploits that inject code directly into the game memory, Nexus reads data from an external process, making it much harder to detect by standard anti-cheat systems.",
    icon: Shield
  },
  {
    question: "Does this work on Windows 11?",
    answer: "Nexus is fully compatible with Windows 10 and Windows 11 (64-bit systems). We recommend keeping your system updated and running Nexus with Administrator privileges for the best performance.",
    icon: Cpu
  },
  {
    question: "How do I toggle the menu in-game?",
    answer: "The default key to show or hide the Nexus menu is the 'INSERT' key. This ensures the menu stays hidden while you're playing and only appears when you need to change your configuration.",
    icon: HelpCircle
  },
  {
    question: "Does Nexus affect my game performance (FPS)?",
    answer: "Nexus is highly optimized for performance. Our external rendering engine is designed to have a near-zero impact on your game's frame rate, ensuring a smooth experience even on mid-range hardware.",
    icon: Cpu
  },
  {
    question: "Will Nexus ever become public?",
    answer: "We are actively working on finalizing the initial release. Once we achieve our stability and security goals, we will open the project to a wider audience.",
    icon: HelpCircle
  },
];

const FAQItem = ({ question, answer, icon: Icon, index }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 glass-card hover:bg-white/5 transition-all duration-300 rounded-2xl border border-white/10 group"
      >
        <div className="flex items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground/90">{question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary/60 shrink-0 ml-4"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2 text-muted-foreground leading-relaxed text-base border-x border-b border-white/5 mx-4 rounded-b-2xl bg-white/[0.02]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-32 px-4">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gradient mb-4"
          >
            FAQ
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            Common questions about the Nexus project.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
