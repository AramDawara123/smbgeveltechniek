
import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Wrench, Shield, ArrowRight, CheckCircle, Phone } from "lucide-react";

const MetselwerkPage = () => {
  const services = [
    {
      icon: Building2,
      title: "Gevelmetselwerk",
      description: "Ons gevelmetselwerk is ontworpen om niet alleen duurzaamheid te bieden, maar ook om een esthetische meerwaarde aan uw woning of bedrijfspand toe te voegen. Of het nu gaat om traditioneel baksteenmetselwerk of een meer eigentijdse benadering met verschillende steensoorten, onze vakmensen zorgen voor een nauwkeurige plaatsing en aandacht voor detail om een indrukwekkende gevel te creëren."
    },
    {
      icon: Wrench,
      title: "Herstel en Renovatie",
      description: "Voor bestaande gebouwen die behoefte hebben aan metselwerkherstel of renovatie, bieden wij deskundige diensten aan om de structurele integriteit te herstellen en de esthetiek te verbeteren. Of het nu gaat om het herstellen van beschadigde voegen, het vervangen van beschadigde bakstenen of het opknappen van verouderd metselwerk, we hebben de ervaring om uw gebouw nieuw leven in te blazen."
    },
    {
      icon: Shield,
      title: "Tuinmuren en Omheiningen",
      description: "Onze metselwerkdiensten omvatten ook het creëren van prachtige tuinmuren en omheiningen. Of u nu op zoek bent naar privacy, veiligheid of gewoon een decoratief element voor uw tuin, wij bieden op maat gemaakte oplossingen die aansluiten bij uw behoeften en stijlvoorkeuren."
    }
  ];

  const benefits = [
    "Jarenlange ervaring in metselwerk",
    "Focus op vakmanschap en kwaliteit",
    "Gebruik van hoogwaardige materialen",
    "Transparantie en betrouwbaarheid",
    "Klanttevredenheid voorop",
    "Duurzame resultaten"
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Metselwerk Noord-Holland | SMB Geveltechniek | Vakmanschap & Kwaliteit</title>
        <meta name="description" content="SMB Geveltechniek - Professioneel metselwerk in Noord-Holland. ✓ Gevelmetselwerk ✓ Herstel & Renovatie ✓ Tuinmuren ✓ 25+ jaar ervaring ✓ Gratis offerte!" />
        <meta name="keywords" content="metselwerk noord-holland, gevelmetselwerk, metselwerk herstel, tuinmuren, bakstenen, voegen, alkmaar" />
        <link rel="canonical" href="https://smbgeveltechniek.nl/metselwerk" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 mt-20">
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
              Professioneel Metselwerk
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Metselwerk Noord-Holland
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Bij SMB Geveltechniek begrijpen we dat metselwerk een cruciaal element is in zowel residentiële als commerciële bouwprojecten. 
              Ons toegewijde team van vakmensen staat klaar om hoogwaardige metselwerkdiensten te leveren.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
                <Link to="/offerte">Gratis Offerte Aanvragen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-bold rounded-xl">
                <a href="tel:0639580341">
                  <Phone className="mr-2 h-5 w-5" />
                  06-39 58 03 41
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vakmanschap in <span className="text-primary">Actie</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Een voorbeeld van ons recente metselwerk - moderne woninguitbreiding met hoogwaardige bakstenen en professionele afwerking.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/b360fc74-035a-4d4b-892a-fc10e9755d56.png" 
                alt="Modern metselwerk project - woninguitbreiding met bakstenen gevel en grote ramen"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                <strong>Recent Project:</strong> Woninguitbreiding met traditioneel metselwerk en moderne glaspartijen - 
                een perfecte combinatie van vakmanschap en hedendaags design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Onze Metselwerk<span className="text-primary"> Specialiteiten</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Met jarenlange ervaring, een focus op vakmanschap en gebruik van hoogwaardige materialen, 
              streven we ernaar om aan de diverse behoeften van onze klanten te voldoen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Waarom Kiezen Voor SMB Geveltechniek?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bij SMB Geveltechniek geloven we in transparantie, betrouwbaarheid en klanttevredenheid. 
                Ons team staat klaar om uw metselwerkprojecten tot leven te brengen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-lg">
                  <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{benefit}</span>
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
            Heeft u een metselwerkproject?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Neem vandaag nog contact met ons op en ontdek hoe wij uw visie kunnen realiseren 
            met onze hoogwaardige metselwerkdiensten. Streven naar duurzame resultaten die de tand des tijds doorstaan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary text-white px-8 py-4 font-bold rounded-xl">
              <Link to="/contact">Contact Opnemen</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 font-bold rounded-xl">
              <Link to="/projecten">Bekijk Onze Projecten</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-construction-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <div className="md:col-span-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
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
                <p>06-39 58 03 41</p>
                <p>info@smbgeveltechniek.nl</p>
                <p>Tjalkstraat 25</p>
                <p>1826 DT Alkmaar</p>
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

export default MetselwerkPage;
