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

        {/* Additional Services - Clean Premium Design */}
        <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3 rounded-3xl"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tr from-primary/10 to-primary/15 rounded-full blur-2xl opacity-50"></div>
          
          <div className="relative container mx-auto px-4">
            {/* Clean Header */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Uitgebreide dienstverlening
              </div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Wat wij <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">nog meer</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/60 rounded-full"></div>
                </span> doen
              </h3>
              <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                Naast onze kernspecialisaties bieden wij een compleet pakket aan aanvullende geveltechnische diensten
              </p>
            </div>
            
            {/* Clean Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {additionalServices.map((service, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-background/90 via-background/80 to-background/70 backdrop-blur-lg border border-border/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Subtle Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl"></div>
                  
                  <div className="relative">
                    {/* Clean Icon */}
                    <div className="flex items-start gap-4 sm:gap-6 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                          <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        {/* Simple Badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Service Text */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-foreground font-bold text-lg sm:text-xl md:text-2xl leading-tight group-hover:text-primary transition-colors duration-300 mb-2">
                          {service}
                        </h4>
                        <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full group-hover:w-20 transition-all duration-300"></div>
                      </div>
                    </div>
                    
                    {/* Simple Hover Content */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        Professionele uitvoering met hoogwaardige materialen en jarenlange ervaring.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Simple Bottom CTA */}
            <div className="text-center mt-12 sm:mt-16 md:mt-20">
              <p className="text-muted-foreground text-base sm:text-lg mb-6">
                Heeft u vragen over onze aanvullende diensten?
              </p>
              <Button asChild className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0">
                <Link to="/contact">
                  Neem Contact Op
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Redesigned Process Section - Mobile First */}
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-3 sm:px-4">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Hoe het <span className="text-gradient">werkt</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 max-w-2xl mx-auto">
                Van eerste contact tot oplevering: een transparant proces in 5 stappen
              </p>
            </div>

            {/* Mobile-First Process Steps */}
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-4 lg:gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Mobile Layout */}
                  <div className="md:hidden bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative flex-shrink-0">
                        {/* Modern gradient circle with icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        {/* Step number badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expandable details */}
                    <div className="bg-muted/30 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.detailedDescription}
                      </p>
                    </div>
                    
                    {/* Progress indicator for mobile */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent"></div>
                    )}
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:block text-center">
                    {/* Desktop step circle */}
                    <div className="relative mx-auto mb-4 group">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 mx-auto">
                        <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-lg">
                        {index + 1}
                      </div>
                      
                      {/* Connecting arrow */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute top-1/2 -right-2 lg:-right-3 transform -translate-y-1/2 translate-x-full">
                          <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-primary/60" />
                        </div>
                      )}
                    </div>

                    {/* Desktop content */}
                    <div className="space-y-3">
                      <h3 className="font-display text-base lg:text-lg font-bold text-foreground leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Hover details */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-4 mt-3">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {step.detailedDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
    </section>
  );
};

export default Services;