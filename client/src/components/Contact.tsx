import { useState } from "react";
import { Mail, Globe, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    toast({
      title: "Thank you for your interest!",
      description: "We will get back to you soon.",
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter.",
    });
    setNewsletterEmail("");
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "blue-600" },
    { icon: Instagram, label: "Instagram", color: "pink-600" },
    { icon: Twitter, label: "Twitter", color: "blue-400" },
    { icon: Linkedin, label: "LinkedIn", color: "blue-700" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="text-contact-title">
            <span className="text-white">Get</span>
            <span className="text-accent"> Involved</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto" data-testid="text-contact-description">
            Ready to join our sisterhood? Let's connect and build a stronger community together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glow-card p-8 rounded-2xl scroll-reveal">
            <h3 className="font-display font-bold text-2xl text-white mb-6" data-testid="text-form-title">
              Send us a message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-accent font-semibold mb-2">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-accent font-semibold mb-2">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-accent font-semibold mb-2">Country</label>
                <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                  <SelectTrigger className="bg-input border-border text-foreground" data-testid="select-country">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pakistan">Pakistan</SelectItem>
                    <SelectItem value="nepal">Nepal</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-accent font-semibold mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about yourself and how you'd like to get involved..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full purple-gradient text-white py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                data-testid="button-submit-form"
              >
                Join Our Sisterhood
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 scroll-reveal">
            {/* Contact Details */}
            <div className="glow-card p-8 rounded-2xl">
              <h3 className="font-display font-bold text-2xl text-white mb-6" data-testid="text-connect-title">
                Connect With Us
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-muted-foreground" data-testid="text-email">hello@pahariglobalsisterhood.org</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Website</p>
                    <p className="text-muted-foreground" data-testid="text-website">pahariglobalsisterhood.org</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Coverage</p>
                    <p className="text-muted-foreground" data-testid="text-coverage">Pakistan, Nepal, India, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glow-card p-8 rounded-2xl">
              <h3 className="font-display font-bold text-2xl text-white mb-6" data-testid="text-social-title">
                Follow Our Journey
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={social.label}
                      className={`flex items-center justify-center p-4 bg-${social.color}/20 hover:bg-${social.color}/30 rounded-lg transition-all duration-300 group`}
                      data-testid={`button-social-${social.label.toLowerCase()}`}
                    >
                      <IconComponent className={`text-${social.color.replace('-', '-')} text-xl mr-3 group-hover:scale-110 transition-transform`} />
                      <span className="text-white">{social.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="glow-card p-8 rounded-2xl">
              <h3 className="font-display font-bold text-2xl text-white mb-4" data-testid="text-newsletter-title">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-newsletter-description">
                Get the latest news and updates from our sisterhood.
              </p>
              
              <form className="flex gap-3" onSubmit={handleNewsletterSubmit}>
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  data-testid="input-newsletter-email"
                />
                <Button 
                  type="submit"
                  className="purple-gradient text-white px-6 py-3 font-semibold hover:scale-105 transition-transform duration-300"
                  data-testid="button-newsletter-subscribe"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
