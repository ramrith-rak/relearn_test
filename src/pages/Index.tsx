import RLNavigation from "@/components/rl/RLNavigation";
import RLHero from "@/components/rl/RLHero";
import RLTrustedBy from "@/components/rl/RLTrustedBy";
import RLAbout from "@/components/rl/RLAbout";
import RLServices from "@/components/rl/RLServices";
import RLPrograms from "@/components/rl/RLPrograms";
import RLTestimonials from "@/components/rl/RLTestimonials";
import RLContact from "@/components/rl/RLContact";
import RLFooter from "@/components/rl/RLFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <RLNavigation />
      <RLHero />
      <RLTrustedBy />
      <RLAbout />
      <RLServices />
      <RLPrograms />
      <RLTestimonials />
      <RLContact />
      <RLFooter />
    </div>
  );
};

export default Index;
