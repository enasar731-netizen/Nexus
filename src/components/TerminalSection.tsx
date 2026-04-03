import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const terminalLines = [
  { text: "> Resolving DataModel process...", color: "text-muted-foreground", delay: 0 },
  { text: "[OK] Found process: RobloxPlayerBeta.exe (PID: 14092)", color: "text-primary", delay: 800 },
  { text: "> Initializing external memory scanner...", color: "text-muted-foreground", delay: 1500 },
  { text: "[OK] Memory space acquired. Bypass active.", color: "text-primary", delay: 2400 },
  { text: "[NEXUS] injected press insert for menu", color: "text-accent font-bold", delay: 3200 }
];

const TerminalSection = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const timeouts = terminalLines.map((line, index) => {
      return setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [hasStarted]);

  return (
    <section className="relative py-24 px-4 font-mono">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setHasStarted(true)}
          className="glass-card-glow rounded-xl overflow-hidden border border-primary/20 shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-background/80 border-b border-primary/20 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              Administrator: Nexus_v1.0.exe
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-[250px] bg-background/50 overflow-hidden relative">
            <div className="space-y-2 text-sm md:text-base">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${line.color}`}
                >
                  <span className="mr-2">C:\Nexus&gt;</span>
                  {line.text}
                </motion.div>
              ))}
              
              {hasStarted && visibleLines < terminalLines.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2.5 h-5 bg-primary ml-1 align-middle"
                />
              )}
            </div>
            
            {/* Ambient inner glow */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
