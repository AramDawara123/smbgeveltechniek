import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const Hero = () => {
  // Pre-encode the SVG to safely embed it as a data URL (avoids JSX parsing issues)
  const patternSVG =
    '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#000000" fill-opacity="0.1"><path d="M20 20L0 0h40v40L20 20z"/></g></g></svg>';
  const encodedPattern = encodeURIComponent(patternSVG);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedPattern}")`,
          opacity: 0.05,
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 py-32 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Professionele geveltechnieken sinds 2010
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Vakkundige{" "}
            <span className="text-gradient">geveltechniek</span>
            <br />
            voor elke bouwuitdaging
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Van nieuwbouw tot renovatie en schadeherstel - SMB Geveltechniek levert
            kwaliteit en vakmanschap voor al uw gevelprojecten in Noord-Holland.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="gradient-primary text-white px-8 py-4 text-lg font-semibold construction-shadow hover:opacity-90 transition-all duration-300 group"
            >
              Gratis Offerte Aanvragen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary hover:text-white transition-all duration-300"
            >
              Bekijk Onze Projecten
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium">06 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-medium">info@smbgeveltechniek.nl</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
