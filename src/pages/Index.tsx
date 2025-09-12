
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Developments from '../components/Developments';
import CTA from '../components/CTA';
// import BlogHighlight from '../components/BlogHighlight';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Praxia — Arquitectura operativa y optimización de procesos"
        description="Consultoría en arquitectura operativa: protegemos el núcleo de tu negocio, estandarizamos sus interfaces y optimizamos procesos para escalar con precisión."
        keywords="praxia, arquitectura operativa, consultoría estratégica, optimización de procesos, mejora continua, handoff, criterios de listo"
      />
      <NavBar />
      <Hero />
      <Services />
      <Developments />
      {/* <BlogHighlight /> */}
      <CTA />
    </div>
  );
};

export default Index;
