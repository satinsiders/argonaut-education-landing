import { motion } from "motion/react";
import { GraduationCap, Lightbulb, Users, Globe } from "lucide-react";

export function Vision() {
  return (
    <section id="vision" className="py-32 relative px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl lg:text-6xl font-semibold text-nebula-white mb-8">
            Our Vision for Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ion-violet via-stellar-lavender to-arc-teal mx-auto mb-6"></div>
          <p className="text-xl text-soft-graphite max-w-3xl mx-auto leading-relaxed">
            Transforming education from privilege-based to merit-based through universal access to world-class AI teachers
          </p>
        </motion.div>

        {/* Main Vision Content */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Core Vision Statement */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-stellar-lavender/10 to-arc-teal/5 rounded-3xl p-12 border border-stellar-lavender/20">
              <h3 className="font-display text-3xl lg:text-4xl font-semibold text-nebula-white mb-8">
                Eliminating Education Polarization Through 
                <span className="block bg-gradient-to-r from-ion-violet via-stellar-lavender to-arc-teal bg-clip-text text-transparent mt-2">
                  Universal AI Learning
                </span>
              </h3>
              <p className="text-xl text-soft-graphite leading-relaxed max-w-4xl mx-auto">
                Just as the internet universalized access to information, Argonaut's proactive AI system will universalize access to world-class education, replacing the inequitable patchwork of traditional tutoring and teaching with personalized, adaptive learning for every student.
              </p>
            </div>
          </div>

          {/* Vision Pillars - Balanced Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Universal Access */}
              <div className="bg-gradient-to-br from-arc-teal/10 to-arc-teal/5 border border-arc-teal/30 rounded-2xl p-8 hover:border-arc-teal/50 transition-all duration-300 h-72">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-arc-teal/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Globe className="text-arc-teal" size={32} />
                    </div>
                    <h4 className="font-display text-2xl font-semibold text-nebula-white">Universal Access Revolution</h4>
                  </div>
                  <p className="text-soft-graphite leading-relaxed text-lg flex-1 mb-6">
                    Today, quality education is determined by geography, wealth, and access to elite institutions. We're building a future where every student—regardless of background—has access to the same caliber of personalized instruction that was previously reserved for the privileged few.
                  </p>
                </div>
              </div>

              {/* Proactive Intelligence */}
              <div className="bg-gradient-to-br from-ion-violet/10 to-ion-violet/5 border border-ion-violet/30 rounded-2xl p-8 hover:border-ion-violet/50 transition-all duration-300 h-72">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-ion-violet/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="text-ion-violet" size={32} />
                    </div>
                    <h4 className="font-display text-2xl font-semibold text-nebula-white">Proactive Intelligence</h4>
                  </div>
                  <p className="text-soft-graphite leading-relaxed text-lg flex-1 mb-6">
                    Unlike reactive tutoring that responds to failures, our AI teachers anticipate learning gaps, adapt in real-time to student needs, and provide continuous optimization of the learning path—creating an educational experience that evolves with each learner.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Transforming Human Roles */}
              <div className="bg-gradient-to-br from-stellar-lavender/10 to-stellar-lavender/5 border border-stellar-lavender/30 rounded-2xl p-8 hover:border-stellar-lavender/50 transition-all duration-300 h-72">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-stellar-lavender/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Users className="text-stellar-lavender" size={32} />
                    </div>
                    <h4 className="font-display text-2xl font-semibold text-nebula-white">Transforming Human Roles</h4>
                  </div>
                  <p className="text-soft-graphite leading-relaxed text-lg flex-1 mb-6">
                    Rather than replacing human educators, we're elevating their purpose. Teachers and tutors will transition from information delivery to what humans do best: providing emotional support, motivation, creativity, and mentorship—the qualitative aspects that inspire lifelong learning.
                  </p>
                </div>
              </div>

              {/* Scalable Excellence */}
              <div className="bg-gradient-to-br from-arc-teal/10 to-arc-teal/5 border border-arc-teal/30 rounded-2xl p-8 hover:border-arc-teal/50 transition-all duration-300 h-72">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-arc-teal/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-arc-teal" size={32} />
                    </div>
                    <h4 className="font-display text-2xl font-semibold text-nebula-white">Scalable Excellence</h4>
                  </div>
                  <p className="text-soft-graphite leading-relaxed text-lg flex-1 mb-6">
                    Our multi-agent system doesn't just scale content—it scales pedagogical expertise. Each AI teacher learns from millions of successful learning interactions, constantly improving to deliver the optimal educational experience for every individual student.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Future Impact Statement */}
          <motion.div 
            className="bg-gradient-to-br from-deep-space-navy/80 to-ion-violet/10 rounded-3xl p-12 border border-ion-violet/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h4 className="font-display text-2xl font-semibold text-arc-teal mb-6">Our Ultimate Goal</h4>
              <p className="text-xl text-nebula-white leading-relaxed max-w-4xl mx-auto">
                A world where educational outcomes are determined by a student's curiosity and effort, not their circumstances. Where the gap between the highest and lowest performing students shrinks not by lowering standards, but by elevating everyone to excellence through AI that understands how each mind learns best.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}