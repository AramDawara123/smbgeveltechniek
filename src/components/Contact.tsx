import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const contactInfo = [{
    icon: Phone,
    title: "Telefoon",
    content: "06-39 58 03 41",
    subtitle: "Ma-Vr 08:00 - 18:00"
  }, {
    icon: Mail,
    title: "E-mail",
    content: "info@smbgeveltechniek.nl",
    subtitle: "We reageren binnen 24 uur"
  }, {
    icon: MapPin,
    title: "Locatie",
    content: "Tjalkstraat 25, 1826 DT Alkmaar",
    subtitle: "Noord-Holland"
  }, {
    icon: Clock,
    title: "Spoeddienst",
    content: "24/7 Beschikbaar",
    subtitle: "Voor acute reparaties"
  }];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo snel mogelijk contact met u op."
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending contact email:', error);
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw of bel ons direct.",
        variant: "destructive"
      });
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="min-h-screen">
      {/* Hero Section - Same height as About */}
      <section className="relative py-32 min-h-[600px] bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white flex flex-col justify-center min-h-[500px]">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-in">
              Klaar voor uw
              <br />
              <span className="text-gradient">gevelproject?</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>Neem vrijblijvend contact met ons op voor een gratis offerte of advies.

          </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 auto-rows-fr items-stretch">
                {contactInfo.map((info, index) => <Card key={info.title} className="group hover:construction-shadow transition-all duration-300 hover:-translate-y-1 h-full flex flex-col" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <CardContent className="p-6 h-full flex">
                      <div className="flex items-start gap-4 w-full">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className="font-semibold text-foreground mb-1 min-h-[1.5rem]">
                            {info.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1 min-h-[1.25rem]">
                            {info.content}
                          </p>
                          <p className="text-xs text-muted-foreground mt-auto">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Google Maps */}
            <Card className="lg:col-span-2 construction-shadow mb-8">
              <CardContent className="p-0">
                <div className="h-80 w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.123456789!2d4.7527777!3d52.6308333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTjalkstraat%2025%2C%201826%20DT%20Alkmaar!5e0!3m2!1snl!2snl!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SMB Geveltechniek Locatie"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="lg:col-span-2 construction-shadow h-full">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Neem Contact Op
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Volledige naam *
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="h-12" placeholder="Uw naam" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefoonnummer *
                      </label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required className="h-12" placeholder="Uw telefoonnummer" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mailadres *
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="h-12" placeholder="uw.email@voorbeeld.nl" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Projectomschrijving *
                    </label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required className="min-h-32" placeholder="Beschrijf uw project en wensen..." />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full gradient-primary text-white text-lg font-semibold">
                    Bericht Verzenden
                  </Button>
                  
                  <Button asChild type="button" size="lg" variant="outline" className="w-full">
                    <Link to="/offerte">Of vraag uitgebreide offerte aan</Link>
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Voor een gedetailleerde offerte kunt u ook ons uitgebreide offerteformulier invullen.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;