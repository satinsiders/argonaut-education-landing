import { Lightbulb, Zap, Target } from "lucide-react";
import { motion } from "motion/react";
import { LearningEffectivenessChart } from "./visualizations/LearningEffectivenessChart";

export function Opportunity() {
  return (
    <section id="opportunity" className="py-32 px-6 bg-gradient-to-br from-ion-violet/5 to-arc-teal/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-stellar-lavender/50"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-ion-violet/20 to-arc-teal/20 rounded-full flex items-center justify-center border-2 border-ion-violet/30">
                <Lightbulb className="w-8 h-8 text-ion-violet" />
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-stellar-lavender/50"></div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-nebula-white">
              The Opportunity
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <LearningEffectivenessChart />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-ion-violet/10 to-stellar-lavender/10 border border-ion-violet/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-ion-violet/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-ion-violet" />
                </div>
                <h4 className="font-display text-2xl text-ion-violet">Evidence</h4>
              </div>
              <p className="text-lg text-soft-graphite leading-relaxed">
                Learning with LLM support can <span className="text-nebula-white font-semibold">outperform lecture</span>, but 
                today's AI is <span className="text-stellar-lavender font-medium">reactive</span>.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-stellar-lavender/10 to-arc-teal/10 border border-stellar-lavender/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-stellar-lavender/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-stellar-lavender" />
                </div>
                <h4 className="font-display text-2xl text-stellar-lavender">Current Limitation</h4>
              </div>
              <p className="text-lg text-soft-graphite leading-relaxed">
                Students must ask first. <span className="text-nebula-white font-semibold">Timing is wrong; thinking isn't triggered.</span>
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-arc-teal/20 via-ion-violet/20 to-stellar-lavender/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-arc-teal/10 to-ion-violet/10 border border-arc-teal/30 rounded-3xl p-12 text-center">
              <h3 className="font-display text-3xl md:text-4xl text-arc-teal mb-6">The Vector of Progress</h3>
              <p className="text-2xl text-nebula-white leading-relaxed font-medium">
                <span className="text-arc-teal font-semibold">Proactivity</span>: teacher like agents that 
                sense when to step in and <span className="text-ion-violet">trigger thinking</span> at the perfect moment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}