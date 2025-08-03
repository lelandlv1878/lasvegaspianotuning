import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Las Vegas Piano Tuning</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Professional piano tuning and minor repairs with over 25 years of experience. 
              Serving Las Vegas and surrounding areas with precision, care, and expertise.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:(702) 813-1248" className="hover:text-accent transition-colors">
                  (702) 813-1248
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:leland@lasvegaspianotuning.com" className="hover:text-accent transition-colors">
                  leland@lasvegaspianotuning.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">Mon – Sat</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Las Vegas, North Las Vegas, Summerlin, Henderson, and Boulder City</span>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © 2024 LasVegasPianoTuning.com. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;