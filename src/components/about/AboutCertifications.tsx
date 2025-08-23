
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, CheckCircle, Building } from "lucide-react";

const AboutCertifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: "WKB Gecertificeerd",
      description: "Werken volgens de Wet kwaliteitsborging voor het bouwen voor transparantie en controleerbare kwaliteit."
    },
    {
      icon: Award,
      title: "Erkend Leerbedrijf",
      description: "We leiden jonge mensen op in traditioneel vakmanschap én moderne technieken met robots."
    },
    {
      icon: Building,
      title: "Lid Bouwend Nederland",
      description: "Actief betrokken bij ontwikkelingen voor een professionele, innovatieve bouwbranche."
    },
    {
      icon: CheckCircle,
      title: "Gespecialiseerd",
      description: "Gecertificeerd voor renovatieankers (RVS) en professioneel scheurherstel."
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Kwaliteit & 
            <span className="text-gradient"> Certificering</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Onze certificeringen en lidmaatschappen garanderen professionaliteit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="group hover:construction-shadow transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;
