
import { Calendar, MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutTimeline = () => {
  const timeline = [
    {
      year: "1999",
      title: "Begin van de ervaring",
      description: "Start van 25+ jaar ervaring in geveltechniek en metselwerk",
      icon: Calendar
    },
    {
      year: "2018",
      title: "Oprichting SMB",  
      description: "Oktober 2018: SMB Geveltechniek wordt opgericht door Maikel Schouw",
      icon: MapPin
    },
    {
      year: "2020",
      title: "Innovatie focus",
      description: "Inzet op robotisering en moderne technieken in de bouw",
      icon: Clock
    },
    {
      year: "2024",
      title: "Heden",
      description: "500+ tevreden klanten en 1000+ voltooide projecten",
      icon: Phone
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Ons 
            <span className="text-gradient"> verhaal</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Van ervaring naar expertise: 25 jaar vakmanschap
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary via-primary to-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="group hover:construction-shadow transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-display text-2xl font-bold text-primary mb-1">
                            {item.year}
                          </div>
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
