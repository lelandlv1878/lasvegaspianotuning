// Using uploaded image directly

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Your Piano Tuner
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hi, I'm <span className="text-primary font-semibold">Leland</span>, a Las Vegas-based piano technician 
              and lifelong professional musician. With more than 25 years of experience in music performance 
              and keyboard maintenance, I tune each piano as if it were my own.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether your piano lives in a quiet home, a bustling church, or a concert stage, 
              I bring the same attention to detail and passion to every job. My background as both 
              a musician and technician gives me a unique understanding of what your piano needs 
              to sound its absolute best.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-lg transform rotate-3"></div>
              <img 
                src="/lovable-uploads/6719ed5b-784a-4944-b6e5-3b701de5d751.png"
                alt="Leland Kantas, professional piano tuner"
                className="relative rounded-lg shadow-elegant w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;