
import { Shield, Award, Users2 } from "lucide-react";

const AboutFounder = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-construction-medium/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png" 
                alt="Maikel Schouw, oprichter SMB Geveltechniek" 
                className="relative w-full rounded-3xl shadow-2xl construction-shadow transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-2xl shadow-lg">
                <Award className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Users2 className="w-4 h-4 mr-2" />
              Oprichter & Vakman
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              Maikel Schouw
              <br />
              <span className="text-gradient">Passie voor vakmanschap</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Mijn naam is <strong className="text-foreground">Maikel Schouw</strong> en mijn bedrijf 
                is opgericht in oktober 2018 vanuit een diepe passie voor ambachtelijk metselwerk en 
                duurzame bouwkwaliteit.
              </p>
              
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-2xl border-l-4 border-primary">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Onze belofte
                </h3>
                <p className="italic">
                  "Bij ons geen kleine lettertjes of verborgen kosten. Wij doen wat we zeggen 
                  en zeggen wat wij gaan doen."
                </p>
              </div>
              
              <p>
                We richten ons op zowel nieuwbouw als renovatieprojecten, waarbij vakmanschap, 
                betrouwbaarheid en betrokkenheid centraal staan. Met meer dan 25 jaar ervaring 
                kunnen wij wel zeggen dat wij ons vak verstaan en altijd denken in oplossingen.
              </p>
              
              <div className="bg-muted/50 p-6 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-3">Innovatie & Toekomst</h3>
                <p className="text-sm">
                  We zetten steeds meer in op innovatie en robotisering binnen de bouw. 
                  Niet om mensen te vervangen, maar om ze te ondersteunen — en het werk 
                  lichter, sneller én preciezer te maken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
