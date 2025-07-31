import { Card } from "@/components/ui/card";
import { Linkedin, Github, Twitter } from "lucide-react";
import ceoImage from "@/assets/team-ceo.jpg";
import devImage from "@/assets/team-dev.jpg";
import designerImage from "@/assets/team-designer.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: ceoImage,
      bio: "Visionary leader with 10+ years in tech strategy and business development. Passionate about transforming ideas into reality.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      image: devImage,
      bio: "Full-stack architect with expertise in modern web technologies. Loves building scalable, performant applications.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emily Johnson",
      role: "UX/UI Designer",
      image: designerImage,
      bio: "Creative designer focused on user-centered design. Specializes in creating intuitive and beautiful digital experiences.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-accent bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience, 
            creativity, and technical excellence to deliver outstanding results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="p-8 text-center bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-elegant group-hover:shadow-primary transition-shadow"
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              
              <p className="text-primary font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-card border-border/50">
            <h3 className="text-2xl font-semibold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <a
              href="mailto:careers@techflow.dev"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-accent text-white rounded-lg hover:shadow-accent hover:scale-105 transition-all duration-300 font-semibold"
            >
              View Open Positions
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;