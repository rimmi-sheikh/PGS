import { Mountain } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="text-primary text-2xl" />
              <span className="font-display font-bold text-xl text-white" data-testid="text-footer-brand">
                Pahari Global Sisterhood
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md" data-testid="text-footer-description">
              Connecting young women across South Asia through climate advocacy, 
              STEM education, and sisterhood that transcends borders.
            </p>
            <p className="text-accent font-semibold italic" data-testid="text-footer-tagline">
              "Where Mountain Girls Rise Together."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4" data-testid="text-footer-quicklinks-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('circles')} 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="link-footer-circles"
                >
                  Sister Circles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')} 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="link-footer-programs"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="link-footer-involved"
                >
                  Get Involved
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-white mb-4" data-testid="text-footer-support-title">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <button className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-resources">
                  Resources
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-faq">
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground" data-testid="text-footer-copyright">
            © 2024 Pahari Global Sisterhood. Founded with 💜 by Rimmal Sheikh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
