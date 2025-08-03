import Hero from "@/components/Hero";
import WhyChooseMe from "@/components/WhyChooseMe";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseMe />
      <Services />
      <Pricing />
      <Testimonials />
      <About />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
