
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      image: "/lovable-uploads/2379fd3a-90bb-4195-8c79-6711d24b21f7.png",
      alt: "Project 10"
    }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
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

      {/* Projects Carousel */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <Carousel className="max-w-7xl mx-auto">
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-2 rounded-xl cursor-pointer"
                    onClick={() => handleImageClick(index)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.alt}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
