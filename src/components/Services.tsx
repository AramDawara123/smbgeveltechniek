
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
  
  const processSteps = [
    { number: "01", title: "Contact opnemen", description: "Bel of mail ons voor een vrijblijvende afspraak" },
    { number: "02", title: "Locatie bezoek", description: "Wij komen langs voor een grondige inspectie" },
    { number: "03", title: "Offerte opstellen", description: "U ontvangt een heldere, gedetailleerde offerte" },
    { number: "04", title: "Project uitvoeren", description: "Vakkundige uitvoering volgens planning" },
    { number: "05", title: "Oplevering", description: "Controle en overdracht van het eindresultaat" }
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden">
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
          {services.map((service, index) => (
            <Link key={service.title} to={service.href} className="h-full group">
              <ServiceCard {...service} index={index} />
            </Link>
          ))}
        </div>

        {/* Additional Services - Mobile optimized */}
        <div className="bg-muted/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 min-h-[200px] sm:min-h-[240px] md:min-h-[280px] flex flex-col justify-center">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center">
            Wat wij nog meer doen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 bg-background/50 rounded-lg md:rounded-xl h-12 sm:h-14 md:h-16">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium text-xs sm:text-sm md:text-base leading-tight">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Process Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
              Hoe het werkt
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Een transparant proces in 5 eenvoudige stappen
            </p>
          </div>

          {/* Mobile: Vertical List */}
          <div className="block md:hidden space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card/50 rounded-lg border border-border/20">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:flex justify-between items-center max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute top-5 left-full w-full h-px bg-border/30 z-0"></div>
                )}
                
                {/* Step Circle */}
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-3 relative z-10">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className="max-w-[140px]">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">{step.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
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
    </section>
  );
};

export default Services;
