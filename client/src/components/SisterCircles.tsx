import { useState } from "react";
import { Mountain, Leaf, Code, Droplet } from "lucide-react";

const circles = [
  {
    id: "pakistan",
    country: "Pakistan",
    icon: Mountain,
    gradient: "from-green-500 to-green-600",
    description: "Empowering girls in remote mountain regions with STEM education and climate awareness.",
    details: "Addressing challenges like limited educational resources, gender barriers in STEM, and climate vulnerabilities in mountainous regions."
  },
  {
    id: "nepal",
    country: "Nepal",
    icon: Leaf,
    gradient: "from-red-500 to-blue-600",
    description: "Supporting Himalayan girls with environmental education and sustainable development.",
    details: "Focusing on earthquake resilience, environmental conservation, and educational access in remote Himalayan communities."
  },
  {
    id: "india",
    country: "India",
    icon: Code,
    gradient: "from-orange-500 to-blue-600",
    description: "Bridging digital divides and promoting tech literacy among young women.",
    details: "Tackling issues like air pollution, water scarcity, and the gender gap in technology education across diverse regions."
  },
  {
    id: "bangladesh",
    country: "Bangladesh",
    icon: Droplet,
    gradient: "from-green-600 to-red-500",
    description: "Building climate resilience and educational opportunities in flood-prone areas.",
    details: "Addressing flooding challenges, climate displacement, and ensuring educational continuity in vulnerable coastal communities."
  }
];

export default function SisterCircles() {
  const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);

  return (
    <section id="circles" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="text-sister-circles-title">
            <span className="text-white">Sister</span>
            <span className="text-accent"> Circles</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto" data-testid="text-sister-circles-description">
            Virtual spaces where girls from across South Asia connect, share experiences, 
            and support each other through education, climate advocacy, and friendship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {circles.map((circle) => {
            const IconComponent = circle.icon;
            return (
              <div
                key={circle.id}
                className="country-tile p-6 rounded-2xl cursor-pointer scroll-reveal"
                onMouseEnter={() => setHoveredCircle(circle.id)}
                onMouseLeave={() => setHoveredCircle(null)}
                data-testid={`card-country-${circle.id}`}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${circle.gradient} rounded-full flex items-center justify-center`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3" data-testid={`text-country-${circle.id}`}>
                    {circle.country}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`text-description-${circle.id}`}>
                    {circle.description}
                  </p>
                  {hoveredCircle === circle.id && (
                    <div className="country-details">
                      <p className="text-accent text-sm" data-testid={`text-details-${circle.id}`}>
                        {circle.details}
                      </p>
                    </div>
                  )}
                  <div className="flex justify-center space-x-2 mt-4">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
