
import React from 'react';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contacto | Praxia"
        description="Contáctanos para resolver tus dudas o solicitar información sobre nuestros servicios de consultoría estratégica y optimización de procesos."
        keywords="contacto praxia, consultoría estratégica, desarrollo de productos, optimización procesos"
      />
      <NavBar />
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-gray-600 mb-12">
            Estamos listos para escucharte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Información de contacto</h3>
                <p className="text-gray-600 mb-4">
                  Puedes contactarnos directamente a través de los siguientes canales:
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Email:</p>
                    <a href="mailto:info@praxia.com" className="text-primary hover:underline">
                      info@praxia.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Teléfono:</p>
                    <a href="tel:+34912345678" className="text-primary hover:underline">
                      +34 91 234 56 78
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Dirección:</p>
                    <address className="not-italic text-gray-600">
                      Calle Gran Vía, 12<br />
                      28013 Madrid, España
                    </address>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Horario de atención</h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábado y Domingo: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link to="/" className="text-sm text-primary hover:underline">Inicio</Link>
              <Link to="/blog" className="text-sm text-primary hover:underline">Blog</Link>
              <Link to="/servicios/consultoria-estrategica" className="text-sm text-primary hover:underline">Servicios</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
