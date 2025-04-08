
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contacto | Praxia"
        description="Ponte en contacto con nuestro equipo de expertos en consultoría estratégica, optimización de procesos y desarrollo de productos."
        keywords="contacto praxia, consultoría estratégica, formulario de contacto, solicitud de servicios"
        canonical="https://praxia.site/contacto"
      />
      <NavBar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contacto</h1>
        <p className="text-lg mb-12">Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          
          <div>
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Información de contacto</h2>
              <ul className="space-y-4">
                <li>
                  <span className="font-medium">Email:</span>
                  <p className="mt-1">info@praxia.site</p>
                </li>
                <li>
                  <span className="font-medium">Teléfono:</span>
                  <p className="mt-1">+34 912 345 678</p>
                </li>
                <li>
                  <span className="font-medium">Horario:</span>
                  <p className="mt-1">Lunes a Viernes: 9:00 - 18:00</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto py-8 px-4">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link to="/" className="text-sm text-primary hover:underline">Inicio</Link>
              <Link to="/servicios/consultoria-estrategica" className="text-sm text-primary hover:underline">Consultoría</Link>
              <Link to="/servicios/optimizacion-procesos" className="text-sm text-primary hover:underline">Procesos</Link>
              <Link to="/servicios/desarrollo-producto" className="text-sm text-primary hover:underline">Producto</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
