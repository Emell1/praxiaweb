
import { motion } from "framer-motion";

export const Developments = () => {
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
          <h2 className="heading-lg mb-4">Nuestros desarrollos</h2>
          <p className="body-base text-gray-600 max-w-2xl mx-auto">
            En praxia convertimos cada buena práctica en algo tangible y fácil de implementar. 
            De esta manera garantizamos que las mejoras llegan para quedarse.
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
              <h3 className="heading-md mb-4">OPTA</h3>
              <p className="text-gray-700 mb-6">
                Este espacio está reservado para mostrar información sobre el desarrollo OPTA.
                Aquí se incluirá un video y texto descriptivo.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-gray-500">Video de OPTA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
