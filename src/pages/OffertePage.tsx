
import Navigation from "@/components/Navigation";
import OfferteHero from "@/components/offerte/OfferteHero";
import ContactSidebar from "@/components/offerte/ContactSidebar";
import OfferteForm from "@/components/offerte/OfferteForm";

const OffertePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <OfferteHero />

      {/* Main Content */}
      <section className="py-20 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <ContactSidebar />
            </div>

            {/* Offerte Form */}
            <div className="lg:col-span-2">
              <OfferteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffertePage;
