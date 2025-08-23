
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Sparkles } from "lucide-react";

const OfferteHero = () => {
  const benefits = [
    "Gratis en vrijblijvende offerte",
    "Binnen 24 uur persoonlijk contact", 
    "Transparante prijsopbouw",
    "25+ jaar ervaring",
    "Gecertificeerd vakmanschap",
    "Garantie op al ons werk"
  ];

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="%23f1f5f9" stroke-width="0.5"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            Gratis & Vrijblijvend
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight animate-fade-in">
            Vraag uw gratis
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              offerte aan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Met meer dan 25 jaar ervaring in geveltechniek staan wij klaar om uw project tot een succes te maken. 
            Vraag nu een vrijblijvende offerte aan.
          </p>

          {/* Benefits Grid */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/10 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 text-left group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfferteHero;
