
import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Developments } from "../components/Developments";
import BlogHighlight from "../components/BlogHighlight";
import NavBar from "../components/NavBar";

export default function Index() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Developments />
        <BlogHighlight />
        <CTA />
      </main>
    </>
  );
}
