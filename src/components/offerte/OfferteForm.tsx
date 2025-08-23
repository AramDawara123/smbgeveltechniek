
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const OfferteForm = () => {
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

  return (
    <Card className="hover:shadow-2xl transition-all duration-500 border-primary/10 bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-sm">
      <CardContent className="p-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
            <Send className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Offerte Aanvraag
            </h2>
            <p className="text-muted-foreground">Vul onderstaand formulier in voor uw gratis offerte</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground border-b border-primary/20 pb-2 mb-4">
              Persoonlijke Gegevens
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Volledige naam *
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  className="h-12 border-primary/20 focus:border-primary transition-colors duration-200" 
                  placeholder="Voor- en achternaam" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                  Telefoonnummer *
                </label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  required 
                  className="h-12 border-primary/20 focus:border-primary transition-colors duration-200" 
                  placeholder="06 12 34 56 789" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  E-mailadres *
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  className="h-12 border-primary/20 focus:border-primary transition-colors duration-200" 
                  placeholder="uw.email@voorbeeld.nl" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium text-foreground">
                  Adres/Plaats *
                </label>
                <Input 
                  id="address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleInputChange} 
                  required 
                  className="h-12 border-primary/20 focus:border-primary transition-colors duration-200" 
                  placeholder="Straat, plaats" 
                />
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground border-b border-primary/20 pb-2 mb-4">
              Project Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="projectType" className="block text-sm font-medium text-foreground">
                  Type project *
                </label>
                <Select value={formData.projectType} onValueChange={(value) => setFormData(prev => ({...prev, projectType: value}))}>
                  <SelectTrigger className="h-12 border-primary/20 focus:border-primary">
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
              <div className="space-y-2">
                <label htmlFor="timeline" className="block text-sm font-medium text-foreground">
                  Gewenste planning
                </label>
                <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
                  <SelectTrigger className="h-12 border-primary/20 focus:border-primary">
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
              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-medium text-foreground">
                  Indicatief budget
                </label>
                <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                  <SelectTrigger className="h-12 border-primary/20 focus:border-primary">
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
              <div className="space-y-2">
                <label htmlFor="contactPreference" className="block text-sm font-medium text-foreground">
                  Contact voorkeur
                </label>
                <Select value={formData.contactPreference} onValueChange={(value) => setFormData(prev => ({...prev, contactPreference: value}))}>
                  <SelectTrigger className="h-12 border-primary/20 focus:border-primary">
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
            
            <div className="space-y-2">
              <label htmlFor="projectDescription" className="block text-sm font-medium text-foreground">
                Projectomschrijving *
              </label>
              <Textarea 
                id="projectDescription" 
                name="projectDescription" 
                value={formData.projectDescription} 
                onChange={handleInputChange} 
                required 
                className="min-h-32 border-primary/20 focus:border-primary transition-colors duration-200" 
                placeholder="Beschrijf uw project zo gedetailleerd mogelijk: wat moet er gebeuren, welke materialen, afmetingen, bijzonderheden, etc." 
              />
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="space-y-6 pt-6 border-t border-primary/20">
            <div className="flex items-center space-x-3">
              <Checkbox 
                id="terms" 
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData(prev => ({...prev, agreeToTerms: checked as boolean}))}
                required
                className="border-primary/20"
              />
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
              >
                Ik ga akkoord met de privacy policy en algemene voorwaarden *
              </label>
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-lg font-semibold h-16 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
              disabled={!formData.agreeToTerms}
            >
              <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              Gratis Offerte Aanvragen
              <Sparkles className="w-5 h-5 ml-3 animate-pulse" />
            </Button>
            
            <p className="text-xs text-muted-foreground text-center leading-relaxed bg-background/50 p-4 rounded-lg">
              Binnen 24 uur nemen wij persoonlijk contact met u op voor een vrijblijvende offerte. 
              Uw gegevens worden vertrouwelijk behandeld.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default OfferteForm;
