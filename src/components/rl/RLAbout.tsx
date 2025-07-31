import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const RLAbout = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Lifelong Learning",
      description: "We believe learning never stops. Our programs are designed to evolve with industry trends and individual career paths."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Cutting-edge curriculum that incorporates the latest technologies, including AI and emerging digital solutions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Real-World Impact",
      description: "Practical, hands-on learning experiences that directly translate to workplace success and career advancement."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Accessibility",
      description: "Quality education should be accessible to all. We offer flexible learning paths for diverse backgrounds and schedules."
    }
  ];

  const milestones = [
    { year: "2018", event: "Founded Relearn Solution Co., Ltd." },
    { year: "2019", event: "Launched first CodeCamp program" },
    { year: "2020", event: "Expanded to corporate training solutions" },
    { year: "2021", event: "Introduced AI-enhanced learning paths" },
    { year: "2022", event: "Reached 5,000+ graduates milestone" },
    { year: "2023", event: "Partnership with major Thai corporations" },
    { year: "2024", event: "International expansion and recognition" }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                About <span className="text-primary">Relearn Solution</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Led by visionary CEO Krissada Chalermsook, Relearn Solution Co., Ltd. has been 
                at the forefront of Thailand's educational technology revolution since 2018.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is to bridge the gap between traditional education and the 
                rapidly evolving demands of the digital economy. We specialize in 
                skill-based learning that produces job-ready professionals and empowers 
                organizations to thrive in the digital age.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Industry-aligned curriculum development</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Certified training professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">AI-enhanced learning experiences</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Comprehensive post-graduation support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.discordapp.com/attachments/1282748272712355861/1400417323806097499/O2O-Code-Camp-2-1024x576.png?ex=688c8fc4&is=688b3e44&hm=bb23723bd29380710d5e1bde290cceef71e02033f655b933bfbef076bc608130&"
              alt="Krissada C., CEO of Relearn Solution"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
              <h4 className="font-semibold text-foreground">Krissada Chalermsook</h4>
              <p className="text-sm text-muted-foreground">CEO & Founder</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every program we design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-background border-border/50 hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <div className="text-primary">
                    {value.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Our Journey</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform education and empower learners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6 bg-background border-border/50 text-center hover:shadow-soft transition-shadow">
                <div className="text-2xl font-bold text-primary mb-2">
                  {milestone.year}
                </div>
                <div className="text-sm text-muted-foreground">
                  {milestone.event}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RLAbout;