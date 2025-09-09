import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-stellar-lavender/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-ion-violet to-stellar-lavender rounded-lg flex items-center justify-center">
                <span className="text-deep-space-navy font-bold">A</span>
              </div>
              <span className="text-xl text-nebula-white font-medium">Argonaut Education</span>
            </div>
            <p className="text-sm text-soft-graphite">© 2024 Argonaut Education Inc.</p>
          </div>
          
          {/* CTA and links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-soft-graphite hover:text-stellar-lavender transition-colors">Privacy</a>
              <a href="#" className="text-soft-graphite hover:text-stellar-lavender transition-colors">Terms</a>
            </div>
            
            <Button 
              className="bg-ion-violet hover:bg-ion-violet/80 text-deep-space-navy"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}