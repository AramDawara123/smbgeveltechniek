
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import AboutFooter from "@/components/about/AboutFooter";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Contact />
      </main>
      <AboutFooter />
    </div>
  );
};

export default ContactPage;
