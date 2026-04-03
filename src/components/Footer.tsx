import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isTermsPage = location.pathname === "/terms";

  return (
    <footer className="relative py-12 px-4 border-t border-primary/10">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-1 text-center text-muted-foreground/60">
          <p className="text-sm tracking-tight">&copy; 2026 Nexus. All rights reserved.</p>
          <p className="text-sm tracking-tight">Use at your own risk.</p>
          {!isTermsPage && (
             <Link to="/terms" className="text-[10px] font-medium uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer mt-3 opacity-50 hover:opacity-100 transition-opacity">
               Terms of Service
             </Link>
          )}
        </div>
        
        <div className="w-12 h-0.5 bg-primary/20 rounded-full mt-4" />
      </div>
    </footer>
  );
};

export default Footer;
