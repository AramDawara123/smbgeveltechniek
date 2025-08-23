
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";

const BenefitsGrid = () => {
  const benefits = [
    { 
      icon: CheckCircle,
      title: "Transparant", 
      description: "Geen verborgen kosten of verrassingen"
    },
    { 
      icon: Clock,
      title: "Betrouwbaar", 
      description: "25+ jaar ervaring en tevreden klanten"
    },
    { 
      icon: CheckCircle,
      title: "Garantie", 
      description: "Volledige garantie op al onze werkzaamheden"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {benefits.map((benefit, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <benefit.icon className="w-7 h-7 text-white" />
            </div>
            <h5 className="font-display text-lg font-bold text-foreground mb-2">{benefit.title}</h5>
            <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BenefitsGrid;
