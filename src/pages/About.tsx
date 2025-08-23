
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

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AboutStory />
            <AboutHighlights />
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
