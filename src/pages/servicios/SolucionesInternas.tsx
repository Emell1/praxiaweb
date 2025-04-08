
import { motion } from "framer-motion";
import { Code, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SolucionesInternas = () => {
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
            <Code className="h-12 w-12 text-secondary-DEFAULT" />
            <h1 className="heading-lg">Diseño y Desarrollo de Soluciones Internas</h1>
          </div>
          
          <div className="max-w-4xl">
            <p className="text-xl mb-8 text-gray-600">
              Herramientas a medida para potenciar la eficiencia, el orden y la toma de decisiones.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Cuando los procesos requieren soluciones específicas, nosotros las diseñamos. 
                Creamos herramientas digitales internas que permiten organizar la información, 
                facilitar la ejecución de tareas clave y asegurar que el conocimiento se quede en la empresa.
              </p>
              
              <h2>Nuestros Servicios</h2>
              <ul>
                <li>Relevamiento de necesidades internas y flujos críticos</li>
                <li>Diseño de sistemas personalizados para gestión y análisis</li>
                <li>Desarrollo de interfaces conversacionales o interactivas</li>
                <li>Integración con herramientas existentes y bases de datos</li>
                <li>Capacitación y acompañamiento post implementación</li>
              </ul>
              
              <h2>Enfoque Técnico</h2>
              <p>
                Nuestras soluciones se construyen sobre tecnologías flexibles y escalables 
                (PostgreSQL, Django, React). Esto nos permite adaptar rápidamente el producto 
                a tu realidad operativa, integrando funcionalidades únicas que respondan a tus desafíos.
              </p>
              
              <h2>Beneficios</h2>
              <ul>
                <li>Mayor trazabilidad y control de procesos internos</li>
                <li>Acceso rápido a la información clave</li>
                <li>Automatización de tareas rutinarias</li>
                <li>Retención del conocimiento organizacional</li>
                <li>Alineación tecnológica con las metas estratégicas</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolucionesInternas;
