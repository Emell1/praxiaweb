import { motion } from "framer-motion";
import { Headset, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";

const Soporte = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Atención y Soporte | Praxia"
        description="Rutas claras, SLA realistas y autoservicio transaccional. Subimos FCR, bajamos AHT y reducimos abandonos sin agrandar el equipo."
        keywords="soporte, FCR, AHT, base de conocimiento, autoservicio, enrutamiento, SLA"
      />
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader 
            Icon={Headset}
            title="Atención y Soporte"
            description="Resolver más y mejor, con menos fricción. Estándares claros y autoservicio cuando suma."
          />
          
          <div className="w-full h-64 md:h-96 bg-gray-100 mb-12 rounded-lg overflow-hidden">
            <img 
              src="/servicio-soporte-hero.jpg"
              alt="Atención y Soporte" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Diseñamos una operación de soporte sencilla y efectiva: rutas y prioridades claras, base de conocimiento usable y autoservicio transaccional donde aporta.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué ofrecemos</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Flujo por canal con SLAs y enrutamiento por valor, guías de resolución, bots transaccionales y playbook de picos.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li><span className="font-medium">Diagnóstico (2–3 semanas)</span>: FCR, AHT, abandono, CSAT y contención útil.</li>
                  <li><span className="font-medium">Piloto (6 semanas)</span>: 2 flujos críticos, rutas/SLAs, guías y autoservicio si corresponde.</li>
                  <li><span className="font-medium">Escalado</span>: QA, coaching de líderes y mejora continua.</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Resultados esperados</h3>
                  <ul className="space-y-3">
                    {[
                      "↑ FCR (resolución en primer contacto)",
                      "↓ AHT (tiempo medio de atención)",
                      "↓ Tasa de abandono",
                      "↑ CSAT y contención útil",
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
            description="Identificamos dos flujos de alto impacto y diseñamos un piloto de 6 semanas para mover tus KPIs."
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
