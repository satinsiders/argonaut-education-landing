import { Card } from "./ui/card";
import { VirtualDepartmentDiagram } from "./VirtualDepartmentDiagram";
import { motion } from "motion/react";
import { Layers } from "lucide-react";

const modules = [
  {
    name: "Engine",
    subtitle: "Coming Soon",
    description: "Our proprietary language model specifically trained on K-12 education topics and pedagogical approaches.",
    color: "border-stellar-lavender/30 bg-gradient-to-br from-stellar-lavender/10 to-stellar-lavender/5"
  },
  {
    name: "Orchestrator",
    subtitle: "Central Command",
    description: "Observes learning cues and decides what to deliver next—nudge, micro‑lesson, targeted practice, or escalation.",
    color: "border-ion-violet/30 bg-gradient-to-br from-ion-violet/10 to-ion-violet/5"
  },
  {
    name: "Curriculum Generator",
    subtitle: "Content Creator",
    description: "Prepares focused explanations and short assessments that match the student's current mastery window.",
    color: "border-stellar-lavender/30 bg-gradient-to-br from-stellar-lavender/10 to-stellar-lavender/5"
  },
  {
    name: "Twin Problem Generator",
    subtitle: "Practice Creator",
    description: "Creates isomorphic problems for both math and reading—same structure, new numbers or logic to strengthen transfer.",
    color: "border-arc-teal/30 bg-gradient-to-br from-arc-teal/10 to-arc-teal/5"
  },
  {
    name: "Micro‑Solver",
    subtitle: "Reasoning Coach",
    description: "Works through steps like a teacher, verifying reasoning and surfacing minimal hints.",
    color: "border-soft-graphite/30 bg-gradient-to-br from-soft-graphite/10 to-soft-graphite/5"
  },
  {
    name: "Meeting Copilot",
    subtitle: "Voice Support",
    description: "Live voice coaching with transcription and proactive conversation initiation based on learning progress context.",
    color: "border-nebula-white/20 bg-gradient-to-br from-nebula-white/5 to-nebula-white/2"
  }
];

export function ProductModules() {
  return (
    <section id="product-modules" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-ion-violet to-stellar-lavender rounded-2xl flex items-center justify-center mr-4">
              <Layers className="text-deep-space-navy" size={32} />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-nebula-white">
              Product Modules
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-ion-violet via-stellar-lavender to-arc-teal mx-auto mb-4"></div>
          <p className="text-xl text-soft-graphite max-w-3xl mx-auto leading-relaxed">
            Our AI education system consists of specialized modules working in harmony to deliver personalized learning experiences
          </p>
        </motion.div>
        
        {/* Interactive Diagram */}
        <div className="mb-16">
          <VirtualDepartmentDiagram />
        </div>
        
        {/* Module Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className={`p-6 ${module.color} border-2 transition-all duration-200 hover:scale-105`}>
              <div className="mb-4">
                <h4 className="text-nebula-white mb-1">{module.name}</h4>
                <p className="text-sm text-ion-violet font-medium uppercase tracking-wider">{module.subtitle}</p>
              </div>
              <p className="text-soft-graphite leading-relaxed">{module.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}