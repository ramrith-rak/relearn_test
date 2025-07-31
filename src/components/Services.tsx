import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Palette,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to meet your specific business requirements and scale with your growth.",
      features: ["Full-stack development", "API integrations", "Legacy system modernization"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.",
      features: ["React Native", "Flutter", "Progressive Web Apps"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user engagement.",
      features: ["React & Next.js", "TypeScript", "Responsive design"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Solutions",
      description: "Robust database design and optimization to ensure your data is secure, accessible, and performs at scale.",
      features: ["SQL & NoSQL", "Data migration", "Performance optimization"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and DevOps practices to deploy, monitor, and maintain your applications reliably.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD pipelines"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create intuitive and engaging experiences.",
      features: ["User research", "Wireframing & prototyping", "Design systems"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive software development 
            services to bring your vision to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant="ghost" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                onClick={scrollToContact}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="group"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;