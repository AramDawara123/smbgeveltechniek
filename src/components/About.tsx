import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Users, label: "Tevreden klanten", value: "500+" },
    { icon: Award, label: "Jaar ervaring", value: "25+" },
    { icon: CheckCircle, label: "Projecten voltooid", value: "1000+" },
    { icon: Shield, label: "Gecertificeerd", value: "100%" }
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
              Bouwen met vertrouwen
              <br />
              <span className="text-gradient">sinds 1999</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Met meer dan 25 jaar ervaring kunnen wij wel zeggen dat wij ons vak verstaan en altijd denken in oplossingen. 
              Bij ons geen kleine lettertjes of verborgen kosten. Wij doen wat we zeggen en zeggen wat wij gaan doen.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "25+ jaar ervaring in geveltechniek en metselwerk",
                "Samenwerking met betrouwbare leveranciers",
                "Hoogwaardige en duurzame materialen",
                "Transparante werkwijze zonder verborgen kosten",
                "Gecertificeerd voor renovatieankers en scheurherstel"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-foreground mb-3">De beste materialen</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                SMB Geveltechniek werkt samen met betrouwbare leveranciers die ons ook op de hoogte houden van de 
                nieuwste ontwikkelingen op het gebied van isolatiematerialen, waterkeringen, verankeringen, bakstenen, etc. 
                Op deze manier kunnen wij onze kwaliteit blijven waarborgen.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gradient-primary text-white">
                <Link to="/over-ons">Meer over ons</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/offerte">Vraag offerte aan</Link>
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
