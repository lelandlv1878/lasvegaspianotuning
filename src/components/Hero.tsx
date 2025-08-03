import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-piano.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Keep Your Piano in 
          <span className="block text-accent"> Peak Performance</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
          With over 25 years of professional music and tuning experience, I bring precision, care, 
          and expertise to every piano—uprights, grands, and spinets alike.
        </p>
        
        <div className="space-y-4">
          <a href="https://gazelleapp.io/scheduling/GC11tC8vxywGCc3ZfjnKlX0t" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="elegant" 
              size="xl"
              className="text-lg shadow-button hover:scale-105 transition-transform duration-200"
            >
              Book a Tuning Today
            </Button>
          </a>
          
          <p className="text-lg opacity-90">
            Prefer to speak first?{" "}
            <a href="tel:(702) 813-1248" className="font-semibold hover:text-accent transition-colors underline">
              Call or text me at (702) 813-1248
            </a>
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;