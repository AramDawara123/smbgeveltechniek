
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Tevreden klanten", value: "500+" },
    { icon: Award, label: "Jaar ervaring", value: "10+" },
    { icon: CheckCircle, label: "Projecten voltooid", value: "1000+" },
    { icon: Clock, label: "Service garantie", value: "24/7" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Over SMB Geveltechniek
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Vakmanschap en kwaliteit
              <br />
              <span className="text-gradient">sinds 2010</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              SMB Geveltechniek is een betrouwbare partner voor al uw gevelwerkzaamheden. 
              Met meer dan 10 jaar ervaring in de branche hebben wij ons ontwikkeld tot 
              een specialist op het gebied van nieuwbouw, renovatie en onderhoud van gevels.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Gecertificeerde vakmensen met ruime ervaring",
                "Gebruik van hoogwaardige, duurzame materialen",
                "Persoonlijke begeleiding van A tot Z",
                "Scherpe prijzen en transparante werkwijze"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white">
                Meer over ons
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="text-center group hover:construction-shadow transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
