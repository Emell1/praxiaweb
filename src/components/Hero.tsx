import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";

export const Hero = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Consultora trabajando"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6">
            Praxia | Consultoría Estratégica
          </span>
          <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
            Transformamos procesos en{" "}
            <span className="text-secondary-DEFAULT">resultados medibles</span>
          </h1>
          <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Optimizamos los procesos de tu producto para maximizar su eficiencia
            y potenciar su crecimiento en el mercado.
          </p>
          <ContactDialog />
        </motion.div>
      </div>
    </section>
  );
};