import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Eye, Server, Users, Globe, Lock, Baby, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground/80 font-sans selection:bg-primary/20">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 flex items-center gap-4">
            <ShieldCheck className="text-primary w-8 h-8" />
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last Updated: April 4, 2026</p>

          <div className="space-y-12 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                <Eye size={16} />
                01. Information We Collect
              </h2>
              <p className="mb-4">
                Nexus is designed with privacy as a core principle. The Nexus overlay software does <strong className="text-foreground">not</strong> collect, transmit, or store any personal data from your system. No telemetry, no analytics, no keylogging — the application runs entirely locally on your machine.
              </p>
              <p>
                When you visit our website (nexusexe.xyz), we may collect standard, anonymous usage data such as page views and referral sources through third-party analytics services. This data cannot be used to personally identify you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                <Server size={16} />
                02. Software Data Handling
              </h2>
              <p className="border-l-2 border-emerald-500/20 pl-6 bg-emerald-500/[0.02] py-4 rounded-r-xl">
                The Nexus overlay operates as a 100% external, client-side application. It reads publicly available process data from memory for rendering purposes only. No data is sent to any external server, API, or third party. All configuration files (configs, settings) are stored locally on your device and are never uploaded.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                <Lock size={16} />
                03. Authentication & Licensing
              </h2>
              <p>
                Nexus uses a license key and authentication system. Limited data is exchanged with our authentication provider during the verification process. This may include your hardware identifier (HWID) and license key. This information is used solely to validate your access and prevent unauthorized redistribution. We do not collect your name, email, or any other personal information through this process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                <Users size={16} />
                04. Discord & Community
              </h2>
              <p>
                Our community operates through Discord. Any information you share in our Discord server (username, messages, etc.) is subject to Discord's own Privacy Policy. We do not collect or store Discord user data outside of the Discord platform. Server moderation logs may be maintained for community safety purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                <Globe size={16} />
                05. Cookies & Website
              </h2>
              <p>
                We do not use cookies for tracking or advertising purposes. Any cookies present are strictly functional (e.g., theme preferences). We do not serve targeted advertisements or share any data with advertising networks.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                <Mail size={16} />
                06. Contact
              </h2>
              <p>
                If you have any questions about this Privacy Policy, you can reach us through our <a href="https://discord.gg/sWqkEANm9q" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord server</a>.
              </p>
            </section>

            <section className="pt-8 border-t border-primary/10">
              <p className="text-sm text-muted-foreground italic">
                Nexus reserves the right to update this Privacy Policy at any time without prior notice. Continued use of the software or website constitutes acceptance of any changes.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
