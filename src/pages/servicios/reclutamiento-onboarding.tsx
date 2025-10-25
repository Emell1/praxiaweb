import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";

export default function ReclutamientoOnboarding() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Reclutamiento y Onboarding | Praxia"
        description="Hiring estructurado y onboarding medible para reducir time-to-fill y tiempo a competencia en roles clave."
        keywords="reclutamiento estructurado, scorecards, entrevistas, ATS, onboarding 30/60/90, tiempo a competencia, time-to-fill"
      />
      <NavBar />
      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <ServiceHeader 
            Icon={Users}
            title="Reclutamiento y Onboarding"
            description="Contratá mejor y logrÁ que las personas rindan antes. Estándares claros y onboarding conectado a desempeño."
          />

          <section className="prose max-w-none mt-8">
            <p>
              Estructuramos el proceso de selección con scorecards, rúbricas y entrevistas consistentes, y conectamos
              el onboarding con resultados medibles del puesto. Menos time-to-fill, mayor tasa de aceptación y menor TTCP.
            </p>

            <h2>Qué ofrecemos</h2>
            <p>
              Scorecards por rol, guías de entrevista; flujo en ATS con SLAs y plantillas; onboarding 30/60/90 por rol con outcomes semanales;
              coordinación real con hiring managers.
            </p>

            <h2>Cómo trabajamos</h2>
            <p>
              Diagnóstico (2–3 semanas) para detectar cuellos de botella. Piloto de seis semanas con dos roles críticos:
              estandarizamos scorecards y entrevistas, ordenamos ATS y lanzamos onboarding con rúbricas. Seguimiento y ajustes rápidos.
            </p>

            <h2>Qué entregamos</h2>
            <p>
              Scorecards y rúbricas por rol, flujo ATS con tableros, onboarding 30/60/90 con rúbricas; dashboard con time-to-fill,
              pass-through, tasa de aceptación, TTCP y NPS candidato/manager; informe del piloto y plan de estandarización.
            </p>

            <h2>Paquetes</h2>
            <p>Diagnóstico (2–3 semanas) → Piloto (6 semanas, 2 roles) → Escalado trimestral (biblioteca por rol, training, QA).</p>
          </section>

          <ServiceCTA 
            title="¿Te ayudo con 2 roles críticos?"
            description="Definimos estándares, ordenamos el flujo y aceleramos la rampa con un onboarding medible."
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
