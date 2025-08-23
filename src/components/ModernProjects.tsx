
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award, ExternalLink } from "lucide-react";
import { useState } from "react";

const ModernProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Renovatie Historisch Pand Amsterdam",
      description: "Volledige gevelrenovatie van een 17e-eeuws monumentaal pand in het centrum van Amsterdam.",
      image: "/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png",
      location: "Amsterdam Centrum",
      year: "2023",
      category: "gevelrenovatie",
      categoryLabel: "Gevelrenovatie",
      teamSize: "8 specialisten",
      duration: "6 maanden",
      highlights: ["Monumentaal pand", "Handmatig metselwerk", "Originele technieken"],
      featured: true
    },
    {
      id: 2,
      title: "Nieuwbouw Wooncomplex Rotterdam",
      description: "Modern wooncomplex met innovatieve geveltechnieken en duurzame materialen.",
      image: "/lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png",
      location: "Rotterdam Zuid",
      year: "2023",
      category: "nieuwbouw",
      categoryLabel: "Nieuwbouw",
      teamSize: "12 specialisten",
      duration: "10 maanden",
      highlights: ["Duurzame materialen", "Moderne technieken", "Energiezuinig"],
      featured: true
    },
    {
      id: 3,
      title: "Scheurherstel Kantoorgebouw Den Haag",
      description: "Professioneel scheurherstel en gevelonderhoud van een groot kantoorcomplex.",
      image: "/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png",
      location: "Den Haag",
      year: "2022",
      category: "scheurherstel",
      categoryLabel: "Scheurherstel",
      teamSize: "6 specialisten",
      duration: "4 maanden",
      highlights: ["Structureel herstel", "Preventief onderhoud", "Minimale hinder"],
      featured: false
    },
    {
      id: 4,
      title: "Renovatieankers Project Utrecht",
      description: "Installatie van renovatieankers voor structurele versterking van een historisch gebouw.",
      image: "/lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png",
      location: "Utrecht Centrum",
      year: "2022",
      category: "renovatieankers",
      categoryLabel: "Renovatieankers",
      teamSize: "5 specialisten",
      duration: "3 maanden",
      highlights: ["Structurele versterking", "Invisibele oplossing", "Duurzaam resultaat"],
      featured: false
    },
    {
      id: 5,
      title: "Metselwerk Woonwijk Almere",
      description: "Uitgebreid metselwerk voor nieuwe woonwijk met traditionele en moderne technieken.",
      image: "/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png",
      location: "Almere Stad",
      year: "2023",
      category: "metselwerk",
      categoryLabel: "Metselwerk",
      teamSize: "15 specialisten",
      duration: "12 maanden",
      highlights: ["Grote schaal project", "Mixed technieken", "Teamwork"],
      featured: false
    },
    {
      id: 6,
      title: "Gevelrenovatie Bedrijfspand Eindhoven",
      description: "Complete gevelrenovatie van een groot bedrijfspand met focus op duurzaamheid.",
      image: "/lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png",
      location: "Eindhoven",
      year: "2021",
      category: "gevelrenovatie",
      categoryLabel: "Gevelrenovatie",
      teamSize: "10 specialisten",
      duration: "8 maanden",
      highlights: ["Bedrijfspand", "Duurzame upgrade", "Energiebesparing"],
      featured: false
    }
  ];

  const categories = [
    { value: "all", label: "Alle Projecten" },
    { value: "gevelrenovatie", label: "Gevelrenovatie" },
    { value: "nieuwbouw", label: "Nieuwbouw" },
    { value: "scheurherstel", label: "Scheurherstel" },
    { value: "renovatieankers", label: "Renovatieankers" },
    { value: "metselwerk", label: "Metselwerk" }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Onze <span className="text-primary">Projecten</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ontdek hoe wij vakmanschap en innovatie combineren voor 
              uitzonderlijke resultaten in geveltechniek
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="text-3xl font-bold text-primary">150+</span>
                <span className="text-white ml-2">Voltooide Projecten</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="text-3xl font-bold text-primary">25+</span>
                <span className="text-white ml-2">Jaar Ervaring</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="text-3xl font-bold text-primary">98%</span>
                <span className="text-white ml-2">Klanttevredenheid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? "bg-primary text-white shadow-lg transform scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {selectedCategory === "all" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Uitgelichte Projecten</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Onze meest bijzondere en innovatieve projecten die onze expertise tonen
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white font-semibold">
                        Uitgelicht
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-800">
                        {project.categoryLabel}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-slate-600">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {project.year}
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {project.teamSize}
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        {project.duration}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center mb-3">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-semibold text-slate-900">Hoogtepunten:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs border-primary/30 text-slate-700 bg-primary/5"
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
          </div>
        </section>
      )}

      {/* Regular Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedCategory === "all" && (
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Alle Projecten</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Een overzicht van al onze voltooide projecten
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "all" ? regularProjects : filteredProjects).map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-slate-800 text-xs">
                      {project.categoryLabel}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-3 h-3 mr-2 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Calendar className="w-3 h-3 mr-2 text-primary" />
                      {project.year} • {project.duration}
                    </div>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-slate-700 bg-primary/5"
                        >
                          {highlight}
                        </Badge>
                      ))}
                      {project.highlights.length > 2 && (
                        <Badge variant="outline" className="text-xs border-slate-300 text-slate-500">
                          +{project.highlights.length - 2} meer
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Geen projecten gevonden</h3>
              <p className="text-slate-600">Probeer een andere categorie te selecteren.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Klaar voor uw volgende project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Laat ons uw visie werkelijkheid maken. Neem contact met ons op voor een 
              vrijblijvende offerte en ontdek hoe wij uw project tot een succes kunnen maken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 construction-shadow">
                Plan een Gratis Consultatie
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Bekijk Meer Projecten
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernProjects;
