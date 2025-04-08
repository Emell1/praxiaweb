
import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Developments } from "../components/Developments";
import BlogHighlight from "../components/BlogHighlight";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Developments />
      <BlogHighlight />
      <CTA />
    </main>
  );
}
