import { motion } from "framer-motion";
import { Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";

const ConsultoriaEstrategica = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Consultoría Estratégica | Arquitectura operativa por Praxia"
        description="Definimos el núcleo operativo, mapeamos puertos (interfaces) y priorizamos mejoras con evidencia para alinear estrategia y operación."
        keywords="consultoría estratégica, análisis de negocio, diagnóstico empresarial, optimización organizacional, plan estratégico"
      />
      
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ServiceHeader 
            Icon={Users}
            title="Consultoría Estratégica"
            description="Arquitectura operativa para alinear estrategia y ejecución"
          />
          
          <div className="w-full h-64 md:h-96 bg-gray-100 mb-12 rounded-lg overflow-hidden">
            <img 
              src="/consultoria-estrategica.png"
              alt="Consultoría Estratégica" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Columna principal - Descripción */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Abordamos la estrategia desde la operación real. Definimos el núcleo de tu servicio (reglas, criterios de 'listo') y mapeamos los puertos que conectan con clientes, proveedores y sistemas. Priorizamos mejoras con evidencia y entregamos un plan accionable.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Metodología</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Usamos la arquitectura hexagonal como metáfora práctica: núcleo estable, puertos claros, adaptadores evolutivos. Trabajamos con datos, de forma iterativa y colaborativa con tus equipos.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Enfoque colaborativo</h3>
                <p className="text-base leading-relaxed mb-8">
                  Co‑diseñamos puertos y adaptadores con tus equipos para que el cambio se integre en la operación diaria.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Proceso de consultoría</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Diagnóstico del núcleo y puertos</span>: Evaluación del núcleo operativo y mapeo de interfaces clave.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Análisis estratégico y de mercado</span>: Estudio de mejores prácticas y estándares de interfaz.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Hoja de ruta de adaptadores</span>: Planes con metas, responsables y plazos específicos.
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
                      "Claridad estratégica y alineación organizacional",
                      "Identificación de oportunidades de innovación",
                      "Optimización del uso de recursos y tiempos",
                      "Ventaja competitiva sostenible",
                      "Planes de acción concretos, aplicables y medibles",
                      "Interfaces claras entre equipos (menos handoffs fallidos)"
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

          {/* Servicios en detalle */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Servicios de Consultoría Estratégica</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Análisis integral del núcleo y puertos",
                  description: "Evaluación profunda del núcleo operativo y mapeo de interfaces críticas."
                },
                {
                  title: "Identificación de cuellos de botella en puertos críticos",
                  description: "Detección de fricciones en interfaces clave que afectan el rendimiento."
                },
                {
                  title: "Benchmarking de prácticas de interfaz",
                  description: "Comparativa de criterios de 'listo' y estándares de handoff del sector."
                },
                {
                  title: "Hojas de ruta de adaptadores y gobernanza",
                  description: "Planes para evolucionar adaptadores manteniendo la estabilidad del núcleo."
                },
                {
                  title: "Acompañamiento estratégico durante la adopción",
                  description: "Orientación experta durante la implementación de la nueva arquitectura operativa."
                }
              ].map((service, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <ServiceCTA 
            title="¿Listo para clarificar tu núcleo y estandarizar tus puertos?"
            description="Solicita una llamada con nuestro equipo para evaluar tus necesidades y diseñar una solución personalizada."
            buttonText="Solicitar consultoría"
          />
        </motion.div>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto py-8 px-4 text-center">
          <Separator className="mb-8" />
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ConsultoriaEstrategica;
