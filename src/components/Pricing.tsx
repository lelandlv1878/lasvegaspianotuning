const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            🎵 Clear, Fair Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I believe in honest, upfront pricing—no surprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-card hover:shadow-elegant transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Standard Piano Tuning
            </h3>
            <div className="text-3xl font-bold text-accent mb-4">$180</div>
            <p className="text-muted-foreground">
              Includes full tuning and minor adjustments (sticky keys, pedal issues, etc.)
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-card hover:shadow-elegant transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Pitch Raise (if needed)
            </h3>
            <div className="text-3xl font-bold text-accent mb-4">Additional $60</div>
            <p className="text-muted-foreground">
              If your piano hasn't been tuned in many years and is significantly flat, a pitch correction will be discussed before proceeding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;