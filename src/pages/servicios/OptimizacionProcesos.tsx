
import { motion } from "framer-motion";
import { Workflow, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OptimizacionProcesos = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-16 px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-secondary-DEFAULT mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Workflow className="h-12 w-12 text-secondary-DEFAULT" />
            <h1 className="heading-lg">Optimización de Procesos</h1>
          </div>
          
          <div className="max-w-4xl">
            <p className="text-xl mb-8 text-gray-600">
              Mejoramos la eficiencia operativa y reducimos costos innecesarios.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Nuestro servicio de optimización de procesos transforma la manera en que tu empresa opera. 
                Detectamos ineficiencias, simplificamos flujos de trabajo, automatizamos tareas repetitivas 
                y mejoramos la experiencia de tus equipos y clientes.
              </p>
              
              <h2>Nuestro Enfoque</h2>
              <ul>
                <li>Mapeo detallado de procesos actuales</li>
                <li>Evaluación de valor y criticidad por etapa</li>
                <li>Identificación de cuellos de botella y redundancias</li>
                <li>Rediseño de procesos con enfoque en eficiencia</li>
                <li>Incorporación de automatizaciones y mejoras tecnológicas</li>
              </ul>
              
              <h2>Tecnologías Aplicadas</h2>
              <p>
                Aplicamos herramientas de análisis de datos, automatización y sistemas de gestión 
                de tareas para lograr resultados ágiles, sostenibles y medibles.
              </p>
              
              <h2>Resultados Esperados</h2>
              <ul>
                <li>Reducción de tiempos operativos</li>
                <li>Disminución de costos estructurales</li>
                <li>Mejora en la calidad de entregables</li>
                <li>Aumento de productividad y satisfacción interna</li>
                <li>Mayor capacidad de adaptación organizacional</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OptimizacionProcesos;
