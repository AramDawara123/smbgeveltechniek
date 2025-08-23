
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Anchor, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Nieuwbouw",
      subtitle: "Vakmanschap en duurzaamheid",
      description: "SMB Geveltechniek staat garant voor hoogwaardige nieuwbouwprojecten waar vakmanschap en duurzaamheid samenkomen. Vanaf de fundering tot aan de laatste metselsteen streven wij naar perfectie.",
      features: ["Maatwerkoplossingen", "Topkwaliteit materialen", "Woningbouw & bedrijfspanden"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      title: "Gevelrenovatie",
      subtitle: "Transformatie van uw gevel",
      description: "Onze ervaren vakmensen analyseren grondig de staat van uw gevel en bieden op maat gemaakte renovatieoplossingen. Wij herstellen en vernieuwen met vakmanschap.",
      features: ["Beschadigd metselwerk", "Verouderde voegen", "Structurele problemen"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Anchor,
      title: "Renovatieankers",
      subtitle: "RVS ankers voor stabiliteit",
      description: "Versterk uw gevel met RVS renovatieankers. SMB Geveltechniek biedt gecertificeerde plaatsing en voert trekproeven uit voor optimale stabiliteit en veiligheid.",
      features: ["Gecertificeerde plaatsing", "Trekproeven", "Voor- en na-isolatie"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: AlertTriangle,
      title: "Scheurherstel",
      subtitle: "Professionele scheuranalyse",
      description: "Scheuren in de muur? Voorkom narigheid! Onze reparaties maken gebruik van hoogwaardige materialen zoals spiraalvormige RVS ankers en speciale mortel.",
      features: ["Grondige inspectie", "Plan van aanpak", "Gecertificeerd herstel"],
      color: "from-red-500 to-red-600"
    }
  ];

  const additionalServices = [
    "Metselwerk van verschillende verbanden",
    "Traditioneel voegen en pointeren", 
    "Gevelreiniging en impregneren",
    "Graffiti verwijdering",
    "Monumentenzorg"
  ];

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 gradient-dark rounded-full opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
            Onze Specialiteiten
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Kwalitatieve metseldiensten
            <br />
            <span className="text-gradient">voor iedereen betaalbaar</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            SMB Geveltechniek is gespecialiseerd in het vervaardigen van verschillende soorten metselwerk. 
            Met 25+ jaar ervaring verlenen wij onze diensten in heel Noord-Holland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:construction-shadow transition-all duration-500 hover:-translate-y-4 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Card Header with Icon */}
                <div className="p-8 pb-6">
                  <div className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 logo-shadow">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-primary mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="px-8 pb-8">
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 font-semibold"
                  >
                    Meer info
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-muted/30 rounded-3xl p-12 mb-16">
          <h3 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Wat wij nog meer doen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background/50 rounded-xl">
                <div className="w-3 h-3 gradient-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How it works section */}
        <div className="text-center mb-16">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Hoe het werkt
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              "Stuur een verzoek",
              "Voer metingen uit", 
              "Keur het budget goed",
              "Start het project",
              "Voltooi op tijd"
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <p className="font-semibold text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="gradient-primary text-white px-12 py-6 text-xl font-bold rounded-2xl construction-shadow hover:scale-105 transition-all duration-300"
          >
            Bekijk Al Onze Diensten
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
