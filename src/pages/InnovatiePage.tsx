
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import InnovatieHero from "@/components/innovatie/InnovatieHero";
import MetselrobotSection from "@/components/innovatie/MetselrobotSection";
import VoegrobotSection from "@/components/innovatie/VoegrobotSection";
import PartnershipsSection from "@/components/innovatie/PartnershipsSection";
import BricktrikeSection from "@/components/innovatie/BricktrikeSection";
import InnovatieCTA from "@/components/innovatie/InnovatieCTA";
import AboutFooter from "@/components/about/AboutFooter";

const InnovatiePage = () => {
  return (
    <>
      <Helmet>
        <title>Innovatie & Robotisering | SMB Geveltechniek</title>
        <meta name="description" content="Ontdek hoe SMB Geveltechniek de toekomst van de bouw vormgeeft met robotisering, metselrobots, voegrobots en slimme innovaties zoals de Bricktrike." />
        <meta name="keywords" content="robotisering bouw, metselrobot, voegrobot, innovatie bouw, bricktrike, robohouse, bouwlab" />
      </Helmet>
      
      <Navigation />
      <InnovatieHero />
      <MetselrobotSection />
      <VoegrobotSection />
      <PartnershipsSection />
      <BricktrikeSection />
      <InnovatieCTA />
      <AboutFooter />
    </>
  );
};

export default InnovatiePage;
