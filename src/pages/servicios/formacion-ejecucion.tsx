import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";
import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";

export default function FormacionEjecucion() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Formación para la Ejecución | Praxia"
        description="Formación aplicada por rol para mover KPIs: rutas breves, práctica real, rúbricas claras y coaching a líderes."
        keywords="enablement, formación aplicada, rutas por rol, rúbricas de competencia, coaching de líderes, adopción de playbooks"
      />
      <NavBar />
      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <ServiceHeader 
            Icon={GraduationCap}
            title="Formación para la Ejecución"
            description="Personas que ejecutan mejor. Lo importante no es el curso, es el cambio de comportamiento y el KPI."
          />

          <section className="prose max-w-none mt-8">
            <p>
              Programas breves y prácticos, por rol (ventas, soporte, team leads, recruiters), enfocados en mover KPIs concretos.
              Menos teoría, más práctica guiada y feedback; menos "cursos", más ejecución con calidad.
            </p>

            <h2>Qué ofrecemos</h2>
            <p>
              Rutas de aprendizaje por rol conectadas con los playbooks del proceso; prácticas con casos reales, role-plays
              y resolución guiada; rúbricas de competencia; coaching para líderes y calibración de criterios.
            </p>

            <h2>Cómo trabajamos</h2>
            <p>
              Definimos el KPI objetivo y el nivel de competencia esperado. Cohorte de 6 semanas con sesiones breves,
              práctica aplicada y feedback. Medimos progreso con rúbricas y con el KPI del proceso. Plan para sostener el cambio.
            </p>

            <h2>Qué entregamos</h2>
            <p>
              Rutas por rol con objetivos semanales y materiales; rúbricas y tarjetas de coaching; biblioteca de casos;
              tablero de progreso y adherencia; informe de impacto en el KPI del área.
            </p>

            <h2>Paquetes</h2>
            <p>Diagnóstico de capacidades → Piloto de 6 semanas (1 cohorte por rol) → Escalado con QA continuo y coach-the-coach.</p>
          </section>

          <ServiceCTA 
            title="¿Convertimos formación en resultados?"
            description="Propuesta de cohorte piloto de 6 semanas atada a un KPI concreto del área."
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
