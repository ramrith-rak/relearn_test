import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechFlow
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              variant="hero" 
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <Button 
                variant="hero" 
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;