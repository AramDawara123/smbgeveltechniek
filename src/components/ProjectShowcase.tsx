import { Card, CardContent } from "@/components/ui/card";
const ProjectShowcase = () => {
  const projects = [{
    image: "/lovable-uploads/f86040bb-9750-48ce-97ee-53e2658b353a.png",
    title: "Nieuwbouw Appartementencomplex",
    description: "Complete gevelafwerking met hoogwaardige bakstenen en moderne technieken"
  }, {
    image: "/lovable-uploads/89d691f9-1436-4d65-a1ff-025088892655.png",
    title: "Traditioneel Metselwerk",
    description: "Vakkundige uitvoering van metselwerk met traditionele technieken"
  }, {
    image: "/lovable-uploads/c544df95-1f6a-4b96-853c-21fa4130db77.png",
    title: "Renovatieankers Installatie",
    description: "Professionele plaatsing van RVS renovatieankers voor structurele versterking"
  }, {
    image: "/lovable-uploads/ac020ed6-4992-4084-8a3d-a0be7099aee2.png",
    title: "Scheurherstel Expertise",
    description: "Vakkundige reparatie van scheuren in gevels met duurzame oplossingen"
  }, {
    image: "/lovable-uploads/821c109a-24c2-46c4-9fcd-e1b6f3d504f3.png",
    title: "Karakteristiek Metselwerk",
    description: "Restauratie en nieuwbouw met respect voor traditionele bouwstijlen"
  }];
  return <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-construction-medium/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight animate-slide-in">
            Vakmanschap in 
            <span className="text-gradient"> actie</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Van nieuwbouw tot renovatie - bekijk onze vakkundige uitvoering van diverse geveltechnische projecten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <Card key={index} className="group hover:construction-shadow transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in overflow-hidden h-full" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="font-display text-lg font-bold text-foreground mb-3 min-h-[3rem] flex items-center">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ProjectShowcase;