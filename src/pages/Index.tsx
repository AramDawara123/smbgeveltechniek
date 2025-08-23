
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      
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

export default Index;
