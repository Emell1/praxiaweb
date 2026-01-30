import { motion } from "framer-motion";
import { Headset, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import ServiceHeroImage from "./components/ServiceHeroImage";

const Soporte = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Atención y Soporte | Praxia"
        description="Ordenamos tus flujos de atención para que los clientes reciban respuestas más claras y rápidas, sin quemar a tu equipo ni agrandar la estructura."
        keywords="soporte, atención al cliente, base de conocimiento, autoservicio, enrutamiento, SLA"
      />
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader 
            Icon={Headset}
            title="Atención y Soporte"
            description="Resolver más y mejor, con menos desgaste. Estándares claros y autoservicio sólo donde tiene sentido."
          />
          
          <ServiceHeroImage 
            baseName="hero-soporte" 
            alt="Atención y Soporte"
            objectPosition="center 50%"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  En muchas empresas, soporte es el lugar donde cae todo: dudas, reclamos, errores de otros equipos y temas que nadie sabe bien quién debería atender. Eso genera saturación, respuestas desparejas y clientes que sienten que dan mil vueltas. Trabajamos con vos para ordenar qué entra, por dónde entra y cómo se resuelve, de forma que sea más sano tanto para el equipo como para tus clientes.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué ofrecemos</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Diseñamos una operación de soporte fácil de entender: qué tipo de consultas entran por cada canal, cómo se priorizan, quién las toma y con qué información cuenta para resolver. Documentamos las respuestas a los temas más frecuentes en un formato que se use de verdad, y definimos dónde conviene sumar autoservicio sin deshumanizar la experiencia.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">
                    Empezamos por entender qué tipo de casos llegan hoy, cuántas veces se repiten y en qué momentos se desborda todo.
                  </li>
                  <li className="text-base leading-relaxed">
                    A partir de eso, definimos rutas simples: qué entra por cada canal, qué se resuelve rápido y qué necesita otra capa de atención.
                  </li>
                  <li className="text-base leading-relaxed">
                    Armamos guías de resolución claras y, cuando tiene sentido, habilitamos autoservicio para los temas más repetitivos.
                  </li>
                  <li className="text-base leading-relaxed">
                    Probamos todo esto en algunos flujos críticos, lo ajustamos y luego lo extendemos al resto, acompañando a los líderes en el seguimiento diario.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Resultados esperados</h3>
                  <ul className="space-y-3">
                    {[
                      "Menos rebotes internos para resolver un mismo caso.",
                      "Menos tiempo perdido buscando información o preguntando siempre lo mismo.",
                      "Clientes que entienden mejor qué esperar y por dónde pedir ayuda.",
                      "Equipos menos saturados y con más foco en los problemas importantes.",
                    ].map((r, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <ServiceCTA 
            title="¿Revisamos tus flujos críticos?"
            description="Podemos tomar uno o dos tipos de casos muy frecuentes, ver cómo se están manejando hoy y diseñar un piloto simple de mejora. Eso ya alcanza para empezar a notar la diferencia."
            buttonText="Agenda diagnóstico"
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

export default Soporte;
