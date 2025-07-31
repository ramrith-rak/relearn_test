import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excellence",
      description: "We deliver exceptional quality in every project, ensuring your software meets the highest standards."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring transparent communication throughout the process."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive edge."
    }
  ];

  const achievements = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                About <span className="bg-gradient-accent bg-clip-text text-transparent">TechFlow</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to bridge the gap between innovative ideas and 
                cutting-edge technology, TechFlow has been at the forefront of software 
                development for over 5 years.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of passionate developers, designers, and strategists work 
                together to create digital solutions that not only meet today's 
                requirements but are built to scale and evolve with your business.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Agile development methodology</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">24/7 post-launch support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Scalable and maintainable code</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Latest technology stack</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card border-border/50">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </Card>
              ))}
            </div>

            {/* Core values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Our Core Values</h3>
              {values.map((value, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
                      <div className="text-accent">
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;