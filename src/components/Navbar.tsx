import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { name: "Features", href: "#features" },
  { name: "Why Nexus", href: "#why-nexus" },
  { name: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string>("Features");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 150;
      links.forEach((link) => {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            setActive(link.name);
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none"
    >
      <div className="w-max px-8 py-3 glass-card rounded-full flex items-center justify-center gap-10 border border-primary/20 backdrop-blur-xl pointer-events-auto">
        <div 
          className="flex items-center gap-2 text-primary font-bold tracking-tighter cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300">NEXUS</span>
        </div>
        
        <div className="flex items-center gap-2 relative">
          {links.map((link) => (
             <a 
               key={link.name}
               href={link.href} 
               onMouseEnter={() => setHovered(link.name)}
               onMouseLeave={() => setHovered(null)}
               className={`relative px-5 py-1.5 text-sm font-medium transition-colors duration-300 z-10 ${
                 active === link.name || hovered === link.name ? "text-primary" : "text-muted-foreground"
               }`}
               onClick={(e) => {
                 e.preventDefault();
                 document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
               }}
             >
               {link.name}
               {(hovered === link.name || (active === link.name && !hovered)) && (
                 <motion.div
                   layoutId="nav-pill"
                   className="absolute inset-0 bg-primary/10 rounded-full -z-10 border border-primary/20 shadow-[0_4px_12px_rgba(var(--primary),0.1)]"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ type: "spring", bounce: 0.35, duration: 0.6 }}
                 />
               )}
             </a>
          ))}
        </div>

        <div className="flex items-center">
           <span className="text-xs font-mono py-1 px-3 bg-primary/10 text-primary border border-primary/20 rounded-full">Beta</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
