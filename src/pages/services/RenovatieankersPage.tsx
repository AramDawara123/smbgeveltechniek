
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Shield, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const RenovatieankersPage = () => {
  const toepassingen = [
    {
      title: "Spouwmuur Verankering",
      description: "RVS renovatieankers voor optimale verbinding tussen binnen- en buitenblad."
    },
    {
      title: "Gevelisolatie Bevestiging",
      description: "Professionele bevestiging van isolatiematerialen met gecertificeerde ankers."
    },
    {
      title: "Structurele Versterking",
      description: "Versterking van verzwakte gevelconstructies met hoogwaardige RVS ankers."
    },
    {
      title: "Monumentenzorg",
      description: "Specialistische renovatieankers voor historische gebouwen en monumenten."
    }
  ];

  const certificering = [
    "Gecertificeerd volgens BRL 2810",
    "Erkend installateur renovatieankers",
    "Trekproeven volgens NEN normen",
    "Gebruik van A4 RVS materialen",
    "Volledige garantie op bevestiging",
    "Rapportage van alle uitgevoerde tests"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Renovatieankers Plaatsen Noord-Holland | SMB Geveltechniek | Gecertificeerd</title>
        <meta name="description" content="Professioneel renovatieankers plaatsen Noord-Holland. ✓ Gecertificeerd BRL 2810 ✓ RVS ankers ✓ Trekproeven ✓ Garantie. Vraag offerte aan!" />
        <meta name="keywords" content="renovatieankers plaatsen, gevelankers, spouwankers, RVS ankers, muurankers noord-holland" />
        <link rel="canonical" href="https://smbgeveltechniek.nl/renovatieankers" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 text-primary text-sm font-bold mb-8">
              <Award className="w-4 h-4 mr-2" />
              Gecertificeerd BRL 2810
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Renovatieankers
              <br />
              <span className="text-gradient">Professioneel Geplaatst</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              SMB Geveltechniek is gecertificeerd voor het plaatsen van RVS renovatieankers in Noord-Holland. 
              Versterk uw gevel met onze professionele ankerinstallatie inclusief trekproeven.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-white px-8 py-4 text-lg">
                <Link to="/offerte">Gratis Offerte Aanvragen</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-construction-dark px-8 py-4 text-lg">
                <a href="tel:06123456789">Bellen: 06 123 456 789</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Toepassingen Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Toepassingen van
              <span className="text-gradient"> Renovatieankers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professionele RVS ankers voor elke gevelversterking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {toepassingen.map((toepassing, index) => (
              <Card key={index} className="hover:construction-shadow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <Anchor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {toepassing.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {toepassing.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certificering */}
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
                  Onze renovatieankers voldoen aan alle Nederlandse normen en certificeringen
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificering.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proces Section */}
      <section className="py-20 bg-muted/30">
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
            {[
              { step: "1", title: "Inspectie & Advies", desc: "Grondige analyse van uw gevelconstructie" },
              { step: "2", title: "Offerte & Planning", desc: "Transparante prijzen en duidelijke planning" },
              { step: "3", title: "Professionele Installatie", desc: "Plaatsing volgens BRL 2810 richtlijnen" },
              { step: "4", title: "Trekproeven & Rapportage", desc: "Kwaliteitscontrole en uitgebreide rapportage" }
            ].map((item, index) => (
              <Card key={index} className="hover:construction-shadow transition-all duration-300">
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
              </Card>
            ))}
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
    </div>
  );
};

export default RenovatieankersPage;
