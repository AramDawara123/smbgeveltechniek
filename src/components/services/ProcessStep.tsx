
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  index: number;
  isLast: boolean;
}

const ProcessStep = ({ icon: Icon, title, description, detailedDescription, index, isLast }: ProcessStepProps) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`relative flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        animation: 'fade-in 0.8s ease-out forwards'
      }}
    >
      {/* Connecting Line */}
      {!isLast && (
        <div className={`absolute ${isEven ? 'lg:left-12' : 'lg:right-12'} top-24 lg:top-16 w-px h-16 lg:h-24 bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-30 hidden lg:block z-0`} />
      )}

      {/* Icon Container */}
      <div className="flex-shrink-0 relative z-10">
        <div className="relative group">
          {/* Outer glow */}
          <div className="absolute inset-0 w-28 h-28 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
          
          {/* Main icon container */}
          <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
            <Icon className="w-12 h-12 text-white drop-shadow-sm" />
          </div>
          
          {/* Step number badge */}
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-background border-3 border-primary rounded-full flex items-center justify-center text-primary font-bold text-lg shadow-lg backdrop-blur-sm">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`flex-1 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'} max-w-2xl`}>
        <div className="space-y-6">
          <h4 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            {title}
          </h4>
          
          <div className="space-y-4">
            <p className="text-base md:text-lg text-primary font-semibold leading-relaxed">
              {description}
            </p>
            
            <div className={`w-16 h-1 bg-gradient-to-r from-primary to-primary/80 rounded-full ${isEven ? 'mx-auto lg:mx-0' : 'mx-auto lg:ml-auto lg:mr-0'}`} />
            
            <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
