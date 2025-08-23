
import Navigation from "@/components/Navigation";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutHighlights from "@/components/about/AboutHighlights";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";
import AboutFooter from "@/components/about/AboutFooter";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <AboutHero />

      {/* Main Content - Enhanced Design */}
      <section className="py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-construction-medium/10 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="order-2 lg:order-1">
              <AboutStory />
            </div>
            <div className="order-1 lg:order-2">
              <AboutHighlights />
            </div>
          </div>
        </div>
      </section>

      <AboutValues />
      <AboutCTA />
      <AboutFooter />
    </div>
  );
};

export default AboutPage;
