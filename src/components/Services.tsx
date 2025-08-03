import { Button } from "@/components/ui/button";
import { Music2, TrendingUp, Settings, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Music2,
      title: "Standard Piano Tuning",
      description: "Accurate A440 tuning for all models"
    },
    {
      icon: TrendingUp,
      title: "Pitch Correction",
      description: "Raise service for long-overdue tunings"
    },
    {
      icon: Settings,
      title: "Minor Repairs & Adjustments",
      description: "Sticky notes, uneven touch, sluggish action, noisy pedals"
    },
    {
      icon: Building,
      title: "Venue & Institutional Tuning",
      description: "Stage, school, and church-ready service"
    }
  ];

  const pianoTypes = ["Spinet", "Upright", "Baby Grand", "Concert Grand"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Complete Piano Care Services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-lg p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 rounded-lg p-3 flex-shrink-0">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-warm-cream rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-primary text-center mb-6">
            Piano Types Tuned
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {pianoTypes.map((type, index) => (
              <span 
                key={index}
                className="bg-accent/20 text-primary px-4 py-2 rounded-full font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <a href="https://gazelleapp.io/scheduling/GC11tC8vxywGCc3ZfjnKlX0t" target="_blank" rel="noopener noreferrer">
            <Button variant="elegant" size="xl" className="shadow-button hover:scale-105 transition-transform duration-200">
              Schedule Your Appointment
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;