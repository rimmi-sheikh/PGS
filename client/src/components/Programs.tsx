import { Cpu, Box, Scale, Leaf, Users, MessageCircle } from "lucide-react";

const programs = [
  {
    id: "arduino",
    title: "Arduino Fundamentals",
    description: "Learn electronics basics and build your first IoT projects with hands-on Arduino programming.",
    level: "Beginner Level",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "Arduino electronics workshop"
  },
  {
    id: "tinkercad",
    title: "3D Design with TinkerCAD",
    description: "Design and prototype 3D models using beginner-friendly tools and prepare for 3D printing.",
    level: "Beginner Level",
    icon: Box,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "3D design and TinkerCAD workshop"
  },
  {
    id: "legal-literacy",
    title: "Legal Literacy",
    description: "Understanding your rights, educational laws, and advocacy tools for gender equality.",
    level: "All Levels",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "Legal literacy discussion session"
  },
  {
    id: "climate-action",
    title: "Climate Action",
    description: "Learn about climate science, environmental advocacy, and sustainable development goals.",
    level: "All Levels",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1569163139394-de44cb3c0ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "Climate action and environmental workshop"
  },
  {
    id: "peer-mentorship",
    title: "Peer Mentorship",
    description: "Connect with mentors and mentees across our network for academic and personal support.",
    level: "All Levels",
    icon: Users,
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "Peer mentorship and support session"
  },
  {
    id: "language-exchange",
    title: "Language Exchange",
    description: "Practice and learn regional languages while building cross-cultural friendships.",
    level: "All Levels",
    icon: MessageCircle,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "Multilingual language exchange session"
  }
];

const languages = ["Urdu", "Hindi", "Nepali", "Bengali", "English", "+ More"];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="text-programs-title">
            <span className="text-white">Programs &</span>
            <span className="text-accent"> Workshops</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto" data-testid="text-programs-description">
            Beginner-friendly STEM workshops, legal literacy sessions, and peer mentorship 
            programs delivered in 5+ languages across our network.
          </p>
        </div>

        {/* Workshop Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={program.id}
                className="glow-card p-6 rounded-2xl group cursor-pointer scroll-reveal"
                data-testid={`card-program-${program.id}`}
              >
                <img 
                  src={program.image}
                  alt={program.alt}
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-program-${program.id}`}
                />
                <h3 className="font-display font-bold text-xl text-white mb-3" data-testid={`text-program-title-${program.id}`}>
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-program-description-${program.id}`}>
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-accent text-sm font-semibold" data-testid={`text-program-level-${program.id}`}>
                    {program.level}
                  </span>
                  <IconComponent className="text-primary text-lg" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Language Support Banner */}
        <div className="glow-card p-8 rounded-2xl text-center scroll-reveal">
          <h3 className="font-display font-bold text-2xl text-white mb-4" data-testid="text-language-support-title">
            Programs Available in 5+ Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {languages.map((language, index) => (
              <span 
                key={index}
                className="bg-primary/20 text-accent px-4 py-2 rounded-full text-sm font-semibold"
                data-testid={`tag-language-${language.toLowerCase().replace('+', 'plus').replace(' ', '-')}`}
              >
                {language}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground" data-testid="text-language-support-description">
            Breaking language barriers to ensure every girl can participate and learn in her preferred language.
          </p>
        </div>
      </div>
    </section>
  );
}
