import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Anchor, AlertTriangle, ArrowRight, Send, Ruler, CheckCircle, Play, Clock } from "lucide-react";
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

  const processSteps = [
    {
      icon: Send,
      title: "Stuur een verzoek",
      description: "Hier legt u uit welke service u nodig heeft.",
      detailedDescription: "Neem contact met ons op en beschrijf welke geveltechnische werkzaamheden u nodig heeft. Wij luisteren naar uw wensen en geven advies over de beste aanpak."
    },
    {
      icon: Ruler,
      title: "Voer metingen uit", 
      description: "Zodra u uw verzoek naar ons heeft verzonden, nemen wij contact met u op en maken we een afspraak om naar de locatie te komen.",
      detailedDescription: "Wij beoordelen verschillende zaken, zoals de locatie, de projectomvang en de hoeveelheid voorbereidend werk die nodig is. Ook zal het team de exacte afmetingen van uw project opnemen."
    },
    {
      icon: CheckCircle,
      title: "Keur het budget goed",
      description: "Nadat we de site hebben bezocht en uw project hebben geëvalueerd, zullen we een offerte opstellen.",
      detailedDescription: "Wij zorgen ervoor dat we een nauwkeurige offerte opmaken op basis van de omvang van uw project. Bovendien zijn we transparant en houden we geen prijzen achter als het project van start gaat."
    },
    {
      icon: Play,
      title: "Start het project",
      description: "Zodra u onze offerte heeft ontvangen en deze goedkeurt, tekenen wij een contract met u en starten we het project.",
      detailedDescription: "Wij houden u van tijd tot tijd op de hoogte van de voortgang van het project. Ons doel is om u bij elke stap van uw project te betrekken. We zorgen ervoor dat we het project opleveren volgens de ontwerpvereisten."
    },
    {
      icon: Clock,
      title: "Voltooi het project op tijd",
      description: "Wanneer we het project starten, zullen we er prioriteit van maken om het op tijd af te ronden.",
      detailedDescription: "We begrijpen hoe belangrijk het is om deadlines te halen en ervoor te zorgen dat alles geregeld is voordat het project af is. U kunt erop vertrouwen dat wij het harde werk en de toewijding leveren die nodig zijn om het project op een tijdige en efficiënte manier te voltooien."
    }
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

        <div className="bg-muted/30 rounded-3xl p-12 mb-20">
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

        {/* Enhanced Process Section */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-bold mb-8 border-2 border-primary/20 backdrop-blur-sm">
              <Clock className="w-5 h-5 mr-3" />
              Ons Werkproces
            </div>
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Hoe het werkt
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Van eerste contact tot oplevering: een transparant proces in 5 stappen
            </p>
          </div>

          {/* Process Steps with Enhanced Design */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-20`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fade-in 0.8s ease-out forwards'
                }}
              >
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className={`absolute ${index % 2 === 0 ? 'lg:left-16' : 'lg:right-16'} top-32 lg:top-20 w-px lg:w-0.5 h-24 lg:h-32 bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-30 hidden lg:block z-0`} />
                )}

                {/* Icon Container with Enhanced Design */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="relative group">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-40 h-40 gradient-primary rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    {/* Main icon container */}
                    <div className="relative w-32 h-32 gradient-primary rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 construction-shadow">
                      <step.icon className="w-16 h-16 text-white drop-shadow-lg" />
                    </div>
                    
                    {/* Step number badge */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center text-primary font-bold text-xl shadow-lg backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Content with Enhanced Typography */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} text-center max-w-3xl`}>
                  <div className="space-y-6">
                    <h4 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                      {step.title}
                    </h4>
                    
                    <div className="space-y-4">
                      <p className="text-lg md:text-xl text-primary font-semibold leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="w-24 h-1 gradient-primary rounded-full mx-auto lg:mx-0" />
                      
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                        {step.detailedDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Benefits Grid */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: CheckCircle,
                title: "Transparant", 
                description: "Geen verborgen kosten of verrassingen",
                color: "from-green-500/20 to-green-600/10"
              },
              { 
                icon: Clock,
                title: "Betrouwbaar", 
                description: "25+ jaar ervaring en tevreden klanten",
                color: "from-blue-500/20 to-blue-600/10"
              },
              { 
                icon: CheckCircle,
                title: "Garantie", 
                description: "Volledige garantie op al onze werkzaamheden",
                color: "from-purple-500/20 to-purple-600/10"
              }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:construction-shadow transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-display text-xl font-bold text-foreground mb-3">{benefit.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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
