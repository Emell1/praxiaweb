import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import ServiceHeroImage from "./components/ServiceHeroImage";
import { heroConfig } from "./heroConfig";

const Comercial = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Operaciones Comerciales | Praxia"
        description="Ordenamos el proceso de captación y conversión para que los equipos comerciales de universidades y ed techs trabajen con más claridad y mejores resultados."
        keywords="operaciones comerciales educación, captación estudiantes, proceso inscripción, matrícula, CRM educativo"
      />
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader
            Icon={Briefcase}
            title="Operaciones Comerciales"
            description="Que el proceso de captación acompañe el crecimiento de la organización."
          />

          <ServiceHeroImage
            baseName="hero-comercial"
            alt="Operaciones Comerciales"
            scale={heroConfig["hero-comercial"].scale}
            objectPosition={heroConfig["hero-comercial"].objectPosition}
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  En educación, el ciclo comercial tiene lógica propia: los tiempos de decisión son más largos, las objeciones son distintas y el equipo maneja prospectos en distintos momentos del año. Cuando ese proceso no está ordenado, se pierde matrícula que ya estaba cerca. Entramos a ordenarlo desde adentro, trabajando con el equipo en la operación real.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué hacemos</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Revisamos cómo entran los prospectos, qué hace el equipo con ellos en cada etapa y qué pasa hasta la inscripción. Definimos etapas claras, criterios para avanzar o soltar un caso, y dejamos guías prácticas que el equipo pueda usar sin depender de la memoria de cada uno.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  También trabajamos el uso del CRM para que sirva a la gestión y no sea solo una carga administrativa. El objetivo es que el equipo sepa en todo momento qué tiene que hacer y con quién, y que los líderes puedan ver el pipeline sin tener que preguntar uno a uno.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">Entendemos cómo opera hoy el equipo: dónde se frenan los prospectos y en qué punto se pierde más matrícula.</li>
                  <li className="text-base leading-relaxed">Diseñamos un flujo de captación ajustado a la realidad de la organización, con etapas que tengan sentido y criterios simples para avanzar.</li>
                  <li className="text-base leading-relaxed">Armamos guías y cadencias que el equipo pueda sostener en el día a día, y las probamos en un piloto acotado.</li>
                  <li className="text-base leading-relaxed">Ajustamos con lo que pasa en la práctica y extendemos al resto del equipo, acompañando a quienes lideran el área.</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Qué cambia</h3>
                  <ul className="space-y-3">
                    {[
                      "Menos prospectos que se pierden entre etapas sin que nadie los retome.",
                      "Equipos que saben qué hacer en cada momento del ciclo de inscripción.",
                      "Pipeline que refleja la realidad y sirve para tomar decisiones.",
                      "Líderes con visibilidad real sin depender de reuniones para entender qué pasa.",
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

          <ServiceCTA
            title="¿Revisamos cómo está funcionando la captación hoy?"
            description="En una conversación corta podemos mirar juntos el proceso actual e identificar dónde se pierde más matrícula. A partir de ahí proponemos un primer paso concreto."
            buttonText="Hablemos"
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

export default Comercial;
