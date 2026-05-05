import { motion } from "framer-motion";
import { Cpu, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import ServiceHeroImage from "./components/ServiceHeroImage";
import { heroConfig } from "./heroConfig";

const TransformacionDigital = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Transformación Digital | Praxia"
        description="Acompañamos a organizaciones educativas en el rediseño de procesos con tecnología: no solo implementar herramientas, sino lograr que el equipo las adopte y la operación mejore de verdad."
        keywords="transformación digital educación, rediseño procesos tecnología, cultura de cambio, LMS, automatización educativa"
      />
      <NavBar />

      <main className="max-w-5xl mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader
            Icon={Cpu}
            title="Transformación Digital"
            description="Tecnología que mejora cómo se trabaja, no que se suma encima de un proceso que ya no funciona."
          />

          <ServiceHeroImage
            baseName="hero-transformacion-digital"
            alt="Transformación Digital"
            scale={heroConfig["hero-transformacion-digital"].scale}
            objectPosition={heroConfig["hero-transformacion-digital"].objectPosition}
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Muchas organizaciones educativas implementan herramientas — un LMS nuevo, un CRM, un sistema de automatización — y a los seis meses el equipo volvió a trabajar como antes. La tecnología no falla: falla la forma en que se introduce el cambio. Acompañamos el rediseño de procesos con tecnología y el desarrollo de la capacidad del equipo para adoptarlos y sostenerlos.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué hacemos</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Trabajamos en la intersección entre el proceso y la herramienta: cómo debería funcionar la operación, qué rol cumple la tecnología en eso y qué necesita el equipo para que el cambio se sostenga. No somos implementadores de software — somos los que aseguran que el cambio llegue a la forma de trabajar del día a día.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Eso incluye mapear el proceso actual, rediseñarlo con la nueva tecnología como soporte, acompañar la adopción con el equipo y construir la cultura de mejora continua que hace que la organización siga evolucionando sola.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">Entendemos el proceso actual y dónde la tecnología existente no está dando lo que debería.</li>
                  <li className="text-base leading-relaxed">Rediseñamos el flujo de trabajo con la herramienta como soporte, no como protagonista.</li>
                  <li className="text-base leading-relaxed">Acompañamos la adopción: capacitación práctica, seguimiento y ajuste en tiempo real.</li>
                  <li className="text-base leading-relaxed">Construimos con el equipo la capacidad de seguir mejorando cuando el proyecto termina.</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Qué cambia</h3>
                  <ul className="space-y-3">
                    {[
                      "Herramientas que se usan de verdad, no que quedan sin adoptar.",
                      "Equipos con más capacidad para adaptarse a los cambios que siguen.",
                      "Procesos que mejoran con la tecnología, no que se complican más.",
                      "Menos resistencia al cambio porque se trabajó con el equipo, no sobre él.",
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
            title="¿Hay una transformación que no está dando los resultados esperados?"
            description="Podemos revisar juntos dónde está el freno: si en el proceso, en la herramienta o en la adopción. A partir de ahí definimos cómo intervenir."
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

export default TransformacionDigital;
