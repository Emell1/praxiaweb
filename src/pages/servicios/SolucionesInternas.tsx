import { motion } from "framer-motion";
import { Code, Check, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import TechStack from "./components/TechStack";
import ServiceCTA from "./components/ServiceCTA";
import { Link } from "react-router-dom";

const techStacks = [
  { name: "Frontend", tech: ["React", "TypeScript", "TailwindCSS"] },
  { name: "Backend", tech: ["Node.js", "Python", "PostgreSQL"] },
  { name: "Cloud", tech: ["AWS", "Google Cloud", "Azure"] },
  { name: "DevOps", tech: ["Docker", "CI/CD", "Kubernetes"] }
];

const SolucionesInternas = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Soluciones Internas | Praxia"
        description="Diseño y desarrollo de herramientas digitales internas personalizadas para optimizar la gestión y operación de tu empresa."
        keywords="soluciones internas, herramientas digitales, software personalizado, sistemas internos, automatización"
      />
      
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ServiceHeader 
            Icon={Code}
            title="Diseño y Desarrollo de Soluciones Internas"
            description="Herramientas digitales personalizadas para potenciar tu operación"
          />
          
          <div className="w-full h-64 md:h-96 bg-gray-100 mb-12 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae"
              alt="Soluciones Internas" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Desarrollamos herramientas digitales internas que permiten organizar la información, 
                  facilitar la ejecución de tareas clave y asegurar que el conocimiento se quede en la empresa. 
                  Nuestras soluciones se adaptan a tus necesidades específicas y evolucionan con tu negocio.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Stack Tecnológico</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Utilizamos tecnologías modernas y probadas que garantizan escalabilidad, 
                  mantenibilidad y una experiencia de usuario óptima.
                </p>

                <TechStack stacks={techStacks} />

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Proceso de desarrollo</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Análisis y diseño</span>: Entendemos tus necesidades 
                    y diseñamos la solución ideal.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Desarrollo iterativo</span>: Construimos la solución 
                    por fases, permitiendo ajustes y mejoras continuas.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Implementación y soporte</span>: Aseguramos una 
                    transición suave y brindamos soporte continuo.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Características</h3>
                  <ul className="space-y-3">
                    {[
                      "Interfaz intuitiva y personalizable",
                      "Integración con sistemas existentes",
                      "Arquitectura escalable y modular",
                      "Seguridad y control de accesos",
                      "Documentación completa",
                      "Soporte técnico especializado"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Laptop className="h-6 w-6 text-secondary-DEFAULT" />
              <h2 className="text-2xl font-bold">Tipos de Soluciones</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Gestión de Procesos",
                  description: "Automatización y seguimiento de flujos de trabajo específicos."
                },
                {
                  title: "Business Intelligence",
                  description: "Dashboards y reportes para análisis de datos y toma de decisiones."
                },
                {
                  title: "Gestión Documental",
                  description: "Organización y control de documentos críticos del negocio."
                },
                {
                  title: "Intranets Corporativas",
                  description: "Portales internos para comunicación y gestión del conocimiento."
                },
                {
                  title: "APIs y Microservicios",
                  description: "Integración entre sistemas y servicios empresariales."
                },
                {
                  title: "Apps Móviles Internas",
                  description: "Aplicaciones móviles para equipos en campo o trabajo remoto."
                }
              ].map((solution, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <ServiceCTA 
            title="¿Necesitas una solución a medida?"
            description="Cuéntanos tu proyecto y diseñaremos la herramienta perfecta para tus necesidades."
            buttonText="Solicitar consulta"
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

export default SolucionesInternas;
