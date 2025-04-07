
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Developments } from "@/components/Developments";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Hero />
      <Services />
      <Developments />
      <CTA />
    </div>
  );
};

export default Index;
