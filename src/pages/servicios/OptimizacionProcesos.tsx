
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
                Nuestro servicio de optimización de procesos se enfoca en identificar 
                y eliminar ineficiencias, automatizar tareas repetitivas y mejorar el 
                flujo de trabajo en toda la organización.
              </p>
              
              <h2>Nuestro Enfoque</h2>
              <ul>
                <li>Mapeo detallado de procesos existentes</li>
                <li>Análisis de valor de cada paso del proceso</li>
                <li>Identificación de redundancias y cuellos de botella</li>
                <li>Rediseño de procesos basado en datos</li>
                <li>Implementación de herramientas de automatización</li>
              </ul>
              
              <h2>Tecnologías Aplicadas</h2>
              <p>
                Utilizamos herramientas avanzadas de análisis de datos, automatización 
                y gestión de flujos de trabajo para optimizar cada aspecto de sus operaciones.
              </p>
              
              <h2>Resultados Esperados</h2>
              <ul>
                <li>Reducción de tiempos de ciclo</li>
                <li>Disminución de costos operativos</li>
                <li>Mayor satisfacción del cliente</li>
                <li>Mejora en la calidad del producto o servicio</li>
                <li>Incremento en la productividad del equipo</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OptimizacionProcesos;
