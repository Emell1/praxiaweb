import { motion } from "framer-motion";
import { Users, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import ServiceHeroImage from "./components/ServiceHeroImage";
import { heroConfig } from "./heroConfig";

const DesarrolloEquipos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Desarrollo de Equipos | Praxia"
        description="Acompañamos la incorporación y el desarrollo de personas en organizaciones educativas: desde cómo se selecciona hasta cómo se forma para que rindan mejor en su trabajo."
        keywords="desarrollo de equipos educación, onboarding, formación aplicada, incorporación, liderazgo educativo"
      />
      <NavBar />

      <main className="max-w-5xl mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader
            Icon={Users}
            title="Desarrollo de Equipos"
            description="Incorporaciones más sólidas y formación que se ve en el trabajo, no en las diapositivas."
          />

          <ServiceHeroImage
            baseName="hero-desarrollo-equipos"
            alt="Desarrollo de Equipos"
            scale={heroConfig["hero-desarrollo-equipos"].scale}
            objectPosition={heroConfig["hero-desarrollo-equipos"].objectPosition}
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  En organizaciones que crecen rápido — como suelen hacerlo las ed techs — el onboarding queda sin estructura y la formación se reduce a cursos que nadie recuerda a las dos semanas. Trabajamos en los dos frentes: cómo se incorpora gente nueva y cómo se desarrolla al equipo que ya está, con foco en lo que se necesita hacer mejor en el día a día.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué hacemos</h2>

                <h3 className="text-lg font-semibold mt-6 mb-3">Incorporación</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Definimos qué se espera de cada rol, cómo se evalúa bien a los candidatos y cómo se acompaña a las personas nuevas en sus primeros 90 días. El resultado es una rampa de incorporación que no depende de que la persona "se las arregle sola" ni del tiempo que tenga su líder ese mes.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">Formación</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Diseñamos programas cortos para equipos operativos y mandos medios, centrados en mejorar cómo se hace el trabajo concreto. Casos reales, práctica guiada y seguimiento de líderes para que lo aprendido no se diluya a los pocos días.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">Entendemos dónde está el problema hoy: si en cómo se selecciona, en cómo se incorpora o en cómo se forma al equipo que ya está.</li>
                  <li className="text-base leading-relaxed">Definimos criterios claros por rol y los convertimos en guías de entrevista, hitos de onboarding o módulos de formación concretos.</li>
                  <li className="text-base leading-relaxed">Probamos el enfoque con un equipo o rol específico, medimos qué cambia y decidimos juntos si vale escalar.</li>
                  <li className="text-base leading-relaxed">Acompañamos a los líderes para que puedan sostener lo construido sin depender de nosotros.</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Qué cambia</h3>
                  <ul className="space-y-3">
                    {[
                      "Personas nuevas que entienden antes cómo aportar valor en su rol.",
                      "Menos sorpresas post-contratación porque se evaluó bien desde el principio.",
                      "Formación que se ve en cómo trabaja el equipo, no solo en lo que dice saber.",
                      "Líderes con más herramientas para acompañar, no solo para reaccionar.",
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
            title="¿Arrancamos por un rol o un equipo concreto?"
            description="Podemos empezar por donde más duele hoy: la incorporación de un perfil clave o la formación de un equipo específico. Eso ya genera un cambio visible."
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

export default DesarrolloEquipos;
