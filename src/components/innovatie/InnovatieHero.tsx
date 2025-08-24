
const InnovatieHero = () => {
  return (
    <section className="relative py-32 min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/lovable-uploads/25f7ee8d-9252-4eeb-b3c2-7f1fb255efbd.png')",
        }}
      ></div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Additional gradient overlays for depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full opacity-50 blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white flex flex-col justify-center min-h-[500px]">
          <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight animate-slide-in px-1 sm:px-2">
            De toekomst van bouwen
          </h1>

          <h2
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in font-semibold px-1 sm:px-2"
            style={{
              animationDelay: "0.2s",
            }}
          >
            Robotisering en innovatie als antwoord op de uitdagingen van morgen
          </h2>

          <p
            className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in"
            style={{
              animationDelay: "0.3s",
            }}
          >
            Bij SMB Geveltechniek geloven we in technologie als verlengstuk van
            vakmanschap. Van metselrobots tot slimme tools - we bouwen aan de
            toekomst van de bouwsector.
          </p>
        </div>
      </div>
    </section>
  );
};
export default InnovatieHero;
