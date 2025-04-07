
import { motion } from "framer-motion";
import { Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DesarrolloProducto = () => {
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
            <Target className="h-12 w-12 text-secondary-DEFAULT" />
            <h1 className="heading-lg">Desarrollo de Producto</h1>
          </div>
          
          <div className="max-w-4xl">
            <p className="text-xl mb-8 text-gray-600">
              Estrategias para evolucionar tu producto según las necesidades del mercado.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Nuestro servicio de desarrollo de producto ayuda a las organizaciones 
                a crear, mejorar y evolucionar sus productos de manera efectiva, 
                manteniendo el enfoque en las necesidades reales de los usuarios.
              </p>
              
              <h2>Nuestros Servicios</h2>
              <ul>
                <li>Investigación de mercado y de usuarios</li>
                <li>Definición de estrategia de producto</li>
                <li>Diseño y prototipado</li>
                <li>Desarrollo y pruebas</li>
                <li>Lanzamiento y optimización continua</li>
              </ul>
              
              <h2>Metodología</h2>
              <p>
                Utilizamos metodologías ágiles y de diseño centrado en el usuario 
                para desarrollar productos que realmente satisfagan necesidades del mercado 
                y generen valor para el negocio.
              </p>
              
              <h2>Beneficios</h2>
              <ul>
                <li>Reducción del riesgo de fracaso del producto</li>
                <li>Aceleración del tiempo de comercialización</li>
                <li>Mayor satisfacción y retención de usuarios</li>
                <li>Aumento de ingresos y participación de mercado</li>
                <li>Capacidad de adaptación a cambios en el mercado</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesarrolloProducto;
