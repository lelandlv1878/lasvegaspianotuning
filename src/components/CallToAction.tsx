import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Get Your Piano Tuned
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Appointments typically take about 1 hour and 45 minutes. I'm happy to answer any questions beforehand.
        </p>
        
        <div className="space-y-6">
          <a href="https://gazelleapp.io/scheduling/GC11tC8vxywGCc3ZfjnKlX0t" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="gold" 
              size="xl"
              className="text-lg shadow-button hover:scale-105 transition-transform duration-200"
            >
              Book Now
            </Button>
          </a>
          
          <div className="flex items-center justify-center space-x-2 text-lg opacity-90">
            <Phone className="w-5 h-5" />
            <span>Prefer to speak first? Reach me directly at</span>
            <a href="tel:(702) 813-1248" className="font-semibold hover:text-accent transition-colors">
              (702) 813-1248
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;