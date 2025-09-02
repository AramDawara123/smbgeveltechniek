import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background/80 to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Innovatie in Actie
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Bekijk hoe onze geavanceerde technologieën en robots het verschil maken in de praktijk
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Supabase Video */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <div className="aspect-video relative bg-gradient-to-br from-primary/10 to-primary/5">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/lovable-uploads/25f7ee8d-9252-4eeb-b3c2-7f1fb255efbd.png"
                >
                  <source src="https://pkvayugxzgkoipclcpli.supabase.co/storage/v1/object/sign/smb/Video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMDRkYzNkZS1kNGQwLTQ3ZDgtYjE1Ni01NDFiYjNkMzhjZmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzbWIvVmlkZW8ubXA0IiwiaWF0IjoxNzU2ODAzMzk2LCJleHAiOjQ5MTA0MDMzOTZ9.R6XoHW3QYLtupVaXGUSeUXrg5MUjMQss2b023XfGUG4" type="video/mp4" />
                  Uw browser ondersteunt geen video weergave.
                </video>
                
                {/* Play overlay for visual appeal */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Innovatie Showcase</h3>
                <p className="text-muted-foreground">
                  Ontdek onze nieuwste technologische innovaties in de bouwsector
                </p>
              </div>
            </div>
          </div>

          {/* Google Drive Video */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <div className="aspect-video relative bg-gradient-to-br from-primary/10 to-primary/5">
                <iframe
                  className="w-full h-full"
                  src="https://drive.google.com/file/d/1-xPlxDWoK5KAb0RpPpO-miwaXvgobCHo/preview"
                  allow="autoplay"
                  allowFullScreen
                  title="SMB Geveltechniek Project Video"
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Project Documentatie</h3>
                <p className="text-muted-foreground">
                  Gedetailleerde kijk op onze projecten en werkprocessen
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
            <Play className="w-5 h-5" />
            <span>Meer video's op ons YouTube kanaal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;