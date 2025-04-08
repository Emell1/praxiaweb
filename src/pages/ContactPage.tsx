
import React from 'react';
import NavBar from '../components/NavBar';
import { ContactForm } from '../components/ContactForm';
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <section className="section-padding py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-lg mb-6 text-center">Contacta con nosotros</h1>
              <p className="body-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Estamos aquí para ayudarte a potenciar tu negocio. Cuéntanos tu situación 
                y nuestro equipo te responderá lo antes posible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card p-8 rounded-lg shadow-md"
              >
                <h2 className="heading-sm mb-6">Envíanos un mensaje</h2>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-card p-8 rounded-lg shadow-md mb-8">
                  <h2 className="heading-sm mb-6">Información de contacto</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>info@praxia.site</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+34 912 345 678</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>C/ Gran Vía, 28013 Madrid, España</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h2 className="heading-sm mb-6">Síguenos</h2>
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com/company/praxia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={20} />
                    </a>
                    <a 
                      href="mailto:info@praxia.site" 
                      className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
                      aria-label="Correo electrónico"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
