import { motion } from "framer-motion";
import ContactDialog from "./ContactDialog";
import AnimatedLogo from "./AnimatedLogo";
import { Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
            <AnimatedLogo /> <span className="mx-1 text-white/40">|</span> <span className="text-white/80">Consultoría de operaciones para educación</span>
          </span>
          <h1 className="heading-xl mb-6 max-w-4xl mx-auto text-white">
            Equipos que trabajan mejor.{" "}
            <span className="text-secondary-DEFAULT">Organizaciones que crecen.</span>
          </h1>
          <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Trabajo con universidades y empresas de educación para ordenar cómo operan: los procesos que frenan el crecimiento, los equipos que no rinden lo que podrían, y la distancia entre lo que se planifica y lo que pasa en el día a día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactDialog buttonText="Hablemos" />
            <a
              href="https://www.linkedin.com/in/enzomellone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white/80 hover:bg-white/10 transition text-sm font-medium"
            >
              <Linkedin size={16} />
              Ver perfil en LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
