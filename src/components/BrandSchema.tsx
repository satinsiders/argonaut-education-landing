import { Card } from "./ui/card";

const colorPalette = [
  { name: "Deep Space Navy", hex: "#0A1220", description: "Page background" },
  { name: "Ion Violet", hex: "#7E84FF", description: "Charts, links, accents" },
  { name: "Stellar Lavender", hex: "#A8B0FF", description: "Secondary accents" },
  { name: "Arc Teal", hex: "#21C7C2", description: "Interactive highlights" },
  { name: "Nebula White", hex: "#E9ECF4", description: "Body text" },
  { name: "Soft Graphite", hex: "#C9D0DB", description: "Muted labels" }
];

const typographySpecs = [
  { element: "H1 Display", font: "Cinzel", size: "56-64px", weight: "500", spacing: "-1%" },
  { element: "H2 Headers", font: "Cinzel", size: "36-44px", weight: "500", spacing: "-0.5%" },
  { element: "Body Text", font: "Inter", size: "18-20px", weight: "400", spacing: "0%" },
  { element: "UI Labels", font: "Inter Medium", size: "12-13px", weight: "500", spacing: "8%" }
];

export function BrandSchema() {
  return (
    <section id="brand-schema" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-center text-nebula-white">Brand & Design Schema</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Color Palette */}
          <Card className="p-8 bg-deep-space-navy border-stellar-lavender/20">
            <h3 className="mb-6 text-ion-violet">Techy-AI Color Palette</h3>
            <div className="space-y-4">
              {colorPalette.map((color, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg border border-stellar-lavender/30"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div>
                    <p className="text-nebula-white font-medium">{color.name}</p>
                    <p className="text-sm text-soft-graphite">{color.hex} • {color.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Typography */}
          <Card className="p-8 bg-deep-space-navy border-stellar-lavender/20">
            <h3 className="mb-6 text-ion-violet">Typography System</h3>
            <div className="space-y-6">
              {typographySpecs.map((spec, index) => (
                <div key={index} className="border-b border-stellar-lavender/10 pb-4 last:border-b-0">
                  <p className="text-nebula-white font-medium mb-1">{spec.element}</p>
                  <div className="text-sm text-soft-graphite space-y-1">
                    <p>Font: {spec.font}</p>
                    <p>Size: {spec.size} • Weight: {spec.weight}</p>
                    <p>Letter Spacing: {spec.spacing}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Design Principles */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-ion-violet/10 to-ion-violet/5 border border-ion-violet/30">
            <h4 className="mb-3 text-ion-violet">Grid & Spacing</h4>
            <p className="text-soft-graphite text-sm leading-relaxed">
              12-column grid, 1200-1280px max width, 24px gutters. Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px.
            </p>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-stellar-lavender/10 to-stellar-lavender/5 border border-stellar-lavender/30">
            <h4 className="mb-3 text-stellar-lavender">Components</h4>
            <p className="text-soft-graphite text-sm leading-relaxed">
              Dark navy cards with Stellar Lavender borders, 16-20px radius, soft shadows. Glowing interactive states.
            </p>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-arc-teal/10 to-arc-teal/5 border border-arc-teal/30">
            <h4 className="mb-3 text-arc-teal">Motion & Texture</h4>
            <p className="text-soft-graphite text-sm leading-relaxed">
              180-240ms UI transitions, subtle rectangular grid background, constellation patterns at low opacity.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}