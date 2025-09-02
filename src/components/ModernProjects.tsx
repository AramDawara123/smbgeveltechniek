import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import ImageModal from "@/components/ui/image-modal";
import { supabase } from "@/integrations/supabase/client";

interface Project {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  alt_text: string;
  category?: string;
  location?: string;
  year?: number;
  is_featured: boolean;
  display_order: number;
}

const ModernProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Animation hooks for stats
  const projectsCount = useCountAnimation({ end: 150, suffix: "+" });
  const experienceCount = useCountAnimation({ end: 25, suffix: "+" });
  const satisfactionCount = useCountAnimation({ end: 98, suffix: "%" });
  const specialistsCount = useCountAnimation({ end: 50, suffix: "+" });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_featured', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-32 min-h-[600px] bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col justify-center min-h-[500px]">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Onze 
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent"> Projecten</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Van historische renovaties tot moderne nieuwbouw - ontdek hoe wij 
              vakmanschap en innovatie samenbrengen voor uitzonderlijke resultaten.
            </p>

            {/* Stats Cards with Animated Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div ref={projectsCount.ref} className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {projectsCount.count}
                </div>
                <div className="text-slate-200 text-sm md:text-base">Voltooide Projecten</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div ref={experienceCount.ref} className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {experienceCount.count}
                </div>
                <div className="text-slate-200 text-sm md:text-base">Jaar Ervaring</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div ref={satisfactionCount.ref} className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {satisfactionCount.count}
                </div>
                <div className="text-slate-200 text-sm md:text-base">Klanttevredenheid</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div ref={specialistsCount.ref} className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {specialistsCount.count}
                </div>
                <div className="text-slate-200 text-sm md:text-base">Vakspecialisten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-2 rounded-xl cursor-pointer"
                onClick={() => handleImageClick(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image_url} 
                    alt={project.alt_text}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={projects.map(project => ({ src: project.image_url, alt: project.alt_text }))}
        initialIndex={selectedImageIndex}
      />
    </div>
  );
};

export default ModernProjects;
