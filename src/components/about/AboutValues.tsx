
import { CheckCircle } from "lucide-react";

const AboutValues = () => {
  const values = [
    "Bouwen met vertrouwen - geen kleine lettertjes",
    "Samenwerking met betrouwbare leveranciers",
    "Nieuwste ontwikkelingen in materialen",
    "Kwalitatieve en betaalbare metseldiensten",
    "25+ jaar ervaring in oplossingen denken",
    "Lid van Bouwend Nederland"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Wat ons onderscheidt
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
