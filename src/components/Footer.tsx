import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechFlow
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Transforming innovative ideas into powerful digital solutions. 
              Building the future of software, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mobile Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  UI/UX Design
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <a
                  href="mailto:careers@techflow.dev"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                hello@techflow.dev
              </li>
              <li className="text-muted-foreground">
                +1 (555) 123-4567
              </li>
              <li className="text-muted-foreground">
                123 Tech Street
                <br />
                Innovation District
                <br />
                San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} TechFlow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;