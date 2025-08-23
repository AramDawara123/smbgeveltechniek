import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Award } from "lucide-react";
const Hero = () => {
  // Improved pattern for background
  const patternSVG = '<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ff5722" fill-opacity="0.03"><polygon points="30 0 60 30 30 60 0 30"/></g></g></svg>';
  const encodedPattern = encodeURIComponent(patternSVG);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 gradient-dark"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,${encodedPattern}")`,
      backgroundRepeat: "repeat",
      backgroundSize: "60px 60px"
    }} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/10 to-background/30"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Enhanced Badge */}
          

          {/* Improved Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
            Vakkundige{" "}
            <span className="relative">
              <span className="text-gradient">geveltechniek</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-primary rounded-full opacity-60"></div>
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-200">
              voor elke bouwuitdaging
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Van nieuwbouw tot renovatie en schadeherstel - <span className="text-primary font-semibold">SMB Geveltechniek</span> levert
            kwaliteit en vakmanschap voor al uw gevelprojecten in Noord-Holland.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="gradient-primary text-white px-10 py-5 text-xl font-bold rounded-2xl construction-shadow hover:scale-105 transition-all duration-500 group border-0">
              Gratis Offerte Aanvragen
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-5 text-xl font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-construction-dark transition-all duration-500 rounded-2xl glass-effect">
              Bekijk Onze Projecten
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
    </section>;
};
export default Hero;