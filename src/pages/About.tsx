
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
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden overscroll-x-none">
      <Helmet>
        <title>Over SMB Geveltechniek | Maikel Schouw | 25+ Jaar Gevelspecialist Noord-Holland</title>
        <meta name="description" content="Leer SMB Geveltechniek kennen. Opgericht door Maikel Schouw in 2018. 25+ jaar ervaring in gevelrenovatie Noord-Holland. Betrouwbaar, transparant, gecertificeerd." />
        <meta name="keywords" content="over smb geveltechniek, maikel schouw, gevelspecialist noord-holland, ervaring metselwerk, geschiedenis bedrijf" />
        <link rel="canonical" href="https://smbgeveltechniek.nl/over-ons" />
        <meta property="og:title" content="Over SMB Geveltechniek | 25+ Jaar Ervaring" />
        <meta property="og:description" content="Opgericht door Maikel Schouw. Betrouwbare gevelspecialist Noord-Holland sinds 2018 met 25+ jaar ervaring." />
      </Helmet>

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
