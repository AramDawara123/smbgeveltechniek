
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, CheckCircle, Star } from "lucide-react";

const AboutStats = () => {
  const stats = [
    { icon: Users, label: "Tevreden klanten", value: "500+", growth: "+15% dit jaar" },
    { icon: Clock, label: "Jaar ervaring", value: "25+", growth: "Sinds 1999" },
    { icon: CheckCircle, label: "Projecten voltooid", value: "1000+", growth: "100% kwaliteit" },
    { icon: Star, label: "Klantbeoordeling", value: "4.9/5", growth: "Gemiddelde score" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-construction-dark via-construction-medium to-construction-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Cijfers die 
            <span className="text-gradient"> spreken</span>
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Onze prestaties in getallen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-display text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-200 font-medium mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.growth}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
