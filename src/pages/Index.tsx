import NavBar from '../components/NavBar';
import  Hero  from '../components/Hero'; // Update this line
import Services from '../components/Services';
import Developments from '../components/Developments';
import CTA from '../components/CTA';
import BlogHighlight from '../components/BlogHighlight';
import ContactDialog from '../components/ContactDialog';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Praxia - Consultoría Estratégica y Desarrollo de Productos"
        description="Servicios especializados en consultoría estratégica, optimización de procesos y desarrollo de productos para transformar tu negocio."
        keywords="praxia, consultoría estratégica, optimización de procesos, desarrollo de productos, transformación digital, innovación empresarial"
      />
      <NavBar />
      <Hero />  {/* This should work now */}
      <Services />
      <Developments />
      <BlogHighlight />
      <CTA />
      <ContactDialog />
    </div>
  );
};

export default Index;