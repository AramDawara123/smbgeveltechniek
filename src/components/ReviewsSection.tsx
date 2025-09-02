import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Frank Prins",
      timeAgo: "een jaar geleden",
      rating: 5,
      text: "Maikel komt zijn afspraken na. Is elke dag op tijd evenals zijn collegae. Doet het werk met zorg en maakt er geen 'haastklus' van. Het ging bij ons om een schoorsteen die aan renovatie toe was. Maikel laat zien wat hij doet en komt met oplossingen. Prettig in de omgang en gewoon een no nonsense persoon. Na twee forse regenbuien is het nog droog op zolder. Maar goed..., even het najaar afwachten als naast de regen ook de wind een rol gaat spelen. Mocht er tzt wat zijn dan kan ik contact op"
    },
    {
      name: "Patrick van der Voort", 
      timeAgo: "6 maanden geleden",
      rating: 5,
      text: "Heel erg tevreden met het door Maikel en Adolino uitgevoerde werk. Zeer fijne communicatie, nette offerte en een superknap resultaat. Een bedrijf dat netjes werkt en de tijd neemt tref je niet vaak meer. Aanrader!"
    },
    {
      name: "Fred",
      timeAgo: "een jaar geleden", 
      rating: 5,
      text: "Als voorzitter van de VvE Stratingplantsoen Blok1 te Velsen-Noord kan ik Metselbedrijf/Schouw Multibouw sterk aanbevelen. Ze hebben uitstekend en netjes werk geleverd."
    },
    {
      name: "Joop Grewer",
      timeAgo: "11 maanden geleden",
      rating: 5,
      text: "Michael en z'n team hebben een geweldige klus geklaard aan mijn huis. Ze hebben de schoorsteen prachtig gerenoveerd, alle verzakkingen bij mijn raamkozijnen hersteld."
    },
    {
      name: "Gitta",
      timeAgo: "11 maanden geleden",
      rating: 5,
      text: "Maikel werkt goed en snel, is erg vriendelijk en professioneel. Onze gevel ziet er weer mooi uit. Fijn dat er ook snel een afspraak ingepland kon worden. Zeker een aanrader!"
    },
    {
      name: "Boris Vreeswijk",
      timeAgo: "2 jaar geleden",
      rating: 5,
      text: "Maikel heeft echt top werk geleverd. Twee tuinmuren waren aan vervanging toe. Goed advies gegeven, scherpe offerte en vervolgens keurig te werk gegaan."
    },
    {
      name: "Jan Veuger",
      timeAgo: "8 maanden geleden",
      rating: 5,
      text: "Zeer tevreden over het contact, de prijs en de uiteindelijke uitvoering. Komen afspraken na."
    },
    {
      name: "Marianne Manshanden",
      timeAgo: "7 maanden geleden",
      rating: 5,
      text: "Uitstekende vaklui, harde werkers, service-gericht. Zeer betrouwbaar."
    },
    {
      name: "Agnes Dejong",
      timeAgo: "een jaar geleden",
      rating: 5,
      text: "Vakman die weet wat hij doet, prachtig werk, ruimt netjes alles op. Wij zijn tevreden met zijn werk, een dikke tien plus!"
    },
    {
      name: "Ruben Dekker",
      timeAgo: "8 maanden geleden",
      rating: 5,
      text: "Vriendelijke en betrouwbare vakmensen die met je meedenken. Goede communicatie. Werken netjes."
    },
    {
      name: "Miriam Gevers",
      timeAgo: "2 jaar geleden",
      rating: 5,
      text: "Niet heel goedkoop, maar echt uitstekende kwaliteit, goed vakmanschap, en twee prettige aardige mensen."
    },
    {
      name: "Michiel Sylvestre",
      timeAgo: "2 jaar geleden",
      rating: 5,
      text: "Michael heeft onze gevel heel mooi en vakkundig hersteld. Dank voor de service!"
    },
    {
      name: "Zoli Szalai",
      timeAgo: "10 maanden geleden",
      rating: 5,
      text: "Excellent work done, on time, top quality. I was contacting Michael on WhatsApp (not speaking proper Dutch), this was a big help."
    },
    {
      name: "Bart Havenaar",
      timeAgo: "3 jaar geleden",
      rating: 5,
      text: "Maikel is een harde werker en een man van zijn woord!"
    },
    {
      name: "Bas Zweeris",
      timeAgo: "2 jaar geleden",
      rating: 5,
      text: "Snel en goed werk geleverd, maar vooral vlotte en duidelijke communicatie!"
    }
  ];

  // Show first 6 reviews in the main grid
  const displayedReviews = reviews.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background/80 to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <Star className="w-5 h-5 fill-current" />
            <span>Google Reviews</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Wat Onze Klanten Zeggen
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-xl font-semibold">5.0</span>
            <span className="text-muted-foreground ml-1">• {reviews.length} reviews</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek waarom klanten ons vertrouwen voor hun gevelrenovatie projecten
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {displayedReviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm border border-border/50">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Review Text */}
              <blockquote className="text-foreground mb-4 leading-relaxed">
                "{review.text}"
              </blockquote>
              
              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">Google Review</div>
                </div>
                <div className="text-sm text-muted-foreground">{review.timeAgo}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">5-Sterren Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{reviews.length}+</div>
            <div className="text-sm text-muted-foreground">Tevreden Klanten</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Jaar Ervaring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Service</div>
          </div>
        </div>
        
        {/* Google Link */}
        <div className="text-center mt-12">
          <a 
            href="https://share.google/RFSL0Hd309rsfQ8CZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-primary/10 border border-border/50 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-foreground hover:text-primary"
          >
            <Star className="w-5 h-5" />
            <span>Bekijk alle reviews op Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;