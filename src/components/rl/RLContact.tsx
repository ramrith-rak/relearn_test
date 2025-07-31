import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const RLContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    program: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your interest. Our team will contact you within 24 hours to discuss your learning journey.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      program: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Bangkok Office",
      content: "123 Technology Tower, Sukhumvit Road\nBangkok 10110, Thailand",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+66 (0) 2-123-4567\n+66 (0) 89-123-4567",
      link: "tel:+6621234567"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@relearnsolution.com\nadmissions@relearnsolution.com",
      link: "mailto:info@relearnsolution.com"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Line Official Account",
      content: "@relearnsolution\nQuick response available",
      link: "https://line.me/R/ti/p/@relearnsolution"
    }
  ];

  const programs = [
    "CodeCamp with Generative AI",
    "DataCamp with AI Analytics", 
    "QA Camp with Automation",
    "AI & Machine Learning Bootcamp",
    "Mobile Development Camp",
    "Cybersecurity Professional",
    "Custom Corporate Training",
    "Consulting Services",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Start Your <span className="text-primary">Learning Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your career? Get in touch with our team to explore 
            how our programs can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking to advance your career, upskill your team, 
                or explore custom training solutions, we're here to help you succeed. 
                Our education consultants are ready to design the perfect learning path for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-background border-border/50 hover:shadow-soft transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-sm"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4">Why Choose Relearn Solution?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Free career consultation & program assessment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Flexible payment plans & scholarship opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Job placement assistance & career support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Lifetime access to learning resources</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-background border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Ready to Get Started?
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background border-border"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-foreground mb-2">
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Goals *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border resize-none"
                  placeholder="Share your background, career goals, timeline, and any specific questions you have about our programs..."
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RLContact;