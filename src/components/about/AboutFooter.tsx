const AboutFooter = () => {
  return <footer className="bg-construction-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png`} alt="SMB Geveltechniek Logo" className="h-8" loading="eager" decoding="async" />
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
          <p>© 2025 SMB Geveltechniek. Alle rechten voorbehouden. | 25+ jaar ervaring sinds 1999 | Gemaakt door <a href="https://dawaraconsulting.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Dawara Consulting</a></p>
        </div>
      </div>
    </footer>;
};
export default AboutFooter;