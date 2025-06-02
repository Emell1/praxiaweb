
import { motion } from 'framer-motion'
import Btn from "./Btn";

const Developments = () => {
  return (
    <section className='section-padding bg-background'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='heading-lg mb-4'>
            Tecnología aplicada a la mejora continua
          </h2>
          <p className='body-base text-foreground/70 max-w-2xl mx-auto'>
            En Praxia, cada mejora estratégica se traduce en soluciones
            prácticas. Nuestros desarrollos combinan eficiencia, personalización
            y facilidad de uso para garantizar que el cambio se integre y se
            mantenga.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='bg-accent/30 rounded-2xl p-8 md:p-12 relative overflow-hidden'
        >
          <div className='flex flex-col xl:flex-row gap-8 items-center'>
            <div className='xl:w-1/2'>
              <h3 className='heading-md mb-4'>
                OPTA – Optimizador de Procesos, Tareas y Aprendizaje
              </h3>
              <p className='text-foreground/80 mb-6'>
                OPTA es nuestra herramienta propia que permite mapear, organizar
                y evolucionar tus procesos desde una interfaz conversacional
                simple e intuitiva. Crea flujos personalizados, integra
                documentos clave y accede a filtros inteligentes que facilitan
                la toma de decisiones.
              </p>

              <Btn 
                buttonText="Conoce Opta"
                href="https://www.opta.space/"
                target="_blank"
              />
            </div>
            <div className='min-h-[500px] lg:min-h-[350px] w-full xl:w-1/2 rounded-lg overflow-hidden aspect-video'>
              <video
                className='w-full h-full object-cover rounded-lg'
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="OPTA platform demonstration video"
              >
                <source src="https://www.opta.space/hero.mp4" type="video/mp4" />
                <p className="text-center text-foreground/60 p-4">
                  Tu navegador no soporta la reproducción de video. 
                  <a 
                    href="https://www.opta.space/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary-DEFAULT hover:underline ml-1"
                  >
                    Visita OPTA directamente
                  </a>
                </p>
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Developments
