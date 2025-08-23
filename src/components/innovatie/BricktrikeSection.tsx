
import { RotateCcw, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BricktrikeSection = () => {
  const features = [
    {
      icon: RotateCcw,
      title: "360° Draaien",
      description: "Moeiteloos manoeuvreren op steigers en in krappe ruimtes"
    },
    {
      icon: Zap,
      title: "Onverhard Terrein",
      description: "Rijdt zonder moeite door zand, grind of modder"
    },
    {
      icon: Shield,
      title: "Fysieke Ontlasting",
      description: "Belasting op knieën en gewrichten tot nul gereduceerd"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-8">
              Praktische Innovatie
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Innovatie hoeft niet altijd 
              <span className="text-gradient"> hightech</span> te zijn
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
              <p className="text-lg">
                Bij SMB Geveltechniek draait innovatie om slimme oplossingen die het werk van metselaars 
                écht lichter en efficiënter maken. <strong className="text-foreground">Soms zit het in een doordachte verbetering van iets alledaags.</strong>
              </p>
              
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <h3 className="font-semibold text-foreground mb-3">De Bricktrike</h3>
                <p>
                  Onze nieuwste ontwikkeling: een aangepaste stenenwagen die net zo breed is als een standaardmodel, 
                  waardoor hij perfect aansluit bij de bestaande werkprocessen.
                </p>
              </div>
              
              <p>
                Door een slimme aanpassing aan het onderstel kan hij moeiteloos 360 graden draaien, 
                wat hem uitermate geschikt maakt voor gebruik op steigers en in krappe ruimtes.
              </p>
              
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2">Slim. Simpel. Doeltreffend.</h4>
                <p className="text-sm italic">Dat is waar wij bij SMB Geveltechniek voor staan.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-construction-medium/20 rounded-2xl transform rotate-1"></div>
                <img 
                  src="/lovable-uploads/a4221235-317d-4c20-989c-01ca60ac70f0.png" 
                  alt="Bricktrike - innovatieve stenenwagen" 
                  className="relative w-full rounded-2xl shadow-xl construction-shadow transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-construction-medium/20 to-primary/20 rounded-2xl transform -rotate-1"></div>
                <img 
                  src="/lovable-uploads/03ea8a9d-4588-4202-b71d-6d2424dc61f6.png" 
                  alt="Bricktrike technische details" 
                  className="relative w-full rounded-2xl shadow-xl construction-shadow transform rotate-1 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BricktrikeSection;
