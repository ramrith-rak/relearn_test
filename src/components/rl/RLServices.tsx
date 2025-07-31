import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Users, 
  Video, 
  Lightbulb, 
  Smartphone, 
  Database,
  ArrowRight 
} from "lucide-react";

const RLServices = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "IT Professions Training",
      description: "Comprehensive technology training with 350+ courses covering programming, data science, cybersecurity, and emerging technologies.",
      features: ["Certification preparation", "Hands-on projects", "Industry mentorship", "Job placement support"],
      highlight: "350+ Courses Available"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Soft-skill & Leadership Training",
      description: "Essential professional skills development including communication, leadership, project management, and team collaboration.",
      features: ["Leadership workshops", "Communication mastery", "Team building", "Emotional intelligence"],
      highlight: "Expert Facilitators"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Custom Training Solutions",
      description: "Tailored in-house and virtual training programs designed specifically for your organization's unique needs and goals.",
      features: ["Customized curriculum", "Flexible scheduling", "Virtual & on-site delivery", "Progress tracking"],
      highlight: "Fully Customizable"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Consulting & Development",
      description: "Strategic consulting services to design and implement comprehensive learning and development programs for organizations.",
      features: ["Needs assessment", "Program design", "Implementation support", "Performance measurement"],
      highlight: "Strategic Partnership"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Software & Digital Solutions",
      description: "Custom software development including web applications, mobile apps, AI solutions, AR/VR experiences, and IoT implementations.",
      features: ["Web & mobile development", "AI/ML integration", "AR/VR solutions", "IoT & RPA"],
      highlight: "Cutting-edge Technology"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Learning Management Systems",
      description: "Advanced LMS platforms and educational technology solutions to enhance learning experiences and track progress.",
      features: ["Custom LMS development", "Analytics & reporting", "Integration capabilities", "Mobile accessibility"],
      highlight: "Data-driven Insights"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive education and technology solutions designed to empower 
            individuals and transform organizations in the digital age.
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
                
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent-dark text-xs font-medium rounded-full mb-3">
                  {service.highlight}
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
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
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
          <Card className="inline-block p-8 bg-gradient-hero text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Need a Tailored Program?
            </h3>
            <p className="mb-6 text-white/90">
              Let's co-design your learning journey. Our experts will work with you to create 
              a customized solution that meets your specific goals and requirements.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Start Planning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RLServices;