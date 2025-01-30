import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
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
            ¿Listo para transformar tu producto?
          </h2>
          <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre cómo podemos ayudarte a optimizar tus procesos y alcanzar
            tus objetivos de negocio.
          </p>
          <Button
            size="lg"
            className="bg-secondary-DEFAULT hover:bg-secondary-DEFAULT/90 text-white rounded-full"
          >
            Contactar ahora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};