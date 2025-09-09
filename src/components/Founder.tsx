import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, User } from "lucide-react";
import { motion } from "motion/react";
import founderPhoto from 'figma:asset/419e8ae4da44fec8b791566eb8e00354afa33fbc.png';

export function Founder() {
  return (
    <section id="founder" className="py-16 md:py-24 px-4 md:px-6">
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
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-ion-violet to-stellar-lavender rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
              <User className="text-deep-space-navy" size={24} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-nebula-white">
              Founder
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-ion-violet via-stellar-lavender to-arc-teal mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-lg mx-auto bg-gradient-to-br from-ion-violet/10 to-stellar-lavender/10 border border-stellar-lavender/30 p-6 md:p-8 text-center">
            {/* Profile Photo - Significantly Larger */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto mb-8 overflow-hidden border-4 border-gradient-to-br from-ion-violet to-stellar-lavender shadow-2xl">
              <img 
                src={founderPhoto} 
                alt="Jason Kim, Founder & CEO of Argonaut Education"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <h3 className="text-xl md:text-2xl mb-2 text-nebula-white">Jason Kim</h3>
            <p className="text-soft-graphite mb-2">UCLA</p>
            <p className="text-sm text-ion-violet font-medium mb-4 uppercase tracking-wider">Founder & CEO</p>
            <p className="text-soft-graphite mb-6 leading-relaxed text-sm md:text-base">
              Product & GTM leader building the AI system that powers proactive teachers for every learner. Currently developing the orchestration engine and curriculum generation algorithms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-stellar-lavender/30 text-stellar-lavender hover:bg-stellar-lavender/10 w-full sm:w-auto"
                onClick={() => window.open('https://www.linkedin.com/in/jasonohy/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
              <Button 
                size="sm" 
                className="bg-ion-violet hover:bg-ion-violet/90 text-deep-space-navy font-medium w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}