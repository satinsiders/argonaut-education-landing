import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ExternalLink, Zap, Target, Infinity } from "lucide-react";

export function Solution() {
  return (
    <section id="solution" className="py-32 px-6 bg-gradient-to-br from-ion-violet/5 to-stellar-lavender/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-nebula-white mb-8">
            The Solution
          </h2>
        </motion.div>
        
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ion-violet/20 via-stellar-lavender/20 to-arc-teal/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-ion-violet/10 to-arc-teal/10 p-12 rounded-3xl border border-ion-violet/30">
            <div className="text-center mb-12">
              <h3 className="font-display text-4xl md:text-5xl text-transparent bg-gradient-to-r from-ion-violet via-stellar-lavender to-arc-teal bg-clip-text mb-6">
                Argonaut's Virtual Department
              </h3>
              <p className="text-2xl text-nebula-white leading-relaxed max-w-4xl mx-auto">
                A <span className="text-ion-violet font-semibold">Virtual Department</span> of <span className="text-stellar-lavender font-semibold">proactive AI teachers</span>. 
                Our orchestrator detects learning needs and triggers the right specialized agent at the right time.
              </p>
            </div>

            <div className="bg-gradient-to-r from-arc-teal/10 to-ion-violet/10 border border-arc-teal/20 rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-display text-2xl text-arc-teal mb-2">Where We're Starting</h4>
                  <p className="text-soft-graphite text-lg">
                    <span className="text-nebula-white font-medium">SuperfastSAT</span> is our first product, 
                    where we're building traction and proving our proactive AI approach works.
                  </p>
                </div>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-arc-teal/30 text-arc-teal hover:bg-arc-teal/10 px-8 py-4 text-lg flex-shrink-0"
                  onClick={() => window.open('https://www.superfastsat.com/en', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit SuperfastSAT
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-gradient-to-br from-ion-violet/10 to-ion-violet/5 border border-ion-violet/20 rounded-2xl p-8 hover:border-ion-violet/40 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-ion-violet/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-ion-violet" />
              </div>
              <h4 className="font-display text-2xl text-ion-violet">Right Time Intervention</h4>
            </div>
            <p className="text-soft-graphite text-lg leading-relaxed">
              Prompts thinking at the perfect moment, building understanding rather than dependency.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-stellar-lavender/10 to-stellar-lavender/5 border border-stellar-lavender/20 rounded-2xl p-8 hover:border-stellar-lavender/40 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-stellar-lavender/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-stellar-lavender" />
              </div>
              <h4 className="font-display text-2xl text-stellar-lavender">Mastery Progression</h4>
            </div>
            <p className="text-soft-graphite text-lg leading-relaxed">
              Adapts materials and practice dynamically to close knowledge gaps and build mastery.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-arc-teal/10 to-arc-teal/5 border border-arc-teal/20 rounded-2xl p-8 hover:border-arc-teal/40 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-arc-teal/20 rounded-xl flex items-center justify-center">
                <Infinity className="w-6 h-6 text-arc-teal" />
              </div>
              <h4 className="font-display text-2xl text-arc-teal">Consistency at Scale</h4>
            </div>
            <p className="text-soft-graphite text-lg leading-relaxed">
              Teacher-like support for every student, without the constraints of staffing limits.
            </p>
          </motion.div>
        </div>
        
        {/* Get in Touch CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-soft-graphite text-lg mb-6">Ready to transform education with AI?</p>
          <Button 
            size="lg" 
            className="bg-ion-violet hover:bg-ion-violet/90 text-deep-space-navy px-8 py-4 text-lg font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}