
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Shield } from "lucide-react";

const BenefitsGrid = () => {
  const benefits = [
    { 
      icon: CheckCircle,
      title: "Transparant", 
      description: "Geen verborgen kosten of verrassingen - wij werken volgens afspraak",
      year: "25+"
    },
    { 
      icon: Clock,
      title: "Betrouwbaar", 
      description: "Jaren ervaring en honderden tevreden klanten in Noord-Holland",
      year: "500+"
    },
    { 
      icon: Shield,
      title: "Garantie", 
      description: "Volledige garantie op al onze werkzaamheden en materialen",
      year: "100%"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in">
            Waarom 
            <span className="text-gradient"> SMB Geveltechniek</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in px-2 sm:px-0" style={{ animationDelay: '0.1s' }}>
            Uw betrouwbare partner voor professionele geveltechnieken
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on md+ */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary via-primary to-primary/30 hidden md:block"></div>

          <div className="space-y-6 sm:space-y-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 sm:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="group hover:construction-shadow transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-display text-xl sm:text-2xl font-bold text-primary mb-1">
                            {benefit.year}
                          </div>
                          <h3 className="font-display text-base sm:text-lg font-semibold text-foreground leading-tight">
                            {benefit.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-13 sm:pl-16 md:pl-0">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot - Hidden on mobile, visible on md+ */}
                <div className="hidden md:flex w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
