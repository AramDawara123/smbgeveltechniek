import { Building2, Wrench, Anchor, AlertTriangle, ArrowRight, Send, Ruler, CheckCircle, Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "./services/ServiceCard";
import ProcessStep from "./services/ProcessStep";
import BenefitsGrid from "./services/BenefitsGrid";

const Services = () => {
  const services = [{
    icon: Building2,
    title: "Nieuwbouw",
    subtitle: "Vakmanschap en duurzaamheid", 
    description: "SMB Geveltechniek staat garant voor hoogwaardige nieuwbouwprojecten waar vakmanschap en duurzaamheid samenkomen.",
    features: ["Maatwerkoplossingen", "Topkwaliteit materialen", "Woningbouw & bedrijfspanden"],
    href: "/nieuwbouw"
  }, {
    icon: Wrench,
    title: "Gevelrenovatie",
    subtitle: "Transformatie van uw gevel",
    description: "Onze ervaren vakmensen analyseren grondig de staat van uw gevel en bieden op maat gemaakte renovatieoplossingen.",
    features: ["Beschadigd metselwerk", "Verouderde voegen", "Structurele problemen"],
    href: "/gevelrenovatie"
  }, {
    icon: Anchor,
    title: "Renovatieankers",
    subtitle: "RVS ankers voor stabiliteit",
    description: "Versterk uw gevel met RVS renovatieankers. SMB Geveltechniek biedt gecertificeerde plaatsing en voert trekproeven uit.",
    features: ["Gecertificeerde plaatsing", "Trekproeven", "Voor- en na-isolatie"],
    href: "/renovatieankers"
  }, {
    icon: AlertTriangle,
    title: "Scheurherstel",
    subtitle: "Professionele scheuranalyse",
    description: "Scheuren in de muur? Voorkom narigheid! Onze reparaties maken gebruik van hoogwaardige materialen.",
    features: ["Grondige inspectie", "Plan van aanpak", "Gecertificeerd herstel"],
    href: "/scheurherstel"
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
  return <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-80 lg:h-80 bg-gradient-to-tr from-primary/5 to-primary/10 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 animate-fade-in min-h-[160px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight px-2 sm:px-4">
            Kwalitatieve metseldiensten
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">voor iedereen betaalbaar</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed px-2 sm:px-4">
            SMB Geveltechniek is gespecialiseerd in het vervaardigen van verschillende soorten metselwerk. 
            Met 25+ jaar ervaring verlenen wij onze diensten in heel Noord-Holland.
          </p>
        </div>

        {/* Services Grid - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {services.map((service, index) => <Link key={service.title} to={service.href} className="h-full group">
              <ServiceCard {...service} index={index} />
            </Link>)}
        </div>

        {/* Additional Services - Mobile optimized */}
        <div className="bg-muted/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 min-h-[200px] sm:min-h-[240px] md:min-h-[280px] flex flex-col justify-center">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center">
            Wat wij nog meer doen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {additionalServices.map((service, index) => <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 bg-background/50 rounded-lg md:rounded-xl h-12 sm:h-14 md:h-16">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium text-xs sm:text-sm md:text-base leading-tight">{service}</span>
              </div>)}
          </div>
        </div>

        {/* Process Section - Mobile optimized */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background animate-slide-in">
          <div className="container mx-auto px-3 sm:px-4">
            {/* Section Header - Mobile responsive */}
            <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 min-h-[140px] sm:min-h-[160px] md:min-h-[200px] flex flex-col justify-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight">
                Hoe het <span className="text-gradient">werkt</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
                Van eerste contact tot oplevering: een transparant proces in 5 stappen
              </p>
            </div>

            {/* Timeline - Mobile optimized */}
            <div className="relative max-w-4xl mx-auto">
              {/* Central timeline line - hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block"></div>
              
              <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
                {processSteps.map((step, index) => <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 animate-fade-in min-h-[240px] sm:min-h-[260px] md:min-h-[300px]`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    {/* Content - Mobile responsive */}
                    <div className="flex-1 md:max-w-md h-full flex items-center w-full">
                      <div className={`p-4 sm:p-6 md:p-8 bg-background border border-border/50 rounded-xl sm:rounded-2xl shadow-sm hover:construction-shadow transition-all duration-300 hover:-translate-y-1 w-full min-h-[200px] sm:min-h-[240px] md:min-h-[280px] flex flex-col justify-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                        <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary mb-3 sm:mb-4 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                          <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 text-left">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base text-left">
                          {step.description}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed text-left">
                          {step.detailedDescription}
                        </p>
                      </div>
                    </div>

                    {/* Timeline node - Mobile responsive */}
                    <div className="relative flex-shrink-0 order-first md:order-none">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-background relative z-10">
                        <span className="text-white font-bold text-sm sm:text-base md:text-lg">{index + 1}</span>
                      </div>
                      {/* Connector line for mobile */}
                      {index < processSteps.length - 1 && <div className="absolute top-12 sm:top-14 md:top-16 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-b from-primary/50 to-primary/20 md:hidden"></div>}
                    </div>

                    {/* Spacer for desktop layout */}
                    <div className="flex-1 md:max-w-md hidden md:block"></div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid - Mobile spacing */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <BenefitsGrid />
        </div>

        {/* CTA Button - Mobile optimized */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] flex items-center justify-center px-2">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/90 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-xl font-bold rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl hover:scale-105 transition-all duration-300">
            <Link to="/metselwerk">
              Bekijk Al Onze Diensten
              <ArrowRight className="ml-2 md:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};

export default Services;
