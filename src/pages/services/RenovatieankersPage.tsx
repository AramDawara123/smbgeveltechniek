import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Shield, CheckCircle, Award, AlertTriangle, Home, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AboutFooter from "@/components/about/AboutFooter";

const RenovatieankersPage = () => {
  const problemen = [{
    title: "Verzwakte Spouwankers",
    description: "Verzinkte stalen ankers verliezen in de loop der jaren hun kracht, vooral in kustgebieden."
  }, {
    title: "Na-isolatie Risico's",
    description: "Isolatievlokken elimineren spouwventilatie, waardoor vocht de ankers sneller aantast."
  }, {
    title: "Instortingsgevaar",
    description: "Buitengevel kan loskomen van binnengevel met instortingsgevaar tot gevolg."
  }, {
    title: "Vochtproblemen",
    description: "Vocht vindt zijn weg naar binnen, wat schimmel- en vochtproblemen veroorzaakt."
  }];
  const certificering = ["Gecertificeerd volgens BRL 2810", "Erkend installateur renovatieankers", "Trekproeven volgens NEN normen", "Gebruik van A4 RVS materialen", "Volledige garantie op bevestiging", "Rapportage van alle uitgevoerde tests"];
  return <div className="min-h-screen">
      <Helmet>
        <title>Renovatieankers Plaatsen Noord-Holland | SMB Geveltechniek | Gecertificeerd</title>
        <meta name="description" content="Professioneel renovatieankers plaatsen Noord-Holland. ✓ Gecertificeerd BRL 2810 ✓ RVS ankers ✓ Trekproeven ✓ Garantie. Vraag offerte aan!" />
        <meta name="keywords" content="renovatieankers plaatsen, gevelankers, spouwankers, RVS ankers, muurankers noord-holland" />
        <link rel="canonical" href="https://smbgeveltechniek.nl/renovatieankers" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 mt-20">
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
              <Award className="w-4 h-4 mr-2" />
              Gecertificeerd BRL 2810
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              RVS Renovatieankers Noord-Holland
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              SMB Geveltechniek is gecertificeerd voor het plaatsen van RVS renovatieankers in Noord-Holland. 
              Versterk uw gevel met onze professionele ankerinstallatie inclusief trekproeven volgens alle normen.
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
              Professioneel <span className="text-primary">Gereedschap</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Specialistische boren en gereedschappen voor het vakkundig plaatsen van RVS renovatieankers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/lovable-uploads/17e490e9-7b20-456d-86e0-975804e3d4a8.png" alt="RVS renovatieanker boor - professioneel gereedschap voor ankerplaatsing" className="w-full h-auto object-cover" />
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                <strong>Specialistisch Gereedschap:</strong> Professionele boren speciaal ontworpen voor het nauwkeurig plaatsen van RVS renovatieankers 
                volgens BRL 2810 normen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Nodig Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Waarom zijn
              <span className="text-gradient"> Renovatieankers Nodig?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bent u van plan uw gevel te laten isoleren door middel van isolatievlokken of balletjes? 
              Vergeet dan niet eerst uw gevel te verstevigen met behulp van RVS renovatieankers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  <h3 className="font-display text-xl font-bold text-amber-800">Let Op!</h3>
                </div>
                <p className="text-amber-700">
                  Uit het verleden is gebleken dat er veel dingen mis kunnen gaan bij het na-isoleren van een woning of woongebouw.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-3">Het Probleem</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Uw huis is voorzien van een spouw - een open ruimte tussen uw binnengevel en buitengevel, 
                    verbonden door spouwankers. Deze zorgen voor ventilatie en verlengen de levensduur van de ankers.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-3">Verzwakte Ankers</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    In de meeste gevallen zijn deze ankers gemaakt van verzinkt staal en hebben in de loop der jaren 
                    hun kracht verloren, of zijn in kustgebieden zelfs helemaal vergaan. Dit kan leiden tot het 
                    loskomen van de buitengevel met instortingsgevaar tot gevolg.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Spouwventilatie
                    </h3>
                    <p className="text-muted-foreground">
                      De spouw zorgt voor ventilatie waardoor vocht weinig kans krijgt om ankers aan te tasten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risico's Na-isolatie Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Risico's van
              <span className="text-gradient"> Na-isolatie</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Door na-isolatie ontstaan er verschillende problemen die uw gevel kunnen beschadigen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {problemen.map((probleem, index) => <Card key={index} className="hover:construction-shadow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {probleem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {probleem.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-red-800 mb-4">
              De Gevolgen van Na-isolatie:
            </h3>
            <div className="space-y-4 text-red-700">
              <p className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                Door na-isolatie neemt u de kans om de spouw te ventileren compleet weg
              </p>
              <p className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                Vocht en condens hebben geen mogelijkheid meer om de spouw te verlaten
              </p>
              <p className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                Vocht tast ankers in rap tempo aan en vermindert hun werking aanzienlijk
              </p>
              <p className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                Druk op buitengevel neemt toe, waardoor scheuren kunnen ontstaan
              </p>
              <p className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                Combinatie van isolatie en harde wind kan gehele gevel eruit blazen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oplossing Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              De
              <span className="text-gradient"> Oplossing</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Dit alles kunt u voorkomen door allereerst uw gevel te laten inspecteren en 
              waar mogelijk RVS renovatieankers te laten plaatsen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="font-display text-xl font-bold text-green-800">Preventie is Beter</h3>
                </div>
                <p className="text-green-700">
                  Gaat u niet isoleren, maar heeft u toch twijfels over de staat van uw spouwankers? 
                  Twijfel dan niet langer en laat de conditie van uw gevel inspecteren.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Grondige inspectie van gevel en spouwankers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Plaatsing van RVS renovatieankers waar nodig</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Trekproeven om trekkracht aan te tonen</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Gevelimpregnering na isolatie (aanbevolen)</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Ook Zonder Isolatie
                  </h3>
                  <p className="text-muted-foreground">
                    Ook zonder na-isolatie kan het plaatsen van RVS renovatieankers geen overbodige luxe zijn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificering Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border-l-4 border-primary">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Gecertificeerde Kwaliteit
                </h3>
                <p className="text-muted-foreground">
                  SMB Geveltechniek is gecertificeerd om RVS renovatieankers bij u te komen plaatsen
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificering.map((item, index) => <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>)}
            </div>

            <div className="bg-white/50 rounded-xl p-6 mt-8">
              <p className="text-lg font-semibold text-foreground mb-2">
                Trekproeven Inclusief
              </p>
              <p className="text-muted-foreground">
                De trekkracht van onze renovatieankers wordt aangetoond door middel van 
                professionele trekproeven volgens Nederlandse normen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proces Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ons Installatieproces
            </h3>
            <p className="text-lg text-muted-foreground">
              Van inspectie tot aflevering - professioneel en volgens alle normen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[{
            step: "1",
            title: "Inspectie & Advies",
            desc: "Grondige analyse van uw gevelconstructie"
          }, {
            step: "2",
            title: "Offerte & Planning",
            desc: "Transparante prijzen en duidelijke planning"
          }, {
            step: "3",
            title: "Professionele Installatie",
            desc: "Plaatsing volgens BRL 2810 richtlijnen"
          }, {
            step: "4",
            title: "Trekproeven & Rapportage",
            desc: "Kwaliteitscontrole en uitgebreide rapportage"
          }].map((item, index) => <Card key={index} className="hover:construction-shadow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Gevel Versterking Nodig?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Laat uw gevel professioneel versterken met gecertificeerde RVS renovatieankers. 
            Vraag een gratis offerte aan of laat u vrijblijvend adviseren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary text-white">
              <Link to="/offerte">Gratis Offerte</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Advies op Maat</Link>
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
              
              <p className="text-gray-400 text-sm mb-4">
                Werkgebied: Van Den Helder tot Heemstede - Alkmaar, Heiloo, Castricum, Bergen, Broek op Langedijk en omgeving.
              </p>
              
              <div className="text-gray-400 text-sm space-y-1">
                <p>KVK: 72794070</p>
                <p>BTW: NL002121697B26</p>
              </div>
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
    </div>;
};
export default RenovatieankersPage;
