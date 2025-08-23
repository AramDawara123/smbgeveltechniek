
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ScheurherstellPage = () => {
  const scheurTypes = [
    {
      title: "Haarscheuren in Gevel",
      description: "Kleine scheuren die kunnen leiden tot vochtproblemen als ze niet behandeld worden."
    },
    {
      title: "Structurele Scheuren",
      description: "Grote scheuren die de stabiliteit van de gevel kunnen aantasten."
    },
    {
      title: "Voegscheuren",
      description: "Scheuren in voegwerk door verwering of zetting van het gebouw."
    },
    {
      title: "Dilatatiescheuren",
      description: "Scheuren door uitzetting en krimp van bouwmaterialen."
    }
  ];

  const voordelen = [
    "Gecertificeerd voor professioneel scheurherstel",
    "Grondige analyse van oorzaak en gevolgen",
    "Gebruik van hoogwaardige reparatiematerialen",
    "Preventieve maatregelen tegen nieuwe scheuren",
    "Volledige garantie op uitgevoerd herstelwerk",
    "24/7 spoedhulp bij acute gevelproblemen"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Scheurherstel Gevel Noord-Holland | SMB Geveltechniek | Gecertificeerd</title>
        <meta name="description" content="Professioneel scheurherstel gevel Noord-Holland. ✓ Gecertificeerde specialisten ✓ Grondige analyse ✓ Garantie op werk ✓ Spoedhulp 24/7. Bel direct!" />
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
              Spoedhulp Beschikbaar 24/7
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Scheurherstel Gevel
              <br />
              <span className="text-gradient">Noord-Holland</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Scheuren in uw gevel? SMB Geveltechniek is dé gecertificeerde specialist voor professioneel scheurherstel in Noord-Holland. 
              Voorkom narigheid en laat uw scheuren vakkundig repareren.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <a href="tel:06123456789">Spoedhulp: 06 123 456 789</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-construction-dark px-8 py-4 text-lg">
                <Link to="/offerte">Gratis Scheuranalyse</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scheurtypen Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welke Scheuren Repareren Wij?
            </h2>
            <p className="text-lg text-muted-foreground">
              Van kleine haarscheuren tot structurele problemen - onze specialisten lossen het op
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {scheurTypes.map((type, index) => (
              <Card key={index} className="hover:construction-shadow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Waarom SMB */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Waarom SMB Geveltechniek voor Scheurherstel?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {voordelen.map((voordeel, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{voordeel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Wacht Niet Te Lang Met Scheurherstel!
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Kleine scheuren kunnen uitgroeien tot grote problemen. Vochtschade, isolatieproblemen en structurele schade zijn vaak het gevolg. 
              Laat uw scheuren daarom zo snel mogelijk professioneel repareren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:06123456789">Direct Bellen</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/offerte">Gratis Inspectie</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheurherstellPage;
