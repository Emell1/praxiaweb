
import { motion } from "framer-motion";

const Developments = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Tecnología aplicada a la mejora continua</h2>
          <p className="body-base text-foreground/70 max-w-2xl mx-auto">
            En Praxia, cada mejora estratégica se traduce en soluciones prácticas. Nuestros 
            desarrollos combinan eficiencia, personalización y facilidad de uso para garantizar 
            que el cambio se integre y se mantenga.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-accent/30 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="heading-md mb-4">OPTA – Optimizador de Procesos, Tareas y Aprendizaje</h3>
              <p className="text-foreground/80 mb-6">
                OPTA es nuestra herramienta propia que permite mapear, organizar y evolucionar 
                tus procesos desde una interfaz conversacional simple e intuitiva. Crea flujos 
                personalizados, integra documentos clave y accede a filtros inteligentes que 
                facilitan la toma de decisiones.
              </p>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden aspect-video">
              <iframe 
                src="https://ejemplo-opta-landing.com" 
                title="OPTA Landing Page" 
                className="w-full h-full border-0"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Developments;
