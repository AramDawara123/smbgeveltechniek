
import { Shield } from "lucide-react";

const AboutStory = () => {
  return (
    <div className="animate-slide-in">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
        Bouwen met 
        <span className="text-gradient"> vertrouwen</span>
      </h2>
      
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-lg">
          Mijn naam is <strong className="text-foreground">Maikel Schouw</strong> en mijn bedrijf is opgericht in oktober 2018 
          vanuit een passie voor ambachtelijk metselwerk en duurzame bouwkwaliteit. We richten ons op zowel 
          nieuwbouw als renovatieprojecten, waarbij vakmanschap, betrouwbaarheid en betrokkenheid centraal staan.
        </p>
        
        <p>
          Zodra u ervoor kiest om te gaan bouwen met SMB Geveltechniek, kunt u ervan uit gaan dat wij werken volgens afspraak. 
          <strong className="text-primary"> Bij ons geen kleine lettertjes of verborgen kosten.</strong> Wij doen wat we zeggen en zeggen wat wij gaan doen. 
          Mocht er onverhoopt toch iets aan het licht komen wat niemand had kunnen voorzien, dan gaan wij met u in gesprek om de vervolgstappen te bespreken.
        </p>
        
        <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            De beste materialen
          </h3>
          <p className="text-sm">
            SMB Geveltechniek werkt samen met betrouwbare leveranciers die ons ook op de hoogte houden van de nieuwste ontwikkelingen 
            op het gebied van isolatiematerialen, waterkeringen, verankeringen, bakstenen, etc. Op deze manier kunnen wij onze kwaliteit 
            blijven waarborgen en u voorzien van de nieuwste en duurzaamste materialen, die op de markt verkrijgbaar zijn.
          </p>
        </div>
        
        <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
          <h3 className="font-semibold text-foreground mb-3">Kwalitatieve Metseldiensten</h3>
          <p className="text-sm">
            We streven naar nauwe samenwerking met onze klanten om hoogwaardige metseldiensten aan te bieden die voor iedereen betaalbaar zijn. 
            Ons doel is om tarieven te hanteren die redelijk zijn en kwaliteit waarborgen, waardoor onze diensten toegankelijk zijn voor een 
            breed publiek van lokale bewoners en bedrijven.
          </p>
        </div>
        
        <p>
          In de praktijk merken we dat het steeds lastiger wordt om goede vakmensen te vinden. Om toch te blijven 
          voldoen aan onze hoge eisen op het gebied van kwaliteit en productiviteit, zetten we steeds meer in op 
          <strong className="text-primary"> innovatie en robotisering</strong> binnen de bouw. Niet om mensen te vervangen, 
          maar om ze te ondersteunen — en het werk lichter, sneller én preciezer te maken.
        </p>
        
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border-l-4 border-primary">
          <h3 className="font-semibold text-foreground mb-3">25 jaar ervaring</h3>
          <p className="text-sm">
            Met meer dan 25 jaar ervaring kunnen wij wel zeggen dat wij ons vak verstaan en altijd denken in oplossingen. 
            Dus ervaart u problemen met uw gevel? Zoals loszittend voegwerk, scheuren in de gevel of vochtproblemen binnenshuis? 
            Of bent u op zoek naar een partij om uw aanbouw, tuinmuur of nieuwbouwproject te realiseren? Zoek niet verder, 
            met onze ton aan ervaring staan wij voor u klaar!
          </p>
        </div>
        
        <p>
          We werken volgens de <strong className="text-foreground">Wet kwaliteitsborging voor het bouwen</strong>, 
          zodat klanten kunnen rekenen op transparantie en controleerbare kwaliteit bij ieder project.
        </p>
        
        <p>
          Daarnaast zijn we <strong className="text-primary">erkend leerbedrijf</strong>. Met oog op de toekomst willen we jonge mensen enthousiast maken voor de bouw. 
          We leiden hen op in zowel traditioneel vakmanschap als het werken met moderne technieken en robots.
        </p>
        
        <p>
          Als lid van <strong className="text-primary">Bouwend Nederland</strong> blijven we betrokken bij de laatste 
          ontwikkelingen in de sector en dragen we actief bij aan een professionele, innovatieve en toekomstbestendige bouwbranche.
        </p>
        
        <div className="bg-muted/50 p-6 rounded-xl border-l-4 border-primary">
          <p className="font-semibold text-foreground text-lg italic">
            "Wij bouwen niet alleen met stenen, maar ook aan mensen, technologie en de toekomst van de bouw."
          </p>
          <p className="text-sm text-muted-foreground mt-2">- Maikel Schouw, Oprichter</p>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
