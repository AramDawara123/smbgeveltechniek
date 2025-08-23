import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award, Star, ArrowRight } from "lucide-react";
import { useState } from "react";
const ModernProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const projects = [{
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
    featured: true,
    rating: 5.0
  }, {
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
    featured: true,
    rating: 4.9
  }, {
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
    featured: false,
    rating: 4.8
  }, {
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
    featured: false,
    rating: 4.7
  }, {
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
    featured: false,
    rating: 4.6
  }, {
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
    featured: false,
    rating: 4.5
  }];
  const categories = [{
    value: "all",
    label: "Alle Projecten",
    count: projects.length
  }, {
    value: "gevelrenovatie",
    label: "Gevelrenovatie",
    count: projects.filter(p => p.category === "gevelrenovatie").length
  }, {
    value: "nieuwbouw",
    label: "Nieuwbouw",
    count: projects.filter(p => p.category === "nieuwbouw").length
  }, {
    value: "scheurherstel",
    label: "Scheurherstel",
    count: projects.filter(p => p.category === "scheurherstel").length
  }, {
    value: "renovatieankers",
    label: "Renovatieankers",
    count: projects.filter(p => p.category === "renovatieankers").length
  }, {
    value: "metselwerk",
    label: "Metselwerk",
    count: projects.filter(p => p.category === "metselwerk").length
  }];
  const filteredProjects = selectedCategory === "all" ? projects : projects.filter(project => project.category === selectedCategory);
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 min-h-[420px] md:min-h-[480px] bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Onze 
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent"> Projecten</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Van historische renovaties tot moderne nieuwbouw - ontdek hoe wij 
              vakmanschap en innovatie samenbrengen voor uitzonderlijke resultaten.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[{
              number: "150+",
              label: "Voltooide Projecten"
            }, {
              number: "25+",
              label: "Jaar Ervaring"
            }, {
              number: "98%",
              label: "Klanttevredenheid"
            }, {
              number: "50+",
              label: "Vakspecialisten"
            }].map((stat, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-slate-200 text-sm md:text-base">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      

      {/* Featured Projects */}
      {selectedCategory === "all" && <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Onze <span className="text-primary">Topprojecten</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                De projecten waar we het meest trots op zijn - een showcase van ons beste werk
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {projects.filter(p => p.featured).map((project, index) => <Card key={project.id} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 bg-white rounded-2xl">
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-bold text-slate-800">{project.rating}</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white font-semibold shadow-lg">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {project.categoryLabel}
                      </Badge>
                      <span className="text-sm text-slate-500">{project.year}</span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center text-slate-600">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm">{project.duration}</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center mb-3">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-semibold text-slate-900">Hoogtepunten:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, idx) => <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-slate-700 bg-primary/5 hover:bg-primary/10 transition-colors">
                            {highlight}
                          </Badge>)}
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-orange-400 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Bekijk Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>}

      {/* All Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {selectedCategory === "all" && <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Alle Projecten</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Een compleet overzicht van al onze voltooide projecten
              </p>
            </div>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {(selectedCategory === "all" ? projects.filter(p => !p.featured) : filteredProjects).map((project, index) => <Card key={project.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-2 rounded-xl">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      <span className="text-xs font-bold text-slate-800">{project.rating}</span>
                    </div>
                  </div>
                  
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
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-primary" />
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-slate-700 bg-primary/5">
                        {highlight}
                      </Badge>)}
                    {project.highlights.length > 2 && <Badge variant="outline" className="text-xs border-slate-300 text-slate-500">
                        +{project.highlights.length - 2}
                      </Badge>}
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                    Meer Details
                  </button>
                </CardContent>
              </Card>)}
          </div>

          {filteredProjects.length === 0 && <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-200 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Geen projecten gevonden</h3>
              <p className="text-slate-600 mb-8">Probeer een andere categorie te selecteren.</p>
              <button onClick={() => setSelectedCategory("all")} className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Bekijk alle projecten
              </button>
            </div>}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,165,0,0.2),transparent_50%)] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm border border-white/20">
                <Award className="w-4 h-4 mr-2" />
                Start Uw Project
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Klaar voor uw 
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent"> volgende project?</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Van eerste schets tot eindresultaat - wij begeleiden u door het hele proces. 
              Laat ons samen iets bijzonders creëren.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-orange-400 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/25">
                Plan Gratis Consultatie
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ModernProjects;
