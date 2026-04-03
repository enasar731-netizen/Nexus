import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert, Scale, ScrollText } from "lucide-react";
import Footer from "@/components/Footer";

const Terms = () => {
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
            <Scale className="text-primary w-8 h-8" />
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last Updated: April 3, 2026</p>

          <div className="space-y-12 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                <ScrollText size={16} />
                01. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Nexus external overlay suite, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not download, install, or use the software.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                02. Conduct and Purpose
              </h2>
              <p>
                Nexus and its associated contributors do not endorse or support any form of cheating, unlawful activity, or malicious conduct. The software is developed and distributed solely for educational, analytical, and research purposes in the field of process interaction and external rendering.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                <ShieldAlert size={16} />
                03. Assumption of Risk
              </h2>
              <p className="border-l-2 border-red-500/20 pl-6 bg-red-500/[0.02] py-4 rounded-r-xl">
                The use of external software in online gaming environments carries inherent risks. Nexus is provided for educational and research purposes. You acknowledge that using this software may violate third-party end-user license agreements and may lead to account restrictions or permanent bans. You assume all responsibility and risk for your use of the software.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                04. No Warranty
              </h2>
              <p>
                NEXUS IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SOFTWARE WILL BE UNDETECTED, ERROR-FREE, OR UNINTERRUPTED. WE ARE NOT RESPONSIBLE FOR ANY LOSS OF DATA, SYSTEM DAMAGE, OR ACCOUNT BANNERS RESULTING FROM YOUR USE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                05. No Affiliation
              </h2>
              <p>
                Nexus is a third-party project. We are not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with Roblox Corporation, or any of its subsidiaries or affiliates. All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-widest text-xs opacity-60">
                06. License and Restrictions
              </h2>
              <p>
                We grant you a non-exclusive, non-transferable license to use Nexus for your personal, non-commercial use only. You may not reverse engineer, redistribute, or resell the software.
              </p>
            </section>

            <section className="pt-8 border-t border-primary/10">
              <p className="text-sm text-muted-foreground italic">
                Nexus reserves the right to update these terms at any time without prior notice. Continuous use of the software constitutes acceptance of any changes.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
