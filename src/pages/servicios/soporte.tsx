import { motion } from "framer-motion";
import { Headset, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import ServiceHeroImage from "./components/ServiceHeroImage";
import { heroConfig } from "./heroConfig";

const Soporte = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Atención al Estudiante | Praxia"
        description="Ordenamos los flujos de atención para que los estudiantes reciban respuestas claras y rápidas, y los equipos de soporte trabajen con menos desgaste."
        keywords="atención al estudiante, soporte educativo, flujos de atención, resolución consultas, educación online"
      />
      <NavBar />

      <main className="max-w-5xl mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader
            Icon={Headset}
            title="Atención al Estudiante"
            description="Que los problemas se resuelvan antes de que escalen y afecten la experiencia."
          />

          <ServiceHeroImage
            baseName="hero-soporte-new"
            alt="Atención al Estudiante"
            scale={heroConfig["hero-soporte-new"].scale}
            objectPosition={heroConfig["hero-soporte-new"].objectPosition}
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  En organizaciones educativas el soporte carga con mucho: dudas sobre el programa, problemas técnicos con el LMS, consultas administrativas, reclamos. Cuando eso no está ordenado, el equipo se satura, los estudiantes se frustran y la experiencia se deteriora. Trabajamos para que cada consulta llegue al lugar correcto, con la información necesaria para resolverla bien y rápido.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué hacemos</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Mapeamos qué tipos de consultas llegan, con qué frecuencia y cómo se están resolviendo hoy. Definimos rutas claras por tipo de caso, documentamos las respuestas a lo más frecuente y establecemos criterios de prioridad. Cuando tiene sentido, identificamos qué vale la pena automatizar sin perder el contacto humano donde más importa.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">Entendemos qué entra hoy: tipos de casos, volumen, tiempos de respuesta y dónde se generan más fricciones.</li>
                  <li className="text-base leading-relaxed">Diseñamos rutas de atención simples: qué entra por cada canal, cómo se prioriza y quién resuelve qué.</li>
                  <li className="text-base leading-relaxed">Construimos una base de respuestas para los temas más frecuentes, en un formato que el equipo use de verdad.</li>
                  <li className="text-base leading-relaxed">Probamos los cambios en los flujos más críticos, ajustamos y extendemos al resto de la operación.</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Qué cambia</h3>
                  <ul className="space-y-3">
                    {[
                      "Menos rebotes internos para resolver un mismo caso.",
                      "Estudiantes que entienden mejor qué esperar y por dónde pedir ayuda.",
                      "Equipos con menos desgaste y más foco en los casos que realmente lo necesitan.",
                      "Resolución más rápida de los temas frecuentes sin escalar innecesariamente.",
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
            title="¿Revisamos los flujos que más fricción generan hoy?"
            description="Podemos tomar uno o dos tipos de casos muy frecuentes, ver cómo se están manejando y diseñar un piloto simple de mejora. Eso ya alcanza para empezar a notar la diferencia."
            buttonText="Hablemos"
          />
        </motion.div>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="max-w-5xl mx-auto py-8 px-4 text-center">
          <Separator className="mb-8" />
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Soporte;
