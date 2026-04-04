import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isTermsPage = location.pathname === "/terms";
  const isPrivacyPage = location.pathname === "/privacy";

  return (
    <footer className="relative py-12 px-4 border-t border-primary/10">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6 mb-2">
          <a 
            href="https://discord.gg/sWqkEANm9q" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110 group"
            title="Join our Discord"
          >
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="group-hover:drop-shadow-[0_0_10px_rgba(155,135,245,0.8)]"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
            </svg>
          </a>
          <a 
            href="mailto:nexusexternalcontact@gmail.com" 
            className="text-muted-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110 group"
            title="Email us at nexusexternalcontact@gmail.com"
          >
            <Mail size={28} className="group-hover:drop-shadow-[0_0_10px_rgba(155,135,245,0.8)]" />
          </a>
        </div>
        
        <div className="flex flex-col items-center gap-1 text-center text-muted-foreground/60">
          <p className="text-sm tracking-tight">&copy; 2026 Nexus. All rights reserved.</p>
          <p className="text-sm tracking-tight">Use at your own risk.</p>
          {(!isTermsPage || !isPrivacyPage) && (
            <div className="flex items-center gap-3 mt-3">
              {!isTermsPage && (
                <Link to="/terms" className="text-[10px] font-medium uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              )}
              {!isTermsPage && !isPrivacyPage && (
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              )}
              {!isPrivacyPage && (
                <Link to="/privacy" className="text-[10px] font-medium uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              )}
            </div>
          )}
        </div>
        
        <div className="w-12 h-0.5 bg-primary/20 rounded-full mt-4" />
      </div>
    </footer>
  );
};

export default Footer;
