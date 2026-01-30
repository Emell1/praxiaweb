import { motion } from "framer-motion";
import { GraduationCap, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import ServiceHeroImage from "./components/ServiceHeroImage";

const FormacionEjecucion = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Formación para la Ejecución | Praxia"
        description="Programas breves y prácticos para que ventas, soporte y líderes mejoren cómo trabajan en el día a día, con cambios visibles en la operación."
        keywords="formación aplicada, entrenamiento, rutas por rol, coaching, adopción de procesos"
      />
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader 
            Icon={GraduationCap}
            title="Formación para la Ejecución"
            description="Menos cursos que se olvidan, más cambios que se notan en cómo trabaja tu equipo."
          />
          
          <ServiceHeroImage 
            baseName="hero-formacion" 
            alt="Formación para la Ejecución"
            objectPosition="center 60%"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Muchas empresas invierten en capacitaciones que quedan en diapositivas o en frases lindas. Acá la formación es una herramienta para mejorar la ejecución, no un fin en sí mismo. Diseñamos programas cortos para roles específicos, atados a cambios concretos que querés ver en el trabajo real.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué ofrecemos</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Trabajamos con grupos chicos y con situaciones que ya viven en su día a día: llamadas reales, casos de clientes, conversaciones difíciles, seguimiento de métricas. No traemos modelos de libro desconectados de tu operación, sino ejercicios que se puedan aplicar al día siguiente.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">
                    Acordamos qué querés que cambie en la práctica: qué deberían hacer distinto las personas después del programa, y cómo se va a notar eso en el área.
                  </li>
                  <li className="text-base leading-relaxed">
                    Diseñamos una cohorte corta (por ejemplo, 6 semanas) con encuentros breves, práctica guiada y espacio para bajar dudas concretas de su trabajo.
                  </li>
                  <li className="text-base leading-relaxed">
                    Acompañamos a los líderes para que sigan reforzando lo aprendido en sus reuniones, tableros y conversaciones de seguimiento, para que no se diluya a los pocos días.
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
                      "Equipos que no sólo \"saben\" qué hacer, sino que empiezan a hacerlo de manera más consistente.",
                      "Líderes con más recursos para acompañar, sin depender de pedir \"otro curso más\".",
                      "Procesos y playbooks que se usan en serio y no quedan en un documento compartido que nadie abre.",
                      "Cambios visibles en la forma de trabajar y en los indicadores del área.",
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
            title="¿Convertimos formación en resultados?"
            description="Te proponemos un piloto corto para un equipo concreto, con un objetivo claro. Medimos qué cambia en su forma de trabajar y, con eso en la mano, decidís si vale la pena escalarlo."
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

export default FormacionEjecucion;
