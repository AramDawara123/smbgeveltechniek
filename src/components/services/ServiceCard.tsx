
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard = ({ icon: Icon, title, subtitle, description, features, index }: ServiceCardProps) => {
  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm overflow-hidden h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-0 h-full flex flex-col">
        {/* Card Header with Icon */}
        <div className="p-6 pb-4 flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>
          
          <p className="text-sm font-semibold text-primary mb-3">
            {subtitle}
          </p>
        </div>

        {/* Card Content */}
        <div className="px-6 flex-1 flex flex-col">
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
            {description}
          </p>

          <ul className="space-y-2 mb-6 flex-1">
            {features.map((feature) => (
              <li key={feature} className="flex items-start text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="font-medium leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer */}
        <div className="p-6 pt-0">
          <Button 
            variant="ghost" 
            className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 font-semibold text-sm"
          >
            Meer info
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
