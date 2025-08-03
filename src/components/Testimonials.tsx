import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Leland is a true professional. He showed up on time, explained everything, and made my piano sound better than it has in years.",
      author: "Karen T.",
      location: "Henderson"
    },
    {
      quote: "He's tuned our school and stage pianos multiple times. Meticulous and dependable.",
      author: "Mr. Collins",
      role: "Music Director"
    },
    {
      quote: "Finally—someone who takes as much pride in tuning as I do in playing.",
      author: "Jason M.",
      role: "Church Pianist"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Clients Are Saying
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary">
                  — {testimonial.author}
                </p>
                {testimonial.location && (
                  <p className="text-soft-gray text-sm">{testimonial.location}</p>
                )}
                {testimonial.role && (
                  <p className="text-soft-gray text-sm">{testimonial.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;