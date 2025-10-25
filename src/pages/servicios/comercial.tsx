import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";

export default function Comercial() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Optimización Comercial | Praxia"
        description="Rediseñamos tu proceso de ventas, instalamos playbooks por etapa y medimos mejoras en conversión, tiempo de ciclo y forecast accuracy en 60–90 días."
        keywords="optimización comercial, proceso de ventas, playbooks de ventas, cadencias comerciales, MAP, forecast accuracy, CRM"
      />
      <NavBar />
      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <ServiceHeader 
            Icon={Briefcase}
            title="Optimización del Proceso Comercial"
            description="Más conversión en menos tiempo. Ordenamos el funnel, estandarizamos cómo se vende y eliminamos fricción."
          />

          <section className="prose max-w-none mt-8">
            <p>
              Vendés más cuando el proceso es claro y se ejecuta de forma consistente. Rediseñamos el funnel
              (captación, calificación, discovery, propuesta, cierre y expansión), instalamos playbooks por
              etapa y cadencias simples que tu equipo adopta desde el día uno. Intervenimos en la operación,
              medimos y ajustamos.
            </p>

            <h2>Qué ofrecemos</h2>
            <p>
              Diseño del proceso de ventas con criterios de entrada/salida por etapa; playbooks prácticos
              para discovery, propuesta y negociación; cadencias multicanal por segmento; Mutual Action Plans
              (MAP) para alinear expectativas; orden del CRM para que los datos sirvan al negocio.
            </p>

            <h2>Cómo trabajamos</h2>
            <p>
              Diagnóstico ágil (2–3 semanas) para medir línea base: conversión por etapa, tiempo de ciclo, tiempo de primera respuesta y forecast accuracy.
              Elegimos 1–2 palancas de alto impacto y las probamos en un piloto de 6 semanas con responsables y metas claras.
              Seguimiento semanal y cierre con resultados y plan de escalado.
            </p>

            <h2>Qué entregamos</h2>
            <p>
              Mapa del proceso y definiciones del funnel; playbooks por etapa con scripts y plantillas; cadencias configuradas;
              dashboard con seis métricas clave (conversión por etapa, tiempo de ciclo, primera respuesta, no-show,
              forecast accuracy y adherencia); informe del piloto con aprendizajes y próximos pasos.
            </p>

            <h2>Paquetes</h2>
            <p>Diagnóstico (2–3 semanas) → Piloto (6 semanas) → Escalado trimestral (estandarización, coaching a managers y QA).</p>
          </section>

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
}
