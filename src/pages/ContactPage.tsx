
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
