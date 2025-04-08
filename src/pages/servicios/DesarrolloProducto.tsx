
import { motion } from "framer-motion";
import { Target, ArrowLeft, Check, ArrowRight, PieChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const DesarrolloProducto = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header con navegación */}
      <header className="border-b">
        <div className="container mx-auto py-4 px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-secondary-DEFAULT"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Encabezado del servicio */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className="bg-secondary/20 p-4 rounded-full">
              <Target className="h-12 w-12 text-secondary-DEFAULT" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Desarrollo de Producto</h1>
              <p className="text-xl mt-2 text-gray-600">
                Estrategias para evolucionar tu producto según las necesidades del mercado.
              </p>
            </div>
          </div>
          
          {/* Imagen destacada */}
          <div className="w-full h-64 md:h-96 bg-gray-100 mb-12 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
              alt="Desarrollo de Producto" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Columna principal - Descripción */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Nuestro servicio de desarrollo de producto ayuda a las organizaciones 
                  a crear, mejorar y evolucionar sus productos de manera efectiva, 
                  manteniendo el enfoque en las necesidades reales de los usuarios.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Metodología</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Utilizamos metodologías ágiles y de diseño centrado en el usuario 
                  para desarrollar productos que realmente satisfagan necesidades del mercado 
                  y generen valor para el negocio.
                </p>
                
                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Proceso de desarrollo</h3>
                <p className="text-base leading-relaxed mb-8">
                  Nuestro proceso comienza con una profunda investigación de mercado y análisis de 
                  la competencia. Trabajamos estrechamente con tu equipo para definir los objetivos 
                  del producto y crear un mapa de ruta claro. A través de ciclos iterativos de 
                  diseño, desarrollo y pruebas, refinamos constantemente el producto hasta 
                  alcanzar la versión óptima para su lanzamiento.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Enfoques que utilizamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Design Thinking</span>: Metodología enfocada en entender 
                    profundamente las necesidades y motivaciones de los usuarios.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Lean Startup</span>: Validación temprana de hipótesis y 
                    ajustes rápidos basados en feedback real del mercado.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Desarrollo Ágil</span>: Entregas incrementales que permiten 
                    adaptación continua y reducción de riesgos.
                  </li>
                </ul>
              </div>
            </div>

            {/* Columna secundaria - Tarjeta de beneficios */}
            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
                  <ul className="space-y-3">
                    {[
                      "Reducción del riesgo de fracaso del producto",
                      "Aceleración del tiempo de comercialización",
                      "Mayor satisfacción y fidelización de usuarios",
                      "Aumento de ingresos y cuota de mercado",
                      "Capacidad de adaptación a cambios en el mercado"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Nuestros Servicios */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="h-6 w-6 text-secondary-DEFAULT" />
              <h2 className="text-2xl font-bold">Nuestros Servicios</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Investigación de mercado y usuarios",
                  description: "Análisis detallado de mercado, segmentos y necesidades para validar hipótesis de producto."
                },
                {
                  title: "Definición de estrategia",
                  description: "Creación de planes de desarrollo alineados con los objetivos de negocio y demandas del mercado."
                },
                {
                  title: "Diseño y prototipado",
                  description: "Conceptualización visual y funcional de soluciones, con pruebas de usabilidad iterativas."
                },
                {
                  title: "Desarrollo y pruebas",
                  description: "Implementación técnica con metodologías ágiles y validación continua con usuarios reales."
                },
                {
                  title: "Lanzamiento y optimización",
                  description: "Acompañamiento en la salida al mercado y mejora continua basada en métricas y feedback."
                },
                {
                  title: "Escalabilidad del producto",
                  description: "Estrategias para hacer crecer el producto de manera sostenible y conquistar nuevos mercados."
                }
              ].map((service, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA final */}
          <div className="bg-secondary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">¿Quieres evolucionar tu producto?</h2>
            <p className="mb-6">Solicita una evaluación inicial para identificar oportunidades de mejora y crecimiento.</p>
            <Button className="flex items-center gap-2">
              Solicitar asesoría
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto py-8 px-4">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link to="/" className="text-sm text-primary hover:underline">Inicio</Link>
              <Link to="/servicios/consultoria-estrategica" className="text-sm text-primary hover:underline">Consultoría</Link>
              <Link to="/servicios/optimizacion-procesos" className="text-sm text-primary hover:underline">Procesos</Link>
              <Link to="/servicios/desarrollo-producto" className="text-sm text-primary hover:underline">Producto</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesarrolloProducto;
