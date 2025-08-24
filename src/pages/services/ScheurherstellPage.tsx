
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, CheckCircle, Phone, Thermometer, Wrench, Home, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ScheurherstellPage = () => {
  const oorzaken = [
    {
      icon: Thermometer,
      title: "Temperatuurverschillen",
      description: "Grote temperatuurschommelingen van -10°C tot warme zomerdagen zorgen voor krimp en uitzetting van de gevel."
    },
    {
      icon: Wrench,
      title: "Roest en Corrosie", 
      description: "Verzinkt staal kozijnankers die hun levensduur hebben bereikt of stalen lateien die vervangen moeten worden."
    },
    {
      icon: Home,
      title: "Funderingsproblemen",
      description: "Trillingen van zwaar verkeer, ontwerpfouten en bomen die te dicht bij het gebouw staan."
    }
  ];

  const werkwijze = [
    {
      step: "1",
      title: "Gevelinspectie",
      description: "Oppervlakkige inspectie bij kleine oneffenheden, of een uitgebreid rapport door een expert bij grotere uitdagingen."
    },
    {
      step: "2", 
      title: "Plan van Aanpak",
      description: "U krijgt een duidelijke uitleg van ons plan, zodat u precies weet wat er met uw gevel gaat gebeuren."
    },
    {
      step: "3",
      title: "Offerte & Uitvoering",
      description: "Een transparante offerte en bij goedkeuring de professionele uitvoering van de werkzaamheden."
    }
  ];

  const materialen = [
    "Spiraalvormige RVS ankers in verschillende hardheden en diktes",
    "Speciaal samengestelde mortel voor duurzame verwerking",
    "Op kleur gemengde steenpasta voor reparatie kleine scheurtjes", 
    "Vervanging van aangetaste stenen indien noodzakelijk",
    "Professionele afwerking van voegen"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Scheurherstel Gevel Noord-Holland | SMB Geveltechniek | Gecertificeerd</title>
        <meta name="description" content="Help! Scheuren in de muur? SMB Geveltechniek helpt. ✓ Gecertificeerde specialisten ✓ Grondige gevelinspectie ✓ Beste materialen ✓ Garantie op werk. Bel direct!" />
        <meta name="keywords" content="scheurherstel gevel, scheuren muur repareren, gevelscheuren, scheuranalyse, gevelreparatie noord-holland" />
        <link rel="canonical" href="https://smbgeveltechniek.nl/scheurherstel" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 text-red-300 text-sm font-bold mb-8">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Help! Scheuren in de muur, wat nu?
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Scheurherstel Gevel
              <br />
              <span className="text-gradient">Noord-Holland</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Een scheur in de muur kan heel onschuldig zijn, maar door het op tijd te laten inspecteren en te laten repareren kunt u een hoop narigheid voorkomen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <a href="tel:0639580341">Direct Bellen: 06-39 58 03 41</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-black hover:bg-gray-100 hover:text-black px-8 py-4 text-lg">
                <Link to="/offerte">Gratis Gevelinspectie</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Oorzaken Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Oorzaken van Scheurvorming
            </h2>
            <p className="text-lg text-muted-foreground">
              Er zijn tal van oorzaken te noemen over hoe een scheur ontstaat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {oorzaken.map((oorzaak, index) => (
              <Card key={index} className="hover:construction-shadow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <oorzaak.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {oorzaak.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {oorzaak.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              <strong>Dit zijn slechts een paar voorbeelden</strong>, maar bij ieder probleem met een gevel geldt: 
              laat het inspecteren om vervolgens een plan van aanpak te bedenken. 
              Hierdoor kunt u erger voorkomen en kosten besparen.
            </p>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hoe Gaan Wij Te Werk?
            </h2>
            <p className="text-lg text-muted-foreground">
              Onze stapsgewijze aanpak voor professioneel scheurherstel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {werkwijze.map((stap, index) => (
              <Card key={index} className="hover:construction-shadow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                    {stap.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {stap.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {stap.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materialen Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professionele Materialen & Uitvoering
              </h2>
              <p className="text-lg text-muted-foreground">
                Bij het repareren van scheuren maken wij gebruik van de beste materialen, 
                die de levensduur van uw gevel aanzienlijk verlengen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-4">
                  {materialen.map((materiaal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{materiaal}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-6 bg-muted/30 rounded-xl">
                  <p className="text-muted-foreground">
                    Na het verstevigen van de gevel wordt alles netjes afgewerkt, zodat uw gevel er netjes bij staat 
                    en weer voor jaren bestand is tegen invloeden van buitenaf.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/84b9a8c0-fba1-489c-abc1-c60c655c3115.png"
                  alt="Scheurherstel in bakstenen gevel door SMB Geveltechniek"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificering Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  Gecertificeerd Vakmanschap
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  SMB Geveltechniek is Gecertificeerd
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  SMB Geveltechniek is officieel gecertificeerd om bij u scheurherstel te komen uitvoeren. 
                  Dit betekent dat wij voldoen aan alle kwaliteitseisen en vakbekwaamheidsnormen.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gradient-primary text-white">
                    <Link to="/contact">Meer Informatie</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:0639580341">
                      <Phone className="w-4 h-4 mr-2" />
                      Direct Contact
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/9d85c687-d00d-4015-9008-c86fa021ee41.png"
                  alt="SMB Geveltechniek certificering voor scheurherstel"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Meer Informatie Over Scheurherstel?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Neem dan gerust contact met ons op. Wij helpen u graag verder met een professionele gevelinspectie 
              en passend advies voor uw specifieke situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:0639580341">Direct Bellen</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/offerte">Gratis Inspectie Aanvragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheurherstellPage;
