
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

const ContactSidebar = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Direct Contact",
      content: "06 123 456 789",
      subtitle: "Ma-Vr 08:00 - 18:00"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "info@smbgeveltechniek.nl",
      subtitle: "Reactie binnen 24 uur"
    },
    {
      icon: MapPin,
      title: "Werkgebied",
      content: "Noord-Holland",
      subtitle: "Van Den Helder tot Heemstede"
    },
    {
      icon: Clock,
      title: "Spoeddienst",
      content: "24/7 Bereikbaar",
      subtitle: "Voor urgente reparaties"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Info */}
      <Card className="group hover:shadow-2xl transition-all duration-500 border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            Direct Contact
          </h3>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group/item hover:scale-[1.02]"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-1">{info.title}</h4>
                  <p className="text-foreground font-medium">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent> 
      </Card>

      {/* Guarantee Card */}
      <Card className="hover:shadow-2xl transition-all duration-500 border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Onze Garantie
            </h3>
          </div>
          <div className="space-y-3">
            {[
              "Transparante prijsopbouw",
              "Geen verborgen kosten", 
              "Kwaliteitsgarantie op materiaal",
              "Werkgarantie volgens AVVS",
              "Gecertificeerd vakmanschap"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSidebar;
