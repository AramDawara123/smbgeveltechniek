
import { Lightbulb, Building2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PartnershipsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-construction-dark via-construction-medium to-construction-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            Stay 
            <span className="text-gradient"> Sharp</span>
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Als ondernemer in de bouwsector blijf ik voortdurend op de hoogte van de nieuwste innovaties. 
            Daarom ben ik regelmatig te vinden bij RoboHouse in Delft en bij Bouwlab R&DO in Haarlem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">RoboHouse Delft</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Een fieldlab verbonden aan de TU Delft, waar bedrijven, wetenschappers en startups samenwerken 
                aan de ontwikkeling en testing van nieuwe robotica- en AI-technologieën.
              </p>
              <p className="text-sm text-gray-300">
                Het fungeert als brug tussen wetenschap en industrie, met een focus op het versnellen van 
                technologische innovaties, met name op het gebied van cognitieve robotica.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">BouwLab R&DO Haarlem</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Een Smart Industry fieldlab voor de bouwsector. Het biedt een unieke omgeving waar (MKB)-ondernemingen 
                kunnen experimenteren, co-creëren en innoveren met de nieuwste technologieën.
              </p>
              <p className="text-sm text-gray-300">
                BouwLab richt zich op digitalisering, industrialisatie en circulariteit in de bouw, 
                en fungeert als proeftuin voor nieuwe technologieën en concepten.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 text-primary font-medium">
            <Award className="w-5 h-5 mr-2" />
            Door actief betrokken te zijn bij deze innovatiehubs, blijf ik geïnspireerd en draag ik bij aan de toekomst van de bouwsector.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
