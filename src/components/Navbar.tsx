import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Features", href: "#features" },
  { name: "Why Nexus", href: "#why-nexus" },
  { name: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string>("Features");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4"
      >
        <div className="w-full max-w-[95%] md:w-max px-6 md:px-8 py-3 glass-card rounded-full flex items-center justify-between md:justify-center gap-4 md:gap-10 border border-primary/20 backdrop-blur-xl pointer-events-auto shadow-2xl shadow-primary/5">
          <div 
            className="flex items-center gap-2 text-primary font-bold tracking-tighter cursor-pointer group whitespace-nowrap" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300">NEXUS</span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 relative">
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

          <div className="flex items-center gap-4">
             <span className="hidden sm:inline-block text-xs font-mono py-1 px-3 bg-primary/10 text-primary border border-primary/20 rounded-full">Beta</span>
             
             {/* Mobile Toggle */}
             <button 
              className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[49] md:hidden bg-background/80 backdrop-blur-2xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-8 items-center">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-2xl font-bold tracking-tight ${active === link.name ? 'text-primary' : 'text-foreground/60'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="w-12 h-1 bg-primary/20 rounded-full" />
              <span className="text-sm font-mono text-primary animate-pulse">Nexus</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

