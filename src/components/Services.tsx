
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Hammer, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Nieuwbouw",
      description: "Complete geveloplossingen voor nieuwbouwprojecten. Van ontwerp tot realisatie, wij zorgen voor een perfecte afwerking die voldoet aan alle moderne normen en eisen.",
      features: ["Moderne gevelsystemen", "Energiezuinige oplossingen", "Duurzame materialen"]
    },
    {
      icon: Wrench,
      title: "Renovatie",
      description: "Geef uw bestaande gevel een nieuwe look. Onze renovatiespecialisten transformeren verouderde gevels tot moderne, energiezuinige en esthetisch aantrekkelijke oplossingen.",
      features: ["Gevelrenovatie", "Isolatie verbetering", "Monumentenzorg"]
    },
    {
      icon: Hammer,
      title: "Geveltechnieken",
      description: "Specialistische geveltechnieken voor elke uitdaging. Van metselwerk tot moderne composietpanelen, wij beheersen alle aspecten van de moderne geveltechniek.",
      features: ["Metselwerk", "Composiet gevels", "Natuursteen verwerking"]
    },
    {
      icon: Shield,
      title: "Schadeherstel",
      description: "Snelle en professionele reparatie van schade aan gevels. Wij herstellen storm-, brand- of andere schade en brengen uw gevel weer in optimale staat.",
      features: ["24/7 spoedhulp", "Verzekeringszaken", "Tijdelijke beveiligingen"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Onze Diensten
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Professionele geveltechnieken
            <br />
            <span className="text-gradient">op maat gemaakt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Met meer dan 10 jaar ervaring bieden wij een breed scala aan geveltechnische diensten 
            voor particulieren, bedrijven en overheden in heel Noord-Holland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:construction-shadow transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
