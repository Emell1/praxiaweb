import { motion } from "framer-motion";
import { GraduationCap, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";

const FormacionEjecucion = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Formación para la Ejecución | Praxia"
        description="Formación aplicada por rol para mover KPIs. Rutas breves, práctica real, rúbricas claras y coaching a líderes."
        keywords="enablement, formación aplicada, rutas por rol, rúbricas, coaching, adopción de playbooks"
      />
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader 
            Icon={GraduationCap}
            title="Formación para la Ejecución"
            description="Menos cursos, más ejecución con calidad. Lo importante es el comportamiento y el KPI."
          />
          
          <div className="w-full h-64 md:h-96 bg-gray-100 mb-12 rounded-lg overflow-hidden">
            <img 
              src="/servicio-formacion-ejecucion-hero.jpg"
              alt="Formación para la Ejecución" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Programas breves y prácticos por rol (ventas, soporte, team leads, recruiters) enfocados en mover KPIs concretos.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué ofrecemos</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Rutas por rol conectadas con los playbooks del proceso, prácticas con casos reales, role-plays, rúbricas de competencia y coaching a líderes.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li><span className="font-medium">Definición de KPI y nivel esperado</span>: alineación con el proceso y con líderes.</li>
                  <li><span className="font-medium">Cohorte de 6 semanas</span>: sesiones breves, práctica aplicada y feedback rápido.</li>
                  <li><span className="font-medium">Sostenimiento</span>: rituales, QA de adopción y ajustes al playbook.</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Resultados esperados</h3>
                  <ul className="space-y-3">
                    {[
                      "↑ Adopción de playbooks",
                      "↑ Calidad de ejecución por rol",
                      "↑ Coaching efectivo de líderes",
                      "Impacto directo en el KPI del área",
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
};

export default FormacionEjecucion;
