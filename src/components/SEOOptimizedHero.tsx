
import { Button } from "@/components/ui/button";
import { Shield, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SEOOptimizedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/95de0640-fc57-4770-b4ec-0f3553690264.png')"
        }}
      ></div>
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Additional gradient overlays for depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full opacity-50 blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 py-8 mt-20 sm:mt-16 md:mt-12">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Trust Indicators */}
          
          
          <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight animate-slide-in px-1 sm:px-2">
            Gevelspecialist Noord-Holland
          </h1>
          
          <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in font-semibold px-1 sm:px-2" style={{
          animationDelay: '0.2s'
        }}>
            SMB Geveltechniek - 25+ jaar ervaring in gevelrenovatie, metselwerk, scheurherstel en renovatieankers
          </h2>

          {/* Key Services */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-10 animate-fade-in px-1 sm:px-2" style={{
          animationDelay: '0.3s'
        }}>
            {["Gevelrenovatie", "Metselwerk", "Scheurherstel", "Renovatieankers", "Gevelreiniging", "Voegwerk"].map((service, index) => <span key={index} className="px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium border border-white/20">
                {service}
              </span>)}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 justify-center items-center animate-fade-in px-2 sm:px-4" style={{
          animationDelay: '0.4s'
        }}>
            <Button asChild size="lg" className="gradient-primary text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 w-full max-w-xs sm:max-w-sm md:w-auto">
              <Link to="/offerte">Gratis Offerte Aanvragen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-black border-2 border-white hover:bg-gray-100 px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-xl backdrop-blur-sm w-full max-w-xs sm:max-w-sm md:w-auto">
              <a href="tel:06123456789">Direct Bellen: 06 123 456 789</a>
            </Button>
          </div>

          {/* Location Coverage */}
          <p className="text-xs sm:text-sm text-gray-300 mt-4 sm:mt-6 md:mt-8 animate-fade-in px-1 sm:px-2 leading-relaxed" style={{
          animationDelay: '0.5s'
        }}>
            Werkgebied: Alkmaar • Heiloo • Castricum • Bergen • Broek op Langedijk • Den Helder • Heemstede
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOOptimizedHero;
