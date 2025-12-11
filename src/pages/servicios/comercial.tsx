import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";

const Comercial = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Optimización Comercial | Praxia"
        description="Ordenamos tu proceso de ventas para que tu equipo sepa qué hacer en cada etapa, use el CRM con sentido y cierre más oportunidades en menos tiempo."
        keywords="optimización comercial, proceso de ventas, playbooks, cadencias, CRM, pipeline"
      />
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader 
            Icon={Briefcase}
            title="Optimización del Proceso Comercial"
            description="Te ayudamos a que tu equipo venda mejor, con un proceso claro y realista que acompañe cómo es tu negocio hoy."
          />
          
          <div className="w-full h-64 md:h-96 bg-gray-100 mb-12 rounded-lg overflow-hidden">
            <img 
              src="/servicio-comercial-hero.jpg"
              alt="Optimización Comercial" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  En muchos equipos comerciales el proceso se armó solo: se sumaron personas, herramientas y reportes, pero nadie se detuvo a ordenar cómo se vende en la práctica. Nosotros entramos ahí. Rediseñamos el recorrido desde que aparece un lead hasta después del cierre, trabajamos con tu equipo en el día a día y dejamos una forma de operar que no dependa de héroes individuales.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué ofrecemos</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Junto con tu equipo definimos etapas claras, qué significa avanzar o frenar una oportunidad y qué acciones tienen sentido en cada momento. A eso le sumamos guías simples (no manuales eternos), cadencias que se pueden sostener en la realidad y un uso del CRM que sirva para gestionar mejor, no sólo para "cargar datos porque hay que hacerlo".
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  El objetivo no es que todos vendan igual, sino que tengan un marco común que evite perder tiempo en lo obvio: a quién contactar primero, qué conversaciones retomar, qué oportunidades cerrar y cuáles soltar. Eso ordena la cabeza del equipo y hace que los números acompañen.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">
                    Conversamos con tu equipo y miramos cómo se vende hoy: qué funciona, qué se repite y dónde se frena todo.
                  </li>
                  <li className="text-base leading-relaxed">
                    Definimos un flujo comercial propio para tu negocio, con etapas que tengan sentido y criterios simples para avanzar o no un caso.
                  </li>
                  <li className="text-base leading-relaxed">
                    Armamos playbooks y cadencias fáciles de seguir, y los probamos en un piloto corto con un grupo acotado.
                  </li>
                  <li className="text-base leading-relaxed">
                    Ajustamos con lo que pasa en la práctica y luego extendemos el modelo al resto del equipo, acompañando especialmente a quienes lideran.
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
                      "Más oportunidades avanzando con un siguiente paso claro.",
                      "Menos negociaciones que se estiran sin que nadie se haga cargo.",
                      "Reportes que reflejan lo que realmente pasa en el pipeline.",
                      "Reuniones comerciales más honestas y útiles para decidir.",
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
            title="¿Querés revisar cómo están vendiendo hoy?"
            description="En una llamada corta podemos mirar juntos tu proceso comercial actual y detectar en qué partes se pierde más tiempo o más oportunidades. A partir de ahí, te proponemos un primer piloto concreto."
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

export default Comercial;
