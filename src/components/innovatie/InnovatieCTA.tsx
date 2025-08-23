
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const InnovatieCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-construction-medium/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight animate-fade-in">
            Klaar voor de 
            <span className="text-gradient"> toekomst</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ontdek hoe onze innovatieve aanpak uw bouwproject kan verbeteren. 
            Van robotisering tot slimme tools - we denken graag met u mee.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="gradient-primary text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300">
              <Link to="/offerte">
                Innovatieve Offerte Aanvragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg font-bold rounded-xl border-2">
              <a href="tel:06123456789">
                <Phone className="w-5 h-5 mr-2" />
                Direct Contact
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Jaar ervaring</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Innovatief</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Mogelijkheden</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovatieCTA;
