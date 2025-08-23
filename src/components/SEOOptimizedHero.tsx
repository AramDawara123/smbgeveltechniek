
import { Button } from "@/components/ui/button";
import { Shield, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SEOOptimizedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full opacity-50 blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold">
              <Shield className="w-4 h-4 mr-2" />
              Gecertificeerd BRL 2810
            </div>
            <div className="flex items-center px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 text-sm font-bold">
              <Star className="w-4 h-4 mr-2" />
              4.9/5 Klantbeoordeling
            </div>
            <div className="flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-bold">
              <Phone className="w-4 h-4 mr-2" />
              24/7 Spoedhulp
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-in">
            Gevelspecialist
            <br />
            <span className="text-gradient">Noord-Holland</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <strong>SMB Geveltechniek</strong> - Uw betrouwbare partner voor gevelrenovatie, metselwerk, scheurherstel en renovatieankers. 
            <span className="text-primary font-semibold"> 25+ jaar ervaring</span> in heel Noord-Holland.
          </p>

          {/* Key Services */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {[
              "Gevelrenovatie", 
              "Metselwerk", 
              "Scheurherstel", 
              "Renovatieankers", 
              "Gevelreiniging",
              "Voegwerk"
            ].map((service, index) => (
              <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {service}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="gradient-primary text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300">
              <Link to="/offerte">Gratis Offerte Aanvragen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-construction-dark px-8 py-4 text-lg font-bold rounded-xl backdrop-blur-sm">
              <a href="tel:06123456789">Direct Bellen: 06 123 456 789</a>
            </Button>
          </div>

          {/* Location Coverage */}
          <p className="text-sm text-gray-300 mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Werkgebied: Alkmaar • Heiloo • Castricum • Bergen • Broek op Langedijk • Den Helder • Heemstede
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOOptimizedHero;
