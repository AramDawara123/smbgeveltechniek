
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Shield, Wrench } from "lucide-react";

const AboutHighlights = () => {
  const highlights = [
    { icon: Building, label: "Opgericht", value: "Oktober 2018" },
    { icon: Users, label: "Ervaring", value: "25+ jaar" },
    { icon: Shield, label: "WKB", value: "Gecertificeerd" },
    { icon: Wrench, label: "Innovatie", value: "Robotisering" }
  ];

  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <img 
          src="/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png" 
          alt="Maikel Schouw op de bouwplaats" 
          className="w-full rounded-2xl shadow-2xl construction-shadow"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {highlights.map((stat, index) => (
          <Card 
            key={stat.label} 
            className="text-center group hover:construction-shadow transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-4">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="font-display text-lg font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutHighlights;
