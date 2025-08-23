
import Navigation from "@/components/Navigation";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutFounder from "@/components/about/AboutFounder";
import AboutMission from "@/components/about/AboutMission";
import AboutStats from "@/components/about/AboutStats";
import AboutValues from "@/components/about/AboutValues";
import AboutCertifications from "@/components/about/AboutCertifications";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutCTA from "@/components/about/AboutCTA";
import AboutFooter from "@/components/about/AboutFooter";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <AboutIntro />
      <AboutFounder />
      <AboutMission />
      <AboutStats />
      <AboutValues />
      <AboutCertifications />
      <AboutTimeline />
      <AboutCTA />
      <AboutFooter />
    </div>
  );
};

export default AboutPage;
