import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Building the 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Future </span>
                of Software
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We transform innovative ideas into powerful digital solutions. 
                From concept to deployment, our expert team delivers cutting-edge 
                software that drives your business forward.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("services")}
              >
                View Our Services
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">Clean Code</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm font-medium text-foreground">Fast Delivery</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">Secure & Reliable</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern software development team"
                className="rounded-2xl shadow-elegant w-full animate-float"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;