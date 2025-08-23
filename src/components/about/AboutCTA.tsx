
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
          Heeft u een vraag over metselwerk?
        </h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Neem dan gerust contact met ons op. We staan klaar om uw project te bespreken en een passende oplossing te bieden.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gradient-primary text-white">
            Contact opnemen
          </Button>
          <Button variant="outline" size="lg">
            Bekijk onze diensten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
