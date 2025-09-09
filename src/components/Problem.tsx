import { AlertTriangle, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function Problem() {
  return (
    <section id="problem" className="py-32 px-6 bg-gradient-to-br from-red-900/10 to-orange-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Classical academic header with decorative elements */}
          <div className="relative">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-stellar-lavender/50"></div>
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500/30">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-stellar-lavender/50"></div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-nebula-white">
              The Problem
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-3xl p-6 md:p-12">
            {/* Academic-style content frame */}
            <div className="border border-red-500/20 rounded-2xl p-6 md:p-8">
              <div className="text-center">
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-red-400 mb-6 md:mb-8">Education Polarization</h3>
                <p className="text-lg md:text-xl lg:text-2xl text-nebula-white leading-relaxed font-medium">
                  <span className="text-red-400">Polarization</span> is <span className="text-orange-400">accelerating</span> across 
                  public and private systems, producing <span className="text-yellow-400">uneven access</span> to 
                  timely, high quality teaching.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500/20 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-red-500/30">
                    <TrendingUp className="w-10 h-10 text-red-400 rotate-180" />
                  </div>
                  <h4 className="font-display text-xl text-red-400 mb-3">Public Systems</h4>
                  <p className="text-soft-graphite">Facing staffing shortages and declining quality</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500/20 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-orange-500/30">
                    <TrendingUp className="w-10 h-10 text-orange-400" />
                  </div>
                  <h4 className="font-display text-xl text-orange-400 mb-3">Private Advantage</h4>
                  <p className="text-soft-graphite">Increasingly amplifies existing inequalities</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}