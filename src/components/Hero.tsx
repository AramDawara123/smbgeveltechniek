
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 gradient-dark"></div>
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff5722' fill-opacity='0.05'%3E%3Cpolygon points='30 0 60 30 30 60 0 30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/10 to-background/30"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-bold mb-8 glass-effect">
            <Award className="w-4 h-4 mr-2" />
            25+ jaar ervaring in Noord-Holland
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
            Bouwen met{" "}
            <span className="relative">
              <span className="text-gradient">vertrouwen</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-primary rounded-full opacity-60"></div>
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-200">
              sinds 1999
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Met meer dan 25 jaar ervaring in geveltechniek en metselwerk kunnen wij wel zeggen dat wij ons vak verstaan. 
            <span className="text-primary font-semibold"> Wij denken altijd in oplossingen.</span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button asChild size="lg" className="gradient-primary text-white px-10 py-5 text-xl font-bold rounded-2xl construction-shadow hover:scale-105 transition-all duration-500 group border-0">
              <Link to="/offerte">
                Gratis Offerte Aanvragen
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-10 py-5 text-xl font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-construction-dark transition-all duration-500 rounded-2xl glass-effect">
              <Link to="/projecten">
                Bekijk Onze Projecten
              </Link>
            </Button>
          </div>

          {/* Enhanced Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-gray-300">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400 font-medium">Direct bereikbaar</p>
                <p className="text-lg font-bold text-white">06 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400 font-medium">E-mail ons</p>
                <p className="text-lg font-bold text-white">info@smbgeveltechniek.nl</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
