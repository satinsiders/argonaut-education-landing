import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-16 text-center text-nebula-white">Team</h2>
        
        <Card className="max-w-md mx-auto bg-gradient-to-br from-ion-violet/10 to-stellar-lavender/10 border border-stellar-lavender/30 p-8 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ion-violet to-stellar-lavender mx-auto mb-6 flex items-center justify-center">
            <span className="text-2xl text-deep-space-navy font-semibold">JK</span>
          </div>
          
          <h3 className="mb-2 text-nebula-white">Jason Kim</h3>
          <p className="text-sm text-ion-violet font-medium mb-4 uppercase tracking-wider">Founder & CEO</p>
          <p className="text-soft-graphite mb-6 leading-relaxed">
            Product & GTM leader building proactive AI teachers for every learner.
          </p>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="border-stellar-lavender/30 text-stellar-lavender hover:bg-stellar-lavender/10"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            LinkedIn Profile
          </Button>
        </Card>
      </div>
    </section>
  );
}