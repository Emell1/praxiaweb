
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";

export const Hero = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Equipo de trabajo en entorno laboral"
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
            Praxia | Optimización Estratégica de Procesos
          </span>
          <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
            Transformamos procesos en{" "}
            <span className="text-secondary-DEFAULT">ventajas competitivas</span>
          </h1>
          <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Detectamos ineficiencias, rediseñamos flujos y potenciamos resultados 
            para escalar tu negocio con precisión.
          </p>
          <ContactDialog />
        </motion.div>
      </div>
    </section>
  );
};
