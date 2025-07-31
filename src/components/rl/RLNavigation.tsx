import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

const RLNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Programs", id: "programs" },
    { label: "Success Stories", id: "testimonials" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              RL<span className="text-accent">.</span>
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">Relearn Solution</p>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === "EN" ? "TH" : "EN")}
              className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{language}</span>
            </button>
            <Button 
              variant="primary" 
              onClick={() => scrollToSection("contact")}
            >
              Talk to Our Team
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
        <div className="lg:hidden bg-background border-b border-border shadow-soft">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2 flex items-center justify-between">
              <button
                onClick={() => setLanguage(language === "EN" ? "TH" : "EN")}
                className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{language}</span>
              </button>
              <Button 
                variant="primary" 
                onClick={() => scrollToSection("contact")}
                className="ml-4"
              >
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default RLNavigation;