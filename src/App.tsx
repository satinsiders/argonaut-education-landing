import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { StatusQuo } from "./components/StatusQuo";
import { Problem } from "./components/Problem";
import { Opportunity } from "./components/Opportunity";
import { Solution } from "./components/Solution";
import { ProductModules } from "./components/ProductModules";
import { Vision } from "./components/Vision";
import { Traction } from "./components/Traction";
import { Roadmap } from "./components/Roadmap";
import { Founder } from "./components/Founder";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-deep-space-navy text-nebula-white">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        <StatusQuo />
        <Problem />
        <Opportunity />
        <Solution />
        <ProductModules />
        <Vision />
        <Traction />
        <Roadmap />
        <Founder />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}