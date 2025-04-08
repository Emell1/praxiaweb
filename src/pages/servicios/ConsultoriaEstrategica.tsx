
import { motion } from "framer-motion";
import { Users, ArrowLeft, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ConsultoriaEstrategica = () => {
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
              <Users className="h-12 w-12 text-secondary-DEFAULT" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Consultoría Estratégica</h1>
              <p className="text-xl mt-2 text-gray-600">
                Análisis profundo y recomendaciones para optimizar los procesos de tu producto.
              </p>
            </div>
          </div>
          
          {/* Imagen destacada */}
          <div className="w-full h-64 md:h-96 bg-gray-100 mb-12 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Consultoría Estratégica" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Columna principal - Descripción */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p>
                  En Praxia, abordamos la consultoría estratégica como un ejercicio de precisión y enfoque. 
                  Analizamos en profundidad tu organización para detectar oportunidades de mejora, identificar 
                  barreras al crecimiento y diseñar planes de acción específicos que generen impacto directo 
                  en tus resultados de negocio.
                </p>
                
                <h2>Metodología</h2>
                <p>
                  Trabajamos en colaboración directa con los equipos clave de tu empresa. 
                  Nuestras intervenciones se basan en datos, con una metodología iterativa que 
                  garantiza ajustes ágiles, aprendizajes continuos y resultados medibles.
                </p>
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
                      "Planes de acción concretos, aplicables y medibles"
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
                  title: "Análisis integral",
                  description: "Estudio detallado de procesos y estructuras actuales para identificar áreas de mejora."
                },
                {
                  title: "Identificación de cuellos de botella",
                  description: "Detección de redundancias, riesgos y puntos de fricción que afectan el rendimiento."
                },
                {
                  title: "Benchmarking",
                  description: "Comparativa con mejores prácticas del sector para establecer estándares de calidad."
                },
                {
                  title: "Hojas de ruta",
                  description: "Desarrollo de planes detallados para la transformación progresiva de procesos."
                },
                {
                  title: "Acompañamiento estratégico",
                  description: "Orientación experta durante la implementación para asegurar resultados óptimos."
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

          {/* CTA final */}
          <div className="bg-secondary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">¿Listo para transformar tus procesos?</h2>
            <p className="mb-6">Solicita una llamada con nuestro equipo para evaluar tus necesidades y diseñar una solución personalizada.</p>
            <Button className="flex items-center gap-2">
              Solicitar consultoría
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

export default ConsultoriaEstrategica;
