
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Renovatie Historisch Pand Amsterdam",
      description: "Volledige gevelrenovatie van een 17e-eeuws monumentaal pand in het centrum van Amsterdam.",
      image: "/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png",
      location: "Amsterdam Centrum",
      year: "2023",
      category: "Gevelrenovatie",
      teamSize: "8 specialisten",
      duration: "6 maanden",
      highlights: ["Monumentaal pand", "Handmatig metselwerk", "Originele technieken"]
    },
    {
      id: 2,
      title: "Nieuwbouw Wooncomplex Rotterdam",
      description: "Modern wooncomplex met innovatieve geveltechnieken en duurzame materialen.",
      image: "/lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png",
      location: "Rotterdam Zuid",
      year: "2023",
      category: "Nieuwbouw",
      teamSize: "12 specialisten",
      duration: "10 maanden",
      highlights: ["Duurzame materialen", "Moderne technieken", "Energiezuinig"]
    },
    {
      id: 3,
      title: "Scheurherstel Kantoorgebouw Den Haag",
      description: "Professioneel scheurherstel en gevelonderhoud van een groot kantoorcomplex.",
      image: "/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png",
      location: "Den Haag",
      year: "2022",
      category: "Scheurherstel",
      teamSize: "6 specialisten",
      duration: "4 maanden",
      highlights: ["Structureel herstel", "Preventief onderhoud", "Minimale hinder"]
    },
    {
      id: 4,
      title: "Renovatieankers Project Utrecht",
      description: "Installatie van renovatieankers voor structurele versterking van een historisch gebouw.",
      image: "/lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png",
      location: "Utrecht Centrum",
      year: "2022",
      category: "Renovatieankers",
      teamSize: "5 specialisten",
      duration: "3 maanden",
      highlights: ["Structurele versterking", "Invisibele oplossing", "Duurzaam resultaat"]
    },
    {
      id: 5,
      title: "Metselwerk Woonwijk Almere",
      description: "Uitgebreid metselwerk voor nieuwe woonwijk met traditionele en moderne technieken.",
      image: "/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png",
      location: "Almere Stad",
      year: "2023",
      category: "Metselwerk",
      teamSize: "15 specialisten",
      duration: "12 maanden",
      highlights: ["Grote schaal project", "Mixed technieken", "Teamwork"]
    },
    {
      id: 6,
      title: "Gevelrenovatie Bedrijfspand Eindhoven",
      description: "Complete gevelrenovatie van een groot bedrijfspand met focus op duurzaamheid.",
      image: "/lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png",
      location: "Eindhoven",
      year: "2021",
      category: "Gevelrenovatie",
      teamSize: "10 specialisten",
      duration: "8 maanden",
      highlights: ["Bedrijfspand", "Duurzame upgrade", "Energiebesparing"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            Onze <span className="text-primary">Projecten</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ontdek onze uitgevoerde projecten en zie hoe wij vakmanschap en innovatie combineren 
            voor uitzonderlijke resultaten in geveltechniek.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-300">Projecten Voltooid</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-gray-300">Jaren Ervaring</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-300">Klanttevredenheid</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-300">Specialisten</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl font-display">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {project.location}
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  {project.year} • {project.duration}
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  {project.teamSize}
                </div>
                
                <div className="pt-2">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm font-semibold text-white">Hoogtepunten:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs border-primary/50 text-gray-300"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">
              Klaar voor uw volgende project?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Laat ons uw visie werkelijkheid maken. Neem contact met ons op voor een 
              vrijblijvende offerte en ontdek hoe wij uw project tot een succes kunnen maken.
            </p>
            <button className="gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 construction-shadow">
              Plan een Gratis Consultatie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
