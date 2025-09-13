import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: "ayesha",
    name: "Ayesha",
    circle: "Pakistan Circle",
    initial: "A",
    gradient: "from-purple-500 to-pink-500",
    quote: "Through PGS, I learned Arduino programming and built my first weather monitoring system. The sisterhood here gave me confidence to pursue engineering despite societal barriers."
  },
  {
    id: "priya",
    name: "Priya",
    circle: "Nepal Circle",
    initial: "P",
    gradient: "from-blue-500 to-green-500",
    quote: "The legal literacy workshops opened my eyes to my rights as a young woman. Now I help other girls in my village understand their educational rights too."
  },
  {
    id: "sakshi",
    name: "Sakshi",
    circle: "India Circle",
    initial: "S",
    gradient: "from-orange-500 to-red-500",
    quote: "Being part of this sisterhood showed me that climate action isn't just for adults. We started a recycling program in our school inspired by PGS workshops."
  },
  {
    id: "fatima",
    name: "Fatima",
    circle: "Bangladesh Circle",
    initial: "F",
    gradient: "from-green-500 to-blue-500",
    quote: "The peer mentorship program connected me with amazing sisters across borders. Together, we're building resilience against climate challenges in our communities."
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="text-testimonials-title">
            <span className="text-white">What Our</span>
            <span className="text-accent"> Sisters Say</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto" data-testid="text-testimonials-description">
            Hear from the amazing young women who are part of our growing sisterhood.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="testimonial-card p-8 rounded-2xl mx-4 scroll-reveal" data-testid={`card-testimonial-${testimonial.id}`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                        <span className="text-white font-bold text-xl">{testimonial.initial}</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-xl text-white" data-testid={`text-testimonial-name-${testimonial.id}`}>
                          {testimonial.name}
                        </h4>
                        <p className="text-accent" data-testid={`text-testimonial-circle-${testimonial.id}`}>{testimonial.circle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg italic mb-6" data-testid={`text-testimonial-quote-${testimonial.id}`}>
                      "{testimonial.quote}"
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-white p-3 rounded-full transition-all duration-300"
            data-testid="button-prev-testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-white p-3 rounded-full transition-all duration-300"
            data-testid="button-next-testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                }`}
                data-testid={`button-testimonial-indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
