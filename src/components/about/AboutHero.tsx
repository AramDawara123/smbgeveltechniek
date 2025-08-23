
import { Shield } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
            Over SMB Geveltechniek
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-in">
            Bouwen met vertrouwen
            <br />
            <span className="text-gradient">sinds 1999</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            25+ jaar ervaring in vakmanschap, betrouwbaarheid en betrokkenheid
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
