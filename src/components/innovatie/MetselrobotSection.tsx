import { Zap, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MetselrobotSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Snelheid & Precisie",
      description: "Elke steen op de juiste plek, iedere dag opnieuw"
    },
    {
      icon: Target,
      title: "Constante Kwaliteit", 
      description: "Zelfs bij grote projecten onder tijdsdruk"
    },
    {
      icon: Users,
      title: "Vakman Centraal",
      description: "Versterking van het vak, geen vervanging"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              De metselaar van de 
              <span className="text-gradient"> toekomst</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
              <p className="text-lg">
                De bouw verandert. De vraag naar vakmensen stijgt, terwijl het aanbod steeds schaarser wordt. 
                Tegelijkertijd willen we sneller, efficiënter en duurzamer bouwen – zonder in te leveren op kwaliteit.
              </p>
              
              <p>
                <strong className="text-foreground">Onze metselrobot is geen vervanging van het vak, maar een slimme versterking ervan.</strong> 
                Hij neemt het zware, repeterende werk over, zodat de vakman zich kan richten op wat écht telt: 
                precisie, afwerking en kwaliteit.
              </p>
              
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <p className="italic">
                  "De robot werkt snel, nauwkeurig en onvermoeibaar – elke steen op de juiste plek, iedere dag opnieuw."
                </p>
              </div>
              
              <p>
                Het is onze manier om toekomstbestendig te bouwen. Om het ambacht te behouden, maar slimmer in te zetten. 
                Om jongeren enthousiast te maken voor een vernieuwde bouwsector waarin technologie en vakmanschap hand in hand gaan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-construction-medium/20 rounded-3xl transform rotate-2"></div>
              <img 
                src="/lovable-uploads/8aaf3188-7878-4e8d-ab2c-9d43357b05e4.png" 
                alt="Metselrobot in actie bij SMB Geveltechniek" 
                className="relative w-full rounded-3xl shadow-2xl construction-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetselrobotSection;
