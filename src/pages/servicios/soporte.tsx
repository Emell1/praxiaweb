import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import { Separator } from "@/components/ui/separator";
import { Headset } from "lucide-react";

export default function Soporte() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Atención y Soporte | Praxia"
        description="Rutas claras, SLA realistas y autoservicio transaccional. Subimos FCR, bajamos AHT y reducimos abandonos sin agrandar el equipo."
        keywords="soporte omnicanal, FCR, AHT, base de conocimiento, autoservicio transaccional, enrutamiento por valor, SLA"
      />
      <NavBar />
      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <ServiceHeader 
            Icon={Headset}
            title="Atención y Soporte"
            description="Resolver más y mejor, con menos fricción. Estándares claros y autoservicio cuando suma."
          />

          <section className="prose max-w-none mt-8">
            <p>
              Diseñamos una operación de soporte sencilla y efectiva: rutas y prioridades claras, base de conocimiento
              usable y autoservicio transaccional donde aporta. Objetivo: elevar FCR, bajar AHT y reducir abandonos.
            </p>

            <h2>Qué ofrecemos</h2>
            <p>
              Flujo por canal con SLA realistas y enrutamiento por valor; guías de resolución y base de conocimiento mínima viable;
              bots transaccionales y callback inteligente cuando generan contención útil; playbook de picos.
            </p>

            <h2>Cómo trabajamos</h2>
            <p>
              Diagnóstico (2–3 semanas) para medir FCR, AHT, abandono, CSAT y contención útil. Piloto de seis semanas en dos flujos críticos
              para simplificar pasos, definir rutas/SLAs, crear guías y activar autoservicio. Seguimiento semanal y plan de escalado.
            </p>

            <h2>Qué entregamos</h2>
            <p>
              Mapa de flujo por canal; playbook de resolución y rúbrica de calidad; base de conocimiento editable;
              dashboard con FCR, AHT, CSAT, abandono, contención útil y adherencia; informe del piloto con resultados.
            </p>

            <h2>Paquetes</h2>
            <p>Diagnóstico (2–3 semanas) → Piloto (6 semanas) → Escalado trimestral (QA, coaching de líderes, mejora continua).</p>
          </section>

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
}
