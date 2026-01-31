import { motion } from "framer-motion";
import { Users, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import ServiceHeroImage from "./components/ServiceHeroImage";

const ReclutamientoOnboarding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Reclutamiento y Onboarding | Praxia"
        description="Ponemos orden en cómo definís, seleccionás e incorporás personas para que lleguen antes al nivel de desempeño que necesitás."
        keywords="reclutamiento, onboarding, entrevistas, selección, ATS"
      />
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader 
            Icon={Users}
            title="Reclutamiento y Onboarding"
            description="Contratá mejor y ayudá a que las personas nuevas se pongan a tono más rápido."
          />
          
          <ServiceHeroImage 
            baseName="hero-reclutamiento" 
            alt="Reclutamiento y Onboarding"
            objectPosition="70% center"
            scale={1.0}
            offsetX={0}
            offsetY={0}
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Cuando la empresa crece, el proceso de selección suele armarse a las corridas: cada persona entrevista a su manera, se envían mensajes distintos a los candidatos y el onboarding se reduce a "acomodate como puedas". Te ayudamos a bajar a tierra qué necesitás de cada rol y a convertir eso en una forma consistente de seleccionar e incorporar, sin hacer el proceso interminable.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué ofrecemos</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Empezamos por traducir el rol a algo entendible: qué tiene que poder hacer bien la persona, qué experiencia suma y qué es deseable pero no excluyente. Con eso armamos guías simples para entrevistar, mensajes más claros para candidatos y un recorrido de los primeros meses que conecte con el trabajo real, no sólo con presentaciones generales.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">
                    Revisamos cómo estás contratando hoy: de dónde llegan los candidatos, cómo los evaluás y en qué puntos se pierden tiempo o buenas personas.
                  </li>
                  <li className="text-base leading-relaxed">
                    Definimos criterios claros por rol y los convertimos en preguntas, ejercicios o casos que vos y tu equipo puedan usar en entrevistas reales.
                  </li>
                  <li className="text-base leading-relaxed">
                    Diseñamos un onboarding de 30, 60 y 90 días con hitos concretos, para que la persona nueva y su líder sepan qué debería estar pasando en cada tramo.
                  </li>
                  <li className="text-base leading-relaxed">
                    Probamos este enfoque con uno o dos roles clave, ajustamos y, si funciona bien, lo extendemos al resto de la organización.
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
                      "Menos tiempos muertos entre etapas del proceso de selección.",
                      "Menos sorpresas después de la contratación, porque se evaluó mejor desde el principio.",
                      "Personas nuevas que entienden antes cómo aportar valor en su rol.",
                      "Líderes con más herramientas para acompañar la incorporación, no sólo para reaccionar cuando algo sale mal.",
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
            title="¿Te ayudamos con 2 roles críticos?"
            description="Podemos empezar por los puestos que más te preocupan hoy, ordenar cómo los definís, cómo los entrevistás y cómo los incorporás. Eso ya genera un cambio visible para tu equipo y para quienes se suman."
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

export default ReclutamientoOnboarding;
