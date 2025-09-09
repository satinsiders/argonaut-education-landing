import { motion } from 'motion/react';
import { MapPin, Target, BookOpen, GraduationCap, Users, TrendingUp } from 'lucide-react';

const roadmapItems = [
  {
    period: "Now → Q4 2025",
    title: "SAT Mastery Platform",
    description: "Deep specialization in SAT Reading & Writing, Math with our full AI teacher stack",
    details: [
      "Complete Orchestrator deployment across all SAT topics",
      "Advanced problem generation and personalized learning paths", 
      "Voice-enabled tutoring with Meeting Copilot integration",
      "Real-time progress tracking and adaptive curriculum"
    ],
    icon: Target,
    color: "ion-violet",
    status: "current",
    metrics: "10,000+ practice problems, 95% accuracy in gap detection"
  },
  {
    period: "2026",
    title: "AP Excellence Expansion", 
    description: "Strategic expansion into high-demand Advanced Placement subjects",
    details: [
      "AP Calculus AB/BC with step-by-step problem solving",
      "AP Statistics with real-world data analysis scenarios",
      "AP Physics with interactive simulations and concept mapping",
      "AP English Language with essay coaching and rhetoric analysis"
    ],
    icon: BookOpen,
    color: "stellar-lavender", 
    status: "next",
    metrics: "4 core AP subjects, targeting 50K+ students"
  },
  {
    period: "2027+",
    title: "Complete K-12 Ecosystem",
    description: "Full curriculum coverage following proven mastery learning principles",
    details: [
      "Elementary foundations (K-5) with gamified learning experiences",
      "Middle school transitions (6-8) with confidence-building approaches", 
      "High school preparation across all core subjects",
      "Teacher dashboard and classroom integration tools"
    ],
    icon: GraduationCap,
    color: "arc-teal",
    status: "future", 
    metrics: "All grade levels, multi-language support, district partnerships"
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-stellar-lavender to-arc-teal rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
              <MapPin className="text-deep-space-navy" size={24} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-nebula-white">
              Roadmap
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-stellar-lavender via-ion-violet to-arc-teal mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-soft-graphite max-w-2xl mx-auto leading-relaxed px-4">
            Our strategic expansion from SAT mastery to comprehensive K-12 AI education
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ion-violet via-stellar-lavender to-arc-teal"></div>
          
          <div className="space-y-8 md:space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot - repositioned for mobile */}
                <div className={`absolute left-2 md:left-6 w-4 h-4 rounded-full border-2 ${
                  item.status === 'current' ? 'bg-ion-violet border-ion-violet' :
                  item.status === 'next' ? 'bg-stellar-lavender border-stellar-lavender' :
                  'bg-arc-teal border-arc-teal'
                } shadow-lg`}></div>
                
                {/* Content Card */}
                <div className={`ml-8 md:ml-20 p-4 md:p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] w-full ${
                  item.status === 'current' 
                    ? 'bg-gradient-to-br from-ion-violet/15 to-ion-violet/5 border-ion-violet/30 hover:border-ion-violet/50' 
                    : item.status === 'next' 
                    ? 'bg-gradient-to-br from-stellar-lavender/15 to-stellar-lavender/5 border-stellar-lavender/30 hover:border-stellar-lavender/50'
                    : 'bg-gradient-to-br from-arc-teal/15 to-arc-teal/5 border-arc-teal/30 hover:border-arc-teal/50'
                }`}>
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        item.status === 'current' ? 'bg-ion-violet/20' :
                        item.status === 'next' ? 'bg-stellar-lavender/20' :
                        'bg-arc-teal/20'
                      }`}>
                        <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${
                          item.status === 'current' ? 'text-ion-violet' :
                          item.status === 'next' ? 'text-stellar-lavender' :
                          'text-arc-teal'
                        }`} />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-display font-semibold text-nebula-white mb-2">{item.title}</h4>
                        <span className={`text-xs md:text-sm px-3 py-1 rounded-full font-medium ${
                          item.status === 'current' ? 'bg-ion-violet/20 text-ion-violet' :
                          item.status === 'next' ? 'bg-stellar-lavender/20 text-stellar-lavender' :
                          'bg-arc-teal/20 text-arc-teal'
                        }`}>
                          {item.period}
                        </span>
                      </div>
                    </div>
                    
                    {item.status === 'current' && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-ion-violet rounded-full animate-pulse"></div>
                        <span className="text-ion-violet text-xs md:text-sm font-medium">ACTIVE</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-soft-graphite mb-6 leading-relaxed">{item.description}</p>

                  {/* Details List */}
                  <div className="space-y-3 mb-6">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          item.status === 'current' ? 'bg-ion-violet' :
                          item.status === 'next' ? 'bg-stellar-lavender' :
                          'bg-arc-teal'
                        }`}></div>
                        <p className="text-sm md:text-base text-soft-graphite leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className={`p-3 md:p-4 rounded-xl border ${
                    item.status === 'current' ? 'bg-ion-violet/5 border-ion-violet/20' :
                    item.status === 'next' ? 'bg-stellar-lavender/5 border-stellar-lavender/20' :
                    'bg-arc-teal/5 border-arc-teal/20'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className={`w-4 h-4 ${
                        item.status === 'current' ? 'text-ion-violet' :
                        item.status === 'next' ? 'text-stellar-lavender' :
                        'text-arc-teal'
                      }`} />
                      <span className="text-sm font-medium text-nebula-white">Key Metrics</span>
                    </div>
                    <p className="text-xs md:text-sm text-soft-graphite">{item.metrics}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}