
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
        title="Praxia - Optimización estratégica de procesos"
        description="Servicios especializados en consultoría estratégica, optimización de procesos y desarrollo de productos para transformar tu negocio."
        keywords="praxia, consultoría estratégica, optimización de procesos, desarrollo de productos, transformación digital, innovación empresarial"
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
