import { Music, Wrench, Clock, Piano } from "lucide-react";

const WhyChooseMe = () => {
  const features = [
    {
      icon: Music,
      title: "Deep Musical Experience",
      description: "I'm not just a tuner; I'm a seasoned Broadway Show conductor and musician who knows what great sound should feel like."
    },
    {
      icon: Wrench,
      title: "Beyond Tuning",
      description: "Sticky keys? Noisy pedals? I fix minor issues during your visit."
    },
    {
      icon: Clock,
      title: "On-Time & Reliable",
      description: "You'll receive reminders and professional communication."
    },
    {
      icon: Piano,
      title: "All Piano Types & Brands",
      description: "From Steinway to Yamaha, spinets to concert grands."
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Sets My Service Apart
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-elegant transition-shadow duration-300 text-center"
            >
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-soft-gray font-medium">
            Serving Las Vegas, Henderson, Summerlin, Spring Valley & surrounding areas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;