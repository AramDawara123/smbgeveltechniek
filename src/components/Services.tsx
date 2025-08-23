
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Hammer, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Nieuwbouw",
      subtitle: "Complete geveloplossingen",
      description: "Van ontwerp tot realisatie zorgen wij voor een perfecte afwerking die voldoet aan alle moderne normen en eisen voor nieuwbouwprojecten.",
      features: ["Moderne gevelsystemen", "Energiezuinige oplossingen", "Duurzame materialen"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      title: "Renovatie",
      subtitle: "Transformatie van bestaande gevels",
      description: "Onze renovatiespecialisten transformeren verouderde gevels tot moderne, energiezuinige en esthetisch aantrekkelijke oplossingen.",
      features: ["Gevelrenovatie", "Isolatie verbetering", "Monumentenzorg"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Hammer,
      title: "Geveltechnieken",
      subtitle: "Specialistische vakmanschap",
      description: "Van metselwerk tot moderne composietpanelen, wij beheersen alle aspecten van de moderne geveltechniek voor elke uitdaging.",
      features: ["Metselwerk", "Composiet gevels", "Natuursteen verwerking"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Schadeherstel",
      subtitle: "24/7 spoedhulp beschikbaar",
      description: "Snelle en professionele reparatie van schade aan gevels. Wij herstellen storm-, brand- of andere schade snel en vakkundig.",
      features: ["24/7 spoedhulp", "Verzekeringszaken", "Tijdelijke beveiligingen"],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 gradient-dark rounded-full opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
            Onze Specialiteiten
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Professionele geveltechnieken
            <br />
            <span className="text-gradient">op maat gemaakt</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Met meer dan 10 jaar ervaring bieden wij een breed scala aan geveltechnische diensten 
            voor particulieren, bedrijven en overheden in heel Noord-Holland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:construction-shadow transition-all duration-500 hover:-translate-y-4 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Card Header with Icon */}
                <div className="p-8 pb-6">
                  <div className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 logo-shadow">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-primary mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="px-8 pb-8">
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 font-semibold"
                  >
                    Meer info
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="gradient-primary text-white px-12 py-6 text-xl font-bold rounded-2xl construction-shadow hover:scale-105 transition-all duration-300"
          >
            Bekijk Al Onze Diensten
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
