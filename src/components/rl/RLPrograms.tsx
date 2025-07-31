import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  TestTube, 
  Brain, 
  Smartphone, 
  Shield,
  ArrowRight,
  Clock,
  Users,
  Award
} from "lucide-react";

const RLPrograms = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const programs = [
    {
      id: "codecamp",
      icon: <Code className="h-8 w-8" />,
      title: "CodeCamp with Generative AI",
      category: "development",
      level: "Intermediate",
      duration: "16 weeks",
      students: "25-30",
      description: "Comprehensive full-stack development program enhanced with cutting-edge Generative AI tools and techniques.",
      features: ["React & Node.js", "AI Integration", "Real Projects", "Job Guarantee"],
      price: "฿89,000",
      badge: "Most Popular",
      color: "primary"
    },
    {
      id: "datacamp",
      icon: <Database className="h-8 w-8" />,
      title: "DataCamp with AI Analytics",
      category: "data",
      level: "Beginner to Advanced",
      duration: "14 weeks",
      students: "20-25",
      description: "Master data science, machine learning, and AI analytics with hands-on projects using real industry datasets.",
      features: ["Python & R", "Machine Learning", "AI Tools", "Portfolio Projects"],
      price: "฿79,000",
      badge: "High Demand",
      color: "accent"
    },
    {
      id: "qacamp",
      icon: <TestTube className="h-8 w-8" />,
      title: "QA Camp with Automation",
      category: "testing",
      level: "Beginner",
      duration: "12 weeks",
      students: "15-20",
      description: "Quality assurance and testing bootcamp with focus on automation, AI-powered testing, and modern QA practices.",
      features: ["Test Automation", "AI Testing", "ISTQB Prep", "Industry Tools"],
      price: "฿65,000",
      badge: "New",
      color: "primary"
    },
    {
      id: "aicamp",
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning Bootcamp",
      category: "ai",
      level: "Intermediate",
      duration: "18 weeks",
      students: "15-20",
      description: "Deep dive into artificial intelligence, machine learning, and neural networks with practical applications.",
      features: ["Deep Learning", "NLP", "Computer Vision", "MLOps"],
      price: "฿95,000",
      badge: "Advanced",
      color: "accent"
    },
    {
      id: "mobilecamp",
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development Camp",
      category: "mobile",
      level: "Intermediate",
      duration: "14 weeks",
      students: "20-25",
      description: "Cross-platform mobile development with React Native and Flutter, including AI-powered mobile applications.",
      features: ["React Native", "Flutter", "AI Integration", "App Store Deployment"],
      price: "฿75,000",
      badge: "Trending",
      color: "primary"
    },
    {
      id: "cybersecurity",
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity Professional",
      category: "security",
      level: "Intermediate to Advanced",
      duration: "16 weeks",
      students: "15-20",
      description: "Comprehensive cybersecurity training covering ethical hacking, penetration testing, and security architecture.",
      features: ["Ethical Hacking", "Penetration Testing", "Security Analysis", "Certification Prep"],
      price: "฿85,000",
      badge: "High Salary",
      color: "accent"
    }
  ];

  const filters = [
    { id: "all", label: "All Programs" },
    { id: "development", label: "Development" },
    { id: "data", label: "Data Science" },
    { id: "ai", label: "AI & ML" },
    { id: "mobile", label: "Mobile" },
    { id: "testing", label: "QA Testing" },
    { id: "security", label: "Cybersecurity" }
  ];

  const filteredPrograms = activeFilter === "all" 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-20 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Flagship <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Intensive, career-focused bootcamps designed to transform you into a 
            job-ready professional with cutting-edge skills and industry certifications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "primary" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <Card 
              key={program.id} 
              className="p-6 bg-background border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-${program.color}/10 rounded-xl group-hover:bg-${program.color}/20 transition-colors`}>
                    <div className={`text-${program.color}`}>
                      {program.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent-dark">
                    {program.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
              </div>

              {/* Program Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{program.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{program.level}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{program.students} students per cohort</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary">{program.price}</div>
                  <div className="text-xs text-muted-foreground">Full program</div>
                </div>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={scrollToContact}
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  View Curriculum
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-background border-2 border-primary/20">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">
                Not Sure Which Program is Right for You?
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Schedule a free consultation with our career advisors. We'll help you choose 
              the perfect program based on your background, goals, and career aspirations.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RLPrograms;