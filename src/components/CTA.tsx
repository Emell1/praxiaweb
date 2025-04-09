
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";
import DemoDialog from "./DemoDialog";

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          alt="Equipo trabajando"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-6">
            ¿Quieres impulsar tu negocio desde sus procesos?
          </h2>
          <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Solicita una conversación con nuestro equipo y descubre cómo mejorar, escalar 
            y automatizar tus operaciones con precisión.
          </p>
          <ContactDialog buttonText="Contactar ahora" />

          <div className="mt-8">
            <p className="body-lg text-gray-600 mb-4 max-w-2xl mx-auto">
              ¿Quieres conocer OPTA en acción?
            </p>
            <DemoDialog />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
