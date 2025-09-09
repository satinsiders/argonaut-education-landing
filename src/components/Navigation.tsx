import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArgonautLogo } from './ArgonautLogo';

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
  };

  return (
    <>
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <ArgonautLogo />
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
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
    </>
  );
}