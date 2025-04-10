
import { motion } from "framer-motion";
import { Workflow, ArrowRight, Check, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";

const OptimizacionProcesos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Optimización de Procesos | Praxia"
        description="Servicios de optimización de procesos empresariales para mejorar la eficiencia operativa y reducir costes innecesarios."
        keywords="optimización de procesos, eficiencia operativa, mejora continua, automatización, reducción de costes, flujos de trabajo"
      />
      
      {/* Navbar compartido */}
      <NavBar />

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
              <Workflow className="h-12 w-12 text-secondary-DEFAULT" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Optimización de Procesos</h1>
              <p className="text-xl mt-2 text-gray-600">
                Mejoramos la eficiencia operativa y reducimos costes innecesarios.
              </p>
            </div>
          </div>
          
          {/* Imagen destacada */}
          <div className="w-full h-64 md:h-96 bg-gray-100 mb-12 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
              alt="Optimización de Procesos" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Columna principal - Descripción */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Nuestro servicio de optimización de procesos transforma la manera en que tu empresa opera. 
                  Detectamos ineficiencias, simplificamos flujos de trabajo, automatizamos tareas repetitivas 
                  y mejoramos la experiencia de tus equipos y clientes.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Tecnologías Aplicadas</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Aplicamos herramientas de análisis de datos, automatización y sistemas de gestión 
                  de tareas para lograr resultados ágiles, sostenibles y medibles.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Optimización integral</h3>
                <p className="text-base leading-relaxed mb-8">
                  Nuestra visión holística nos permite identificar la interconexión entre diferentes 
                  procesos dentro de tu organización. No nos limitamos a optimizar elementos aislados, 
                  sino que consideramos el ecosistema completo para asegurar que los cambios generan 
                  impactos positivos en cascada a través de toda la empresa.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Áreas de impacto</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Operaciones internas</span>: Mejoramos la eficiencia en 
                    tareas cotidianas, reduciendo tiempos de ejecución y eliminando redundancias.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Experiencia del cliente</span>: Optimizamos los puntos 
                    de contacto con clientes para crear interacciones más fluidas y satisfactorias.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Gestión de recursos</span>: Implementamos sistemas 
                    para el uso óptimo de recursos humanos, tecnológicos y materiales.
                  </li>
                </ul>
              </div>
            </div>

            {/* Columna secundaria - Tarjeta de resultados */}
            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Resultados Esperados</h3>
                  <ul className="space-y-3">
                    {[
                      "Reducción de tiempos operativos",
                      "Disminución de costes estructurales",
                      "Mejora en la calidad de entregables",
                      "Aumento de productividad y satisfacción interna",
                      "Mayor capacidad de adaptación organizativa"
                    ].map((result, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enfoque detallado con gráfico */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <BarChart className="h-6 w-6 text-secondary-DEFAULT" />
              <h2 className="text-2xl font-bold">Nuestro Enfoque</h2>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  step: 1,
                  title: "Mapeo",
                  description: "Detallado de procesos actuales"
                },
                {
                  step: 2,
                  title: "Evaluación",
                  description: "De valor y criticidad por etapa"
                },
                {
                  step: 3,
                  title: "Identificación",
                  description: "De cuellos de botella y redundancias"
                },
                {
                  step: 4,
                  title: "Rediseño",
                  description: "De procesos con enfoque en eficiencia"
                },
                {
                  step: 5,
                  title: "Implementación",
                  description: "De automatizaciones y mejoras tecnológicas"
                }
              ].map((step, i) => (
                <Card key={i} className="relative">
                  <div className="absolute top-0 left-0 bg-primary text-white h-8 w-8 rounded-tl-md rounded-br-md flex items-center justify-center font-medium">
                    {step.step}
                  </div>
                  <CardContent className="pt-10">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA final */}
          <div className="bg-secondary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">¿Buscas optimizar tus operaciones?</h2>
            <p className="mb-6">Contacta con nosotros para una evaluación inicial de tus procesos actuales y descubre oportunidades de mejora.</p>
            <Link to="/contacto">
              <Button className="flex items-center gap-2">
                Solicitar evaluación
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
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

export default OptimizacionProcesos;
