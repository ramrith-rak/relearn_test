import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";

const RLFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Programs", id: "programs" },
    { label: "Success Stories", id: "testimonials" },
    { label: "Contact", id: "contact" }
  ];

  const programs = [
    "CodeCamp with Generative AI",
    "DataCamp with AI Analytics", 
    "QA Camp with Automation",
    "AI & Machine Learning Bootcamp",
    "Corporate Training",
    "Consulting Services"
  ];

  const resources = [
    { label: "Blog & Insights", href: "#" },
    { label: "Event Calendar", href: "#" },
    { label: "Free Resources", href: "#" },
    { label: "Alumni Network", href: "#" },
    { label: "Career Center", href: "#" },
    { label: "Scholarship Info", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                RL<span className="text-accent">.</span>
              </h3>
              <p className="text-xs text-white/70 mb-4">Relearn Solution Co., Ltd.</p>
              <p className="text-white/80 leading-relaxed text-sm">
                Leading the way in skill-based education. Transforming careers 
                and organizations through innovative learning solutions and 
                cutting-edge digital training programs.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://line.me/R/ti/p/@relearnsolution"
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="mailto:careers@relearnsolution.com"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-6">Popular Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("programs")}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {program}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              <h5 className="font-medium text-white text-sm">Contact Info</h5>
              <p className="text-white/70 text-xs">
                123 Technology Tower<br />
                Sukhumvit Road, Bangkok 10110
              </p>
              <p className="text-white/70 text-xs">
                Tel: +66 (0) 2-123-4567<br />
                Email: info@relearnsolution.com
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Relearn Solution Co., Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-white/70 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-accent text-sm transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-accent text-sm transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RLFooter;