
import { motion } from "framer-motion";
import ContactDialog from "./ContactDialog";
import AnimatedLogo from "./AnimatedLogo";

const Hero = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Equipo de trabajo en entorno laboral"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-sm font-medium mb-6">
            <AnimatedLogo /> <span className="mx-1 text-black">|</span> <span className="text-black">Optimización Estratégica de Procesos</span>
          </span>
          <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
            Transformamos procesos en{" "}
            <span className="text-secondary-DEFAULT">ventajas competitivas</span>
          </h1>
          <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Te ayudamos a ordenar cómo se vende, cómo se atiende y cómo se trabaja internamente para que tu equipo rinda mejor sin sumar burocracia inútil.
          </p>
          <ContactDialog buttonText="Solicita una consulta" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
