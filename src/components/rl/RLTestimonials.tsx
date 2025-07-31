import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const RLTestimonials = () => {
  const testimonials = [
    {
      name: "Pimchanok Tangtrakool",
      role: "Software Engineer at PTT Digital",
      company: "PTT",
      content: "The CodeCamp with Generative AI program completely transformed my career. The hands-on approach and expert mentorship helped me transition from a non-tech background to landing my dream job at PTT Digital.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b811e8df?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Somchai Wongsuwan",
      role: "IT Director",
      company: "SCG",
      content: "Relearn Solution's custom training program for our team was exceptional. Their ability to tailor content to our specific needs and deliver measurable results made them our preferred training partner.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Niracha Phongphanlert",
      role: "Data Scientist at Bank of Thailand",
      company: "Bank of Thailand",
      content: "The DataCamp program gave me the skills I needed to excel in data science. The AI-enhanced curriculum and real-world projects prepared me perfectly for my role at the central bank.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our graduates and corporate partners who have transformed 
            their careers and organizations through our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Statistics */}
        <div className="mt-20">
          <Card className="p-8 bg-gradient-hero text-white text-center">
            <h3 className="text-2xl font-semibold mb-6">
              Join Thousands of Successful Graduates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">92%</div>
                <div className="text-white/90 text-sm">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">฿45K</div>
                <div className="text-white/90 text-sm">Average Salary Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3 months</div>
                <div className="text-white/90 text-sm">Average Time to Employment</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-white/90 text-sm">Student Satisfaction</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RLTestimonials;