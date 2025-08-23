
import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutMission = () => {
  const values = [
    {
      icon: Target,
      title: "Onze Missie",
      description: "Hoogwaardige geveltechnische diensten leveren die voor iedereen betaalbaar zijn, met transparante tarieven en gewaarborgde kwaliteit.",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Eye,
      title: "Onze Visie",
      description: "De toekomst van de bouw vormgeven door traditioneel vakmanschap te combineren met moderne technieken en robotisering.",
      color: "from-construction-medium/20 to-construction-medium/5"
    },
    {
      icon: Heart,
      title: "Onze Waarden",
      description: "Betrouwbaarheid, vakmanschap, betrokkenheid en transparantie staan centraal in alles wat we doen voor onze klanten.",
      color: "from-primary/15 to-construction-light/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Wat ons 
            <span className="text-gradient"> drijft</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Onze kernwaarden vormen de basis van alles wat we doen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="group hover:construction-shadow transition-all duration-500 hover:-translate-y-2 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
