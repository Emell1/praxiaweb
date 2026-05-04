import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import ContactDialog from "./ContactDialog";

const CTA = () => {
  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            ¿Tiene sentido hablar?
          </h2>
          <p className="body-lg text-white/60 mb-8 max-w-xl mx-auto">
            Si estás pensando en mejorar cómo opera tu equipo o tu organización educativa, podemos ver juntos si hay algo concreto por donde empezar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactDialog buttonText="Escribime" />
            <a
              href="https://www.linkedin.com/in/enzomellone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white/80 hover:bg-white/10 transition text-sm font-medium"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/enzomellone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=34685791609"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href="mailto:info@praxia.site"
          className="text-white/40 hover:text-white transition-colors"
          aria-label="Correo electrónico"
        >
          <Mail size={20} />
        </a>
      </div>
    </section>
  );
};

export default CTA;
