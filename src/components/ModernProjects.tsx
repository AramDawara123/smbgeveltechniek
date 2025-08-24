

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import ImageModal from "@/components/ui/image-modal";

const ModernProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Animation hooks for stats
  const projectsCount = useCountAnimation({ end: 150, suffix: "+" });
  const experienceCount = useCountAnimation({ end: 25, suffix: "+" });
  const satisfactionCount = useCountAnimation({ end: 98, suffix: "%" });
  const specialistsCount = useCountAnimation({ end: 50, suffix: "+" });

  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/fc711684-8a80-49b5-b184-19609995bd41.png",
      alt: "Project 1"
    },
    {
      id: 2,
      image: "/lovable-uploads/0d9254c6-335e-4a52-9f81-65b316ddb5cd.png",
      alt: "Project 2"
    },
    {
      id: 3,
      image: "/lovable-uploads/8f95b7ae-3490-4862-9558-c1a4be4eabde.png",
      alt: "Project 3"
    },
    {
      id: 4,
      image: "/lovable-uploads/d19f88ed-78c0-40b1-8152-5db0ae9c9762.png",
      alt: "Project 4"
    },
    {
      id: 5,
      image: "/lovable-uploads/07abfffe-f53a-4f3e-b336-2da01c426550.png",
      alt: "Project 5"
    },
    {
      id: 6,
      image: "/lovable-uploads/2b60a42a-bd4b-4d02-87de-a5ef2c7899cf.png",
      alt: "Project 6"
    },
    {
      id: 7,
      image: "/lovable-uploads/05bed40a-d094-42df-ad9e-225bb2992f7a.png",
      alt: "Project 7"
    },
    {
      id: 8,
      image: "/lovable-uploads/6dd99701-5e85-4184-a91f-179f75af4dfa.png",
      alt: "Project 8"
    },
    {
      id: 9,
      image: "/lovable-uploads/bdf44d7c-06d7-4735-948e-e6eae1be0a5c.png",
      alt: "Project 9"
    },
    {
      id: 10,
      image: "/lovable-uploads/3155a046-52b4-45e5-9861-1c1ae1031e0e.png",
      alt: "Metselwerk terras project"
    },
    {
      id: 11,
      image: "/lovable-uploads/bd356fc2-1168-4160-ae62-6b853398e271.png",
      alt: "Modern wooncomplex"
    },
    {
      id: 12,
      image: "/lovable-uploads/49877ecb-b4bc-42cf-96da-95933b391f51.png",
      alt: "Nieuwbouw appartementencomplex"
    },
    {
      id: 13,
      image: "/lovable-uploads/824c6627-9866-433a-8fd1-8039948624d2.png",
      alt: "Bouwplaats met hijskraan"
    },
    {
      id: 14,
      image: "/lovable-uploads/84b88dcf-de71-466f-8e60-869e0e982d13.png",
      alt: "Schoorsteenrenovatie"
    },
    {
      id: 15,
      image: "/lovable-uploads/2155a827-f98a-48ee-820e-cea78274d2a7.png",
      alt: "Metselwerk fundering"
    },
    {
      id: 16,
      image: "/lovable-uploads/75844152-afb8-4b35-a20d-16d62c17228f.png",
      alt: "Precisie metselwerk"
    },
    {
      id: 17,
      image: "/lovable-uploads/5df69e77-1f02-40ea-bdca-60c1809f692f.png",
      alt: "Historische trap restauratie"
    },
    {
      id: 18,
      image: "/lovable-uploads/5ad4fda3-14a2-497d-a46d-6b7e8f0d7df7.png",
      alt: "Moderne aanbouw"
    },
    {
      id: 19,
      image: "/lovable-uploads/12c70662-1f12-4cba-bbbe-61cb244498f1.png",
      alt: "Zwembad installatie"
    },
    {
      id: 20,
      image: "/lovable-uploads/95193751-381c-411e-a58c-fd77f0bd426a.png",
      alt: "Nieuwbouw constructie"
    },
    {
      id: 21,
      image: "/lovable-uploads/0fbf0757-e622-45ef-b1e4-f3632b027f3c.png",
      alt: "Gevelrenovatie met steiger"
    },
    {
      id: 22,
      image: "/lovable-uploads/7891a0e6-f6ae-456e-87f0-bdb9bb398830.png",
      alt: "Moderne gevel met ramen"
    },
    {
      id: 23,
      image: "/lovable-uploads/4f54975d-3102-45a9-a43c-c3401288e5d1.png",
      alt: "Vakman aan het werk"
    },
    {
      id: 24,
      image: "/lovable-uploads/4aee0701-ae5b-4e4c-8609-2304d895f478.png",
      alt: "Schoorsteenonderhoud"
    },
    {
      id: 25,
      image: "/lovable-uploads/2ed6b6ec-c9bd-4f5a-87c6-2035e2686846.png",
      alt: "Modern wooncomplex aan het water"
    }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 min-h-[600px] md:min-h-[480px] bg-gradient-to-br from-construction-dark via-construction-medium to-construction-dark overflow-hidden">
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
                    src={project.image} 
                    alt={project.alt}
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
        images={projects.map(project => ({ src: project.image, alt: project.alt }))}
        initialIndex={selectedImageIndex}
      />
    </div>
  );
};

export default ModernProjects;

