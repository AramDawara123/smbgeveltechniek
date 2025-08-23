
import { Wrench, TrendingUp, Users2 } from "lucide-react";

const VoegrobotSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-construction-medium/20 to-primary/20 rounded-3xl transform -rotate-2"></div>
              <img 
                src="/lovable-uploads/b9e3a597-4b31-4822-91bf-5eb1ab8ac8d6.png" 
                alt="Voegrobot prototype SMB Geveltechniek" 
                className="relative w-full rounded-3xl shadow-2xl construction-shadow transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              De voeger van de 
              <span className="text-gradient"> toekomst</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Als lid van <strong className="text-primary">Bouwend Nederland</strong> zijn we voortdurend op zoek naar manieren 
                om het werk op de bouwplaats slimmer en efficiënter te maken.
              </p>
              
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-2xl border-l-4 border-primary">
                <p>
                  Vanuit die ambitie hebben we een <strong className="text-foreground">voegrobot ontwikkeld</strong> – 
                  momenteel nog een prototype, maar met veelbelovende resultaten.
                </p>
              </div>
              
              <p>
                Samen met <strong className="text-primary">RoboHouse</strong> werken we aan de verdere ontwikkeling van deze innovatie. 
                De robot is ontworpen om het zware voegwerk te verlichten, de productiviteit te verhogen en een constante kwaliteit te leveren.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="text-center p-4 bg-background rounded-xl border border-border/50">
                  <Wrench className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Zware werk verlichten</h4>
                </div>
                <div className="text-center p-4 bg-background rounded-xl border border-border/50">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Productiviteit verhogen</h4>
                </div>
                <div className="text-center p-4 bg-background rounded-xl border border-border/50">
                  <Users2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">Vakmanschap ondersteunen</h4>
                </div>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-2xl">
                <p className="italic text-foreground font-medium">
                  "We geloven in technologie als verlengstuk van de mens. Met deze stap zetten we koers richting 
                  een toekomst waarin innovatie, samenwerking en vakmanschap samenkomen."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoegrobotSection;
