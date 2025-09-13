import { GraduationCap, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Story Card */}
          <div className="glow-card p-8 rounded-2xl scroll-reveal">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white" data-testid="text-founder-name">
                  Rimmal Sheikh
                </h3>
                <p className="text-accent" data-testid="text-founder-title">Founder & High School Student</p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6" data-testid="text-founder-story-1">
              It all started during the TechGirls program when I connected with brilliant young women from 
              Costa Rica and Morocco. Our conversations about climate change, education barriers, and the 
              power of sisterhood sparked something incredible. I realized that girls across South Asia 
              face similar challenges but rarely have platforms to support each other.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-founder-story-2">
              Pahari Global Sisterhood was born from the belief that when mountain girls unite, 
              we can move mountains. Through virtual circles, STEM workshops, and peer mentorship 
              in 5+ languages, we're building a community where every girl can rise.
            </p>
            
            <div className="mt-8 flex gap-4">
              <button className="text-primary hover:text-accent transition-colors" data-testid="link-founder-linkedin">
                <Linkedin className="text-2xl" />
              </button>
              <button className="text-primary hover:text-accent transition-colors" data-testid="link-founder-twitter">
                <Twitter className="text-2xl" />
              </button>
            </div>
          </div>

          {/* South Asia Map */}
          <div className="scroll-reveal">
            <div className="relative">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 text-center" data-testid="text-impact-region">
                <span className="text-white">Our</span>
                <span className="text-accent"> Impact Region</span>
              </h2>
              
              {/* Simplified map representation with country markers */}
              <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-border">
                {/* Decorative map background representing South Asian region */}
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="South Asian region map view" 
                  className="w-full h-80 object-cover rounded-xl opacity-60"
                  data-testid="img-south-asia-map"
                />
                
                {/* Country Markers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div className="animate-float">
                      <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2 animate-pulse" data-testid="marker-pakistan"></div>
                      <span className="text-sm font-semibold text-white">Pakistan</span>
                    </div>
                    <div className="animate-float" style={{ animationDelay: '1s' }}>
                      <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2 animate-pulse" data-testid="marker-nepal"></div>
                      <span className="text-sm font-semibold text-white">Nepal</span>
                    </div>
                    <div className="animate-float" style={{ animationDelay: '2s' }}>
                      <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2 animate-pulse" data-testid="marker-india"></div>
                      <span className="text-sm font-semibold text-white">India</span>
                    </div>
                    <div className="animate-float" style={{ animationDelay: '3s' }}>
                      <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2 animate-pulse" data-testid="marker-bangladesh"></div>
                      <span className="text-sm font-semibold text-white">Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
