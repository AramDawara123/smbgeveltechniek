
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, Award, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const GevelrenovatiePage = () => {
  const benefits = [
    "25+ jaar ervaring in gevelrenovatie Noord-Holland",
    "Gecertificeerde specialisten voor alle renovatiewerk",
    "Transparante prijzen zonder verborgen kosten",
    "Gratis inspectie en advies aan huis",
    "Hoogwaardige materialen van betrouwbare leveranciers",
    "Volledige garantie op uitgevoerd werk"
  ];

  const services = [
    {
      title: "Beschadigd Metselwerk Herstellen",
      description: "Professioneel herstel van beschadigde gevels, losliggende stenen en constructieve problemen."
    },
    {
      title: "Voegwerk Vernieuwen",
      description: "Uitfrezen en vernieuwen van verouderde voegen voor optimale waterdichtheid."
    },
    {
      title: "Gevel Isolatie Verbeteren", 
      description: "Moderne isolatietechnieken voor betere energieprestaties van uw gevel."
    },
    {
      title: "Renovatieankers Plaatsen",
      description: "RVS renovatieankers voor structurele versterking van uw gevel."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gevelrenovatie Noord-Holland | SMB Geveltechniek | 25+ Jaar Ervaring</title>
        <meta name="description" content="Professionele gevelrenovatie in Noord-Holland. ✓ 25+ jaar ervaring ✓ Gecertificeerd ✓ Gratis offerte ✓ Transparante prijzen. Bel 06-39 58 03 41!" />
        <meta name="keywords" content="gevelrenovatie noord-holland, gevel renoveren, metselwerk renovatie, gevelspecialist, scheurherstel gevel" />
        <link rel="canonical" href="https://smbgeveltechniek.nl/gevelrenovatie" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 text-primary text-sm font-bold mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Gecertificeerde Gevelspecialisten
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Gevelrenovatie 
              <br />
              <span className="text-gradient">Noord-Holland</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Uw gevel toe aan renovatie? SMB Geveltechniek is dé specialist voor professionele gevelrenovatie in heel Noord-Holland. 
              Met 25+ jaar ervaring maken wij uw gevel weer als nieuw.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-white px-8 py-4 text-lg">
                <Link to="/offerte">Gratis Offerte Aanvragen</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-construction-dark px-8 py-4 text-lg">
                <a href="tel:0639580341">Direct Bellen: 06-39 58 03 41</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Gevelrenovatie Diensten in
              <span className="text-gradient"> Noord-Holland</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Van kleine reparaties tot complete gevelrenovaties - wij doen het allemaal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:construction-shadow transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Waarom Kiezen voor SMB Geveltechniek?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
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
            Klaar voor Uw Gevelrenovatie Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact op voor een gratis inspectie en offerte. 
            Onze gevelspecialisten adviseren u graag over de beste aanpak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary text-white">
              <Link to="/offerte">Gratis Offerte</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact &amp; Advies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GevelrenovatiePage;
