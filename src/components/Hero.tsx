import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ExternalLink, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20 md:pt-0">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-ion-violet/10 via-transparent to-arc-teal/10"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#7E84FF" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 opacity-10"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 100 100" className="text-stellar-lavender">
          <polygon points="50,5 85,85 15,85" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="30" r="2" fill="currentColor" />
          <circle cx="30" cy="70" r="2" fill="currentColor" />
          <circle cx="70" cy="70" r="2" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 opacity-10"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <svg viewBox="0 0 100 100" className="text-arc-teal">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
        </svg>
      </motion.div>
      
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-nebula-white mb-8 leading-none tracking-tight">
            Agentic AI for
            <span className="block bg-gradient-to-r from-ion-violet via-stellar-lavender to-arc-teal bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-soft-graphite max-w-4xl mx-auto leading-relaxed mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Argonaut builds <span className="text-ion-violet font-medium">proactive AI teachers</span> that step in at the right moment to bring 1:1 personalized learning to everyone.
          </motion.p>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-ion-violet hover:bg-ion-violet/90 text-deep-space-navy px-8 py-4 text-lg font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Credibility Tags */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-soft-graphite mb-6">Backed by leading institutions:</p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 px-4">
              {/* Government Backing */}
              <motion.div 
                className="bg-gradient-to-r from-arc-teal/10 to-arc-teal/5 border border-arc-teal/30 rounded-xl px-4 md:px-6 py-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                  <div className="w-2 h-2 bg-arc-teal rounded-full"></div>
                  <span className="text-nebula-white font-medium text-sm md:text-base">South Korean Government</span>
                  <span className="text-soft-graphite text-xs md:text-sm">Global Expansion</span>
                </div>
              </motion.div>
              
              {/* Funding */}
              <motion.div 
                className="bg-gradient-to-r from-ion-violet/10 to-ion-violet/5 border border-ion-violet/30 rounded-xl px-4 md:px-6 py-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                  <div className="w-2 h-2 bg-ion-violet rounded-full"></div>
                  <span className="text-nebula-white font-medium text-sm md:text-base">$550K Raised</span>
                  <span className="text-soft-graphite text-xs md:text-sm">Seed + Government</span>
                </div>
              </motion.div>
              
              {/* Accelerator */}
              <motion.div 
                className="bg-gradient-to-r from-stellar-lavender/10 to-stellar-lavender/5 border border-stellar-lavender/30 rounded-xl px-4 md:px-6 py-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                  <div className="w-2 h-2 bg-stellar-lavender rounded-full"></div>
                  <span className="text-nebula-white font-medium text-sm md:text-base">Mind The Bridge</span>
                  <span className="text-soft-graphite text-xs md:text-sm">Accelerator Program</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gradient-to-r from-arc-teal/15 to-arc-teal/5 border border-arc-teal/40 rounded-full px-4 md:px-6 py-3 mx-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-arc-teal rounded-full animate-pulse"></div>
                <span className="text-nebula-white font-medium text-sm md:text-base">SuperfastSAT</span>
              </div>
              <span className="text-arc-teal text-xs md:text-sm">— Where we're starting</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}