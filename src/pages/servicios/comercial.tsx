import { motion } from "framer-motion";
import { Briefcase, Check, BarChart } from "lucide-react";
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
        description="Rediseñamos tu proceso de ventas, instalamos playbooks por etapa y medimos mejoras en conversión, tiempo de ciclo y forecast accuracy en 60–90 días."
        keywords="optimización comercial, proceso de ventas, playbooks, cadencias, MAP, forecast accuracy, CRM"
      />
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader 
            Icon={Briefcase}
            title="Optimización del Proceso Comercial"
            description="Más conversión en menos tiempo. Estándares claros por etapa y menos fricción para tu equipo y tus clientes."
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
                  Rediseñamos el funnel (captación, calificación, discovery, propuesta, cierre y expansión), 
                  instalamos playbooks por etapa y cadencias simples que el equipo usa de verdad. Intervenimos 
                  en la operación, medimos y ajustamos.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué ofrecemos</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Proceso de ventas con criterios de entrada/salida, playbooks prácticos, cadencias multicanal, 
                  Mutual Action Plans y orden de CRM para que los datos sirvan al negocio.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Diagnóstico (2–3 semanas)</span>: línea base de conversión, tiempo de ciclo, SLA de 1ª respuesta y forecast accuracy.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Piloto (6 semanas)</span>: 1–2 palancas de alto impacto con responsables y metas claras. Seguimiento semanal.
                  </li>
                  <li className="text-base leading-relaxed">
                    <span className="font-medium">Escalado</span>: estandarización, coaching a managers y QA de adopción.
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
                      "↑ Conversión por etapa",
                      "↓ Tiempo de ciclo",
                      "↑ Precisión del forecast",
                      "Mayor adherencia al proceso",
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
            title="¿Querés empezar por un diagnóstico?"
            description="En 30 minutos identificamos 2–3 oportunidades y el piloto con mayor impacto para tu contexto."
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
