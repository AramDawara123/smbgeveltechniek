import { Building2, Wrench, Anchor, AlertTriangle, ArrowRight, Send, Ruler, CheckCircle, Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "./services/ServiceCard";
import ProcessStep from "./services/ProcessStep";
import BenefitsGrid from "./services/BenefitsGrid";
const Services = () => {
  const services = [{
    icon: Building2,
    title: "Nieuwbouw",
    subtitle: "Vakmanschap en duurzaamheid",
    description: "SMB Geveltechniek staat garant voor hoogwaardige nieuwbouwprojecten waar vakmanschap en duurzaamheid samenkomen.",
    features: ["Maatwerkoplossingen", "Topkwaliteit materialen", "Woningbouw & bedrijfspanden"]
  }, {
    icon: Wrench,
    title: "Gevelrenovatie",
    subtitle: "Transformatie van uw gevel",
    description: "Onze ervaren vakmensen analyseren grondig de staat van uw gevel en bieden op maat gemaakte renovatieoplossingen.",
    features: ["Beschadigd metselwerk", "Verouderde voegen", "Structurele problemen"]
  }, {
    icon: Anchor,
    title: "Renovatieankers",
    subtitle: "RVS ankers voor stabiliteit",
    description: "Versterk uw gevel met RVS renovatieankers. SMB Geveltechniek biedt gecertificeerde plaatsing en voert trekproeven uit.",
    features: ["Gecertificeerde plaatsing", "Trekproeven", "Voor- en na-isolatie"]
  }, {
    icon: AlertTriangle,
    title: "Scheurherstel",
    subtitle: "Professionele scheuranalyse",
    description: "Scheuren in de muur? Voorkom narigheid! Onze reparaties maken gebruik van hoogwaardige materialen.",
    features: ["Grondige inspectie", "Plan van aanpak", "Gecertificeerd herstel"]
  }];
  const additionalServices = ["Metselwerk van verschillende verbanden", "Traditioneel voegen en pointeren", "Gevelreiniging en impregneren", "Graffiti verwijdering", "Monumentenzorg"];
  const processSteps = [{
    icon: Send,
    title: "Stuur een verzoek",
    description: "Hier legt u uit welke service u nodig heeft.",
    detailedDescription: "Neem contact met ons op en beschrijf welke geveltechnische werkzaamheden u nodig heeft. Wij luisteren naar uw wensen en geven advies over de beste aanpak."
  }, {
    icon: Ruler,
    title: "Voer metingen uit",
    description: "Zodra u uw verzoek naar ons heeft verzonden, nemen wij contact met u op.",
    detailedDescription: "Wij beoordelen verschillende zaken, zoals de locatie, de projectomvang en de hoeveelheid voorbereidend werk. Ook zal het team de exacte afmetingen van uw project opnemen."
  }, {
    icon: CheckCircle,
    title: "Keur het budget goed",
    description: "Nadat we de site hebben bezocht, zullen we een offerte opstellen.",
    detailedDescription: "Wij zorgen ervoor dat we een nauwkeurige offerte opmaken op basis van de omvang van uw project. Bovendien zijn we transparant en houden we geen prijzen achter."
  }, {
    icon: Play,
    title: "Start het project",
    description: "Zodra u onze offerte heeft ontvangen en goedkeurt, starten we het project.",
    detailedDescription: "Wij houden u van tijd tot tijd op de hoogte van de voortgang. Ons doel is om u bij elke stap van uw project te betrekken."
  }, {
    icon: Clock,
    title: "Voltooi op tijd",
    description: "Wanneer we het project starten, maken we er prioriteit van om het op tijd af te ronden.",
    detailedDescription: "We begrijpen hoe belangrijk het is om deadlines te halen. U kunt erop vertrouwen dat wij het harde werk en de toewijding leveren die nodig zijn."
  }];
  return <section id="services" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-tr from-primary/5 to-primary/10 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold mb-4 md:mb-6 border border-primary/20">
            Onze Specialiteiten
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8 leading-tight px-4">
            Kwalitatieve metseldiensten
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">voor iedereen betaalbaar</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed px-4">
            SMB Geveltechniek is gespecialiseerd in het vervaardigen van verschillende soorten metselwerk. 
            Met 25+ jaar ervaring verlenen wij onze diensten in heel Noord-Holland.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}
        </div>

        {/* Additional Services */}
        <div className="bg-muted/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mb-12 md:mb-16 lg:mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Wat wij nog meer doen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {additionalServices.map((service, index) => <div key={index} className="flex items-center gap-3 p-3 md:p-4 bg-background/50 rounded-lg md:rounded-xl">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium text-sm md:text-base">{service}</span>
              </div>)}
          </div>
        </div>

        {/* Process Section */}
        <div className="relative mb-12 md:mb-16 lg:mb-20">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-4">
              Hoe het werkt
            </h3>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed px-4">
              Van eerste contact tot oplevering: een transparant proces in 5 stappen
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-16 md:space-y-20 lg:space-y-24 mb-16 md:mb-20 lg:mb-24">
            {processSteps.map((step, index) => <ProcessStep key={index} {...step} index={index} isLast={index === processSteps.length - 1} />)}
          </div>

          {/* Benefits Grid */}
          <BenefitsGrid />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-xl font-bold rounded-xl md:rounded-2xl shadow-xl hover:scale-105 transition-all duration-300">
            Bekijk Al Onze Diensten
            <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;