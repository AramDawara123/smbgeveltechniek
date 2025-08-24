import Navigation from "@/components/Navigation";
import SEOOptimizedHero from "@/components/SEOOptimizedHero";
import Services from "@/components/Services";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Gevelspecialist Noord-Holland | SMB Geveltechniek | 25+ Jaar Ervaring</title>
        <meta name="description" content="SMB Geveltechniek - Dé gevelspecialist Noord-Holland. ✓ Gevelrenovatie ✓ Metselwerk ✓ Scheurherstel ✓ Renovatieankers ✓ 25+ jaar ervaring ✓ Gratis offerte!" />
        <meta name="keywords" content="gevelspecialist noord-holland, gevelrenovatie, metselwerk, scheurherstel, renovatieankers, gevelreiniging, voegwerk" />
        <link rel="canonical" href="https://smbgeveltechniek.nl/" />
        <meta property="og:title" content="Gevelspecialist Noord-Holland | SMB Geveltechniek" />
        <meta property="og:description" content="25+ jaar ervaring in gevelrenovatie, metselwerk en scheurherstel. Gecertificeerd voor renovatieankers. Gratis offerte!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smbgeveltechniek.nl/" />
        <meta name="geo.region" content="NL-NH" />
        <meta name="geo.placename" content="Noord-Holland" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SMB Geveltechniek",
            "description": "Gevelspecialist Noord-Holland - Gevelrenovatie, metselwerk, scheurherstel en renovatieankers",
            "url": "https://smbgeveltechniek.nl",
            "telephone": "+31639580341",
            "email": "info@smbgeveltechniek.nl",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tjalkstraat 25",
              "postalCode": "1826 DT",
              "addressLocality": "Alkmaar",
              "addressRegion": "Noord-Holland",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.6297",
              "longitude": "4.7544"
            },
            "areaServed": [
              "Noord-Holland", "Alkmaar", "Heiloo", "Castricum", "Bergen", "Broek op Langedijk", "Den Helder", "Heemstede"
            ],
            "serviceType": [
              "Gevelrenovatie", "Metselwerk", "Scheurherstel", "Renovatieankers", "Gevelreiniging", "Voegwerk"
            ],
            "founder": {
              "@type": "Person",
              "name": "Maikel Schouw"
            },
            "foundingDate": "2018-10",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      {/* Wrapper toegevoegd zodat de hoogte gelijk is aan AboutHero */}
      <section
        id="home"
        className="relative py-32 min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <div className="w-full">
          <SEOOptimizedHero />
        </div>
      </section>

      <Services />
      <ProjectShowcase />
      <About />
      
      {/* Footer */}
      <footer className="bg-construction-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center lg:text-left">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
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

export default Index;
