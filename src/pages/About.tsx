
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock, Shield, Wrench, GraduationCap, Building } from "lucide-react";

const AboutPage = () => {
  const highlights = [
    { icon: Building, label: "Opgericht", value: "Oktober 2018" },
    { icon: Users, label: "Ervaring", value: "25+ jaar" },
    { icon: Shield, label: "WKB", value: "Gecertificeerd" },
    { icon: Wrench, label: "Innovatie", value: "Robotisering" }
  ];

  const values = [
    "Bouwen met vertrouwen - geen kleine lettertjes",
    "Samenwerking met betrouwbare leveranciers",
    "Nieuwste ontwikkelingen in materialen",
    "Kwalitatieve en betaalbare metseldiensten",
    "25+ jaar ervaring in oplossingen denken",
    "Lid van Bouwend Nederland"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              Over SMB Geveltechniek
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-in">
              Bouwen met vertrouwen
              <br />
              <span className="text-gradient">sinds 1999</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              25+ jaar ervaring in vakmanschap, betrouwbaarheid en betrokkenheid
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Story Content */}
            <div className="animate-slide-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                Bouwen met 
                <span className="text-gradient"> vertrouwen</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Mijn naam is <strong className="text-foreground">Maikel Schouw</strong> en mijn bedrijf is opgericht in oktober 2018 
                  vanuit een passie voor ambachtelijk metselwerk en duurzame bouwkwaliteit. We richten ons op zowel 
                  nieuwbouw als renovatieprojecten, waarbij vakmanschap, betrouwbaarheid en betrokkenheid centraal staan.
                </p>
                
                <p>
                  Zodra u ervoor kiest om te gaan bouwen met SMB Geveltechniek, kunt u ervan uit gaan dat wij werken volgens afspraak. 
                  <strong className="text-primary"> Bij ons geen kleine lettertjes of verborgen kosten.</strong> Wij doen wat we zeggen en zeggen wat wij gaan doen. 
                  Mocht er onverhoopt toch iets aan het licht komen wat niemand had kunnen voorzien, dan gaan wij met u in gesprek om de vervolgstappen te bespreken.
                </p>
                
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    De beste materialen
                  </h3>
                  <p className="text-sm">
                    SMB Geveltechniek werkt samen met betrouwbare leveranciers die ons ook op de hoogte houden van de nieuwste ontwikkelingen 
                    op het gebied van isolatiematerialen, waterkeringen, verankeringen, bakstenen, etc. Op deze manier kunnen wij onze kwaliteit 
                    blijven waarborgen en u voorzien van de nieuwste en duurzaamste materialen, die op de markt verkrijgbaar zijn.
                  </p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
                  <h3 className="font-semibold text-foreground mb-3">Kwalitatieve Metseldiensten</h3>
                  <p className="text-sm">
                    We streven naar nauwe samenwerking met onze klanten om hoogwaardige metseldiensten aan te bieden die voor iedereen betaalbaar zijn. 
                    Ons doel is om tarieven te hanteren die redelijk zijn en kwaliteit waarborgen, waardoor onze diensten toegankelijk zijn voor een 
                    breed publiek van lokale bewoners en bedrijven.
                  </p>
                </div>
                
                <p>
                  In de praktijk merken we dat het steeds lastiger wordt om goede vakmensen te vinden. Om toch te blijven 
                  voldoen aan onze hoge eisen op het gebied van kwaliteit en productiviteit, zetten we steeds meer in op 
                  <strong className="text-primary"> innovatie en robotisering</strong> binnen de bouw. Niet om mensen te vervangen, 
                  maar om ze te ondersteunen — en het werk lichter, sneller én preciezer te maken.
                </p>
                
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-3">25 jaar ervaring</h3>
                  <p className="text-sm">
                    Met meer dan 25 jaar ervaring kunnen wij wel zeggen dat wij ons vak verstaan en altijd denken in oplossingen. 
                    Dus ervaart u problemen met uw gevel? Zoals loszittend voegwerk, scheuren in de gevel of vochtproblemen binnenshuis? 
                    Of bent u op zoek naar een partij om uw aanbouw, tuinmuur of nieuwbouwproject te realiseren? Zoek niet verder, 
                    met onze ton aan ervaring staan wij voor u klaar!
                  </p>
                </div>
                
                <p>
                  We werken volgens de <strong className="text-foreground">Wet kwaliteitsborging voor het bouwen</strong>, 
                  zodat klanten kunnen rekenen op transparantie en controleerbare kwaliteit bij ieder project.
                </p>
                
                <p>
                  Daarnaast zijn we <strong className="text-primary">erkend leerbedrijf</strong>. Met oog op de toekomst willen we jonge mensen enthousiast maken voor de bouw. 
                  We leiden hen op in zowel traditioneel vakmanschap als het werken met moderne technieken en robots.
                </p>
                
                <p>
                  Als lid van <strong className="text-primary">Bouwend Nederland</strong> blijven we betrokken bij de laatste 
                  ontwikkelingen in de sector en dragen we actief bij aan een professionele, innovatieve en toekomstbestendige bouwbranche.
                </p>
                
                <div className="bg-muted/50 p-6 rounded-xl border-l-4 border-primary">
                  <p className="font-semibold text-foreground text-lg italic">
                    "Wij bouwen niet alleen met stenen, maar ook aan mensen, technologie en de toekomst van de bouw."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">- Maikel Schouw, Oprichter</p>
                </div>
              </div>
            </div>

            {/* Image and Stats */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="animate-fade-in">
                <img 
                  src="/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png" 
                  alt="Maikel Schouw op de bouwplaats" 
                  className="w-full rounded-2xl shadow-2xl construction-shadow"
                />
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {highlights.map((stat, index) => (
                  <Card 
                    key={stat.label} 
                    className="text-center group hover:construction-shadow transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-4">
                      <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-display text-lg font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Wat ons onderscheidt
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Heeft u een vraag over metselwerk?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Neem dan gerust contact met ons op. We staan klaar om uw project te bespreken en een passende oplossing te bieden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white">
              Contact opnemen
            </Button>
            <Button variant="outline" size="lg">
              Bekijk onze diensten
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-construction-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SMB</span>
                </div>
                <span className="font-display font-bold text-xl">SMB Geveltechniek</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Uw betrouwbare partner voor professionele geveltechnieken in Noord-Holland. 
                Met 25+ jaar ervaring denken wij altijd in oplossingen.
              </p>
              <p className="text-gray-400 text-sm">
                Werkgebied: Van Den Helder tot Heemstede - Alkmaar, Heiloo, Castricum, Bergen, Broek op Langedijk en omgeving.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Diensten</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Nieuwbouw metselwerk</li>
                <li>Gevelrenovatie</li>
                <li>Renovatieankers (RVS)</li>
                <li>Scheurherstel</li>
                <li>Gevelreiniging</li>
                <li>Voegen & pointeren</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>06 123 456 789</p>
                <p>info@smbgeveltechniek.nl</p>
                <p>Noord-Holland</p>
                <p className="text-sm text-gray-400 mt-4">
                  Gecertificeerd voor renovatieankers en scheurherstel
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SMB Geveltechniek. Alle rechten voorbehouden. | 25+ jaar ervaring sinds 1999</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
