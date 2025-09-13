import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Young women in educational workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Students collaborating on STEM projects"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Mountain landscape"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const typewriterText = useTypewriter("Where Mountain Girls Rise Together.", 4000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background"></div>
      
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          <span className="text-white">Pahari Global</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sisterhood
          </span>
        </h1>
        
        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="font-display text-lg md:text-2xl text-accent font-medium min-h-8">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        
        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Connecting young women across Pakistan, Nepal, India, and Bangladesh through climate advocacy, 
          STEM education, and sisterhood that transcends borders.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="purple-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
            onClick={() => scrollToNext()}
            data-testid="button-join-circle"
          >
            Join Our Circle
          </button>
          <button 
            className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => scrollToNext()}
            data-testid="button-learn-more"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToNext} data-testid="button-scroll-down">
          <ChevronDown className="text-accent text-2xl" />
        </button>
      </div>
    </section>
  );
}
