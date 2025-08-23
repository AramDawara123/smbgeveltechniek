import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      content: "06-39 58 03 41",
      subtitle: "Ma-Vr 08:00 - 18:00"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "info@smbgeveltechniek.nl",
      subtitle: "We reageren binnen 24 uur"
    },
    {
      icon: MapPin,
      title: "Werkgebied",
      content: "Heel Noord-Holland",
      subtitle: "Van Den Helder tot Heemstede"
    },
    {
      icon: Clock,
      title: "Spoeddienst",
      content: "24/7 Beschikbaar",
      subtitle: "Voor acute reparaties"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden!",
      description: "We nemen zo snel mogelijk contact met u op.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:0639580341";
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact & Offerte
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Neem contact
            <br />
            <span className="text-gradient">met ons op</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Dank je wel dat je overweegt om met SMB Geveltechniek samen te werken voor het creëren van geweldige buitenruimtes. 
            We kijken uit naar je bericht en helpen graag bij het realiseren van jouw ideeën.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Voel je vrij om contact met ons op te nemen via het invullen van het contactformulier of door ons te bellen!
          </p>
          
          <Button 
            onClick={handlePhoneCall}
            size="lg" 
            className="gradient-primary text-white text-lg font-semibold mb-8 hover:scale-105 transition-transform duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Klik om te bellen
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className="group hover:construction-shadow transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{info.content}</p>
                        <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 construction-shadow">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Neem contact op
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Naam *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                    placeholder="Uw naam"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Emailadres *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                      placeholder="uw.email@voorbeeld.nl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefoonnummer *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                      placeholder="Uw telefoonnummer"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Uw vraag of opmerking *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="min-h-32"
                    placeholder="Beschrijf uw project en wensen..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary text-white text-lg font-semibold"
                >
                  Neem contact met ons op
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Door dit formulier te verzenden gaat u akkoord met onze privacy policy. 
                  Wij behandelen uw gegevens vertrouwelijk.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <Card className="construction-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Onze Locatie
                </h3>
                <p className="text-muted-foreground">
                  Bezoek ons of bekijk ons werkgebied in Noord-Holland
                </p>
              </div>
              
              <div className="relative overflow-hidden rounded-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880268.3053564903!2d3.755516738648631!3d52.45340603842448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf57483b6adf8f%3A0xa8cdfa892b55bf66!2sMetselbedrijf%20%7C%20SMB%20geveltechniek!5e0!3m2!1snl!2snl!4v1755964584044!5m2!1snl!2snl" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
