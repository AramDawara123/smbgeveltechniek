
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, CheckCircle, Award, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const OffertePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    projectDescription: "",
    timeline: "",
    budget: "",
    contactPreference: "",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Offerte aanvraag verzonden!",
      description: "We nemen binnen 24 uur contact met u op voor een vrijblijvende offerte."
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      projectType: "",
      projectDescription: "",
      timeline: "",
      budget: "",
      contactPreference: "",
      agreeToTerms: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

  const benefits = [
    "Gratis en vrijblijvende offerte",
    "Binnen 24 uur persoonlijk contact",
    "Transparante prijsopbouw",
    "25+ jaar ervaring",
    "Gecertificeerd vakmanschap",
    "Garantie op al ons werk"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 text-primary text-sm font-bold mb-8">
              <Award className="w-4 h-4 mr-2" />
              Gratis & Vrijblijvend
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Vraag uw gratis
              <br />
              <span className="text-gradient">offerte aan</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Met meer dan 25 jaar ervaring in geveltechniek staan wij klaar om uw project tot een succes te maken. 
              Vraag nu een vrijblijvende offerte aan.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="mb-8 construction-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{info.title}</h4>
                          <p className="text-sm text-muted-foreground">{info.content}</p>
                          <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="construction-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Onze Garantie
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Transparante prijsopbouw</li>
                    <li>• Geen verborgen kosten</li>
                    <li>• Kwaliteitsgarantie op materiaal</li>
                    <li>• Werkgarantie volgens AVVS</li>
                    <li>• Gecertificeerd vakmanschap</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Offerte Form */}
            <Card className="lg:col-span-2 construction-shadow">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Offerte Aanvraag Formulier
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Volledige naam *
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                        className="h-12" 
                        placeholder="Voor- en achternaam" 
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
                        placeholder="06 12 34 56 789" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mailadres *
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
                      <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                        Adres/Plaats *
                      </label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange} 
                        required 
                        className="h-12" 
                        placeholder="Straat, plaats" 
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                        Type project *
                      </label>
                      <Select value={formData.projectType} onValueChange={(value) => setFormData(prev => ({...prev, projectType: value}))}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Selecteer projecttype" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="metselwerk">Metselwerk</SelectItem>
                          <SelectItem value="nieuwbouw">Nieuwbouw</SelectItem>
                          <SelectItem value="gevelrenovatie">Gevelrenovatie</SelectItem>
                          <SelectItem value="renovatieankers">Renovatieankers</SelectItem>
                          <SelectItem value="scheurherstel">Scheurherstel</SelectItem>
                          <SelectItem value="gevelreiniging">Gevelreiniging</SelectItem>
                          <SelectItem value="voegen">Voegen & Pointeren</SelectItem>
                          <SelectItem value="anders">Anders</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                        Gewenste planning
                      </label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Wanneer wilt u starten?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">Zo snel mogelijk</SelectItem>
                          <SelectItem value="1-month">Binnen 1 maand</SelectItem>
                          <SelectItem value="3-months">Binnen 3 maanden</SelectItem>
                          <SelectItem value="6-months">Binnen 6 maanden</SelectItem>
                          <SelectItem value="flexible">Flexibel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Indicatief budget
                      </label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Selecteer budget (optioneel)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Onder €5.000</SelectItem>
                          <SelectItem value="5k-10k">€5.000 - €10.000</SelectItem>
                          <SelectItem value="10k-25k">€10.000 - €25.000</SelectItem>
                          <SelectItem value="25k-50k">€25.000 - €50.000</SelectItem>
                          <SelectItem value="over-50k">Boven €50.000</SelectItem>
                          <SelectItem value="unknown">Weet ik niet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="contactPreference" className="block text-sm font-medium text-foreground mb-2">
                        Contact voorkeur
                      </label>
                      <Select value={formData.contactPreference} onValueChange={(value) => setFormData(prev => ({...prev, contactPreference: value}))}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Hoe nemen we contact op?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Telefonisch</SelectItem>
                          <SelectItem value="email">Per e-mail</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="both">Telefoon & e-mail</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-foreground mb-2">
                      Projectomschrijving *
                    </label>
                    <Textarea 
                      id="projectDescription" 
                      name="projectDescription" 
                      value={formData.projectDescription} 
                      onChange={handleInputChange} 
                      required 
                      className="min-h-32" 
                      placeholder="Beschrijf uw project zo gedetailleerd mogelijk: wat moet er gebeuren, welke materialen, afmetingen, bijzonderheden, etc." 
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData(prev => ({...prev, agreeToTerms: checked as boolean}))}
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Ik ga akkoord met de privacy policy en algemene voorwaarden *
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary text-white text-lg font-semibold h-14"
                    disabled={!formData.agreeToTerms}
                  >
                    Gratis Offerte Aanvragen
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Binnen 24 uur nemen wij persoonlijk contact met u op voor een vrijblijvende offerte. 
                    Uw gegevens worden vertrouwelijk behandeld.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffertePage;
