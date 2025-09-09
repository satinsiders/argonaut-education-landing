import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArgonautLogo } from './ArgonautLogo';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'status-quo', label: 'Status Quo' },
  { id: 'problem', label: 'Problem' },
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'solution', label: 'Solution' },
  { id: 'product-modules', label: 'Product' },
  { id: 'vision', label: 'Vision' },
  { id: 'traction', label: 'Traction' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'founder', label: 'Founder' }
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <ArgonautLogo />
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-deep-space-navy/80 backdrop-blur-md border border-stellar-lavender/20 rounded-full p-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-nebula-white" />
          ) : (
            <Menu className="w-6 h-6 text-nebula-white" />
          )}
        </motion.button>
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <motion.div 
          className="flex gap-1 bg-deep-space-navy/80 backdrop-blur-md border border-stellar-lavender/20 rounded-full p-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-ion-violet text-deep-space-navy font-medium'
                  : 'text-soft-graphite hover:text-nebula-white hover:bg-stellar-lavender/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background overlay */}
            <div 
              className="absolute inset-0 bg-deep-space-navy/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu content */}
            <motion.div
              className="relative flex flex-col items-center justify-center h-full space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-ion-violet text-deep-space-navy'
                      : 'text-nebula-white hover:text-ion-violet hover:bg-stellar-lavender/10'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}