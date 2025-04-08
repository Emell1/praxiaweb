
import { motion } from "framer-motion";
import { Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ConsultoriaEstrategica = () => {
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
            <Users className="h-12 w-12 text-secondary-DEFAULT" />
            <h1 className="heading-lg">Consultoría Estratégica</h1>
          </div>
          
          <div className="max-w-4xl">
            <p className="text-xl mb-8 text-gray-600">
              Análisis profundo y recomendaciones para optimizar los procesos de tu producto.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p>
                En Praxia, abordamos la consultoría estratégica como un ejercicio de precisión y enfoque. 
                Analizamos en profundidad tu organización para detectar oportunidades de mejora, identificar 
                barreras al crecimiento y diseñar planes de acción específicos que generen impacto directo 
                en tus resultados de negocio.
              </p>
              
              <h2>Servicios de Consultoría Estratégica</h2>
              <ul>
                <li>Análisis integral de procesos y estructuras actuales</li>
                <li>Identificación de cuellos de botella, redundancias y riesgos</li>
                <li>Benchmarking con mejores prácticas del sector</li>
                <li>Desarrollo de hojas de ruta para la transformación</li>
                <li>Acompañamiento estratégico en la implementación</li>
              </ul>
              
              <h2>Metodología</h2>
              <p>
                Trabajamos en colaboración directa con los equipos clave de tu empresa. 
                Nuestras intervenciones se basan en datos, con una metodología iterativa que 
                garantiza ajustes ágiles, aprendizajes continuos y resultados medibles.
              </p>
              
              <h2>Beneficios</h2>
              <ul>
                <li>Claridad estratégica y alineación organizacional</li>
                <li>Identificación de oportunidades de innovación</li>
                <li>Optimización del uso de recursos y tiempos</li>
                <li>Ventaja competitiva sostenible</li>
                <li>Planes de acción concretos, aplicables y medibles</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultoriaEstrategica;
