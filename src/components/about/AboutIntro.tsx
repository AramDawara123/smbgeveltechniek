import { Card, CardContent } from "@/components/ui/card";
import { Building2, Award, Users, Zap } from "lucide-react";
const AboutIntro = () => {
  const highlights = [{
    icon: Building2,
    title: "Opgericht",
    value: "Oktober 2018",
    description: "Gestart vanuit passie voor vakmanschap"
  }, {
    icon: Award,
    title: "Ervaring",
    value: "25+ jaar",
    description: "Ruime expertise in geveltechniek"
  }, {
    icon: Users,
    title: "Projecten",
    value: "1000+",
    description: "Succesvol afgeronde opdrachten"
  }, {
    icon: Zap,
    title: "Innovatie",
    value: "Toekomst",
    description: "Robotisering en moderne technieken"
  }];
  return <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-construction-medium/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight animate-slide-in">
            Bouwen met 
            <span className="text-gradient"> vertrouwen</span> sinds 1999
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Met meer dan 25 jaar ervaring zijn wij uw betrouwbare partner voor alle geveltechnische werkzaamheden. 
            Van traditioneel vakmanschap tot innovatieve oplossingen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => <Card key={item.title} className="group hover:construction-shadow transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                  {item.title}
                </h3>
                <div className="font-display text-3xl font-bold text-foreground mb-3">
                  {item.value}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default AboutIntro;