import { motion } from "framer-motion";
import { Users, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeader from "./components/ServiceHeader";
import ServiceCTA from "./components/ServiceCTA";

const ReclutamientoOnboarding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Reclutamiento y Onboarding | Praxia"
        description="Hiring estructurado y onboarding medible para reducir time-to-fill y tiempo a competencia en roles clave."
        keywords="reclutamiento, onboarding 30/60/90, scorecards, entrevistas, ATS, tiempo a competencia"
      />
      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ServiceHeader 
            Icon={Users}
            title="Reclutamiento y Onboarding"
            description="Contratá mejor y lográ que las personas rindan antes."
          />
          
          <div className="w-full h-64 md:h-96 bg-gray-100 mb-12 rounded-lg overflow-hidden">
            <img 
              src="/servicio-reclutamiento-onboarding-hero.jpg"
              alt="Reclutamiento y Onboarding" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Estructuramos selección con scorecards y entrevistas consistentes, y conectamos el onboarding con resultados medibles del puesto.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-6 text-primary">Qué ofrecemos</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Scorecards por rol, bancos de preguntas, flujo en ATS con SLAs, plantillas de comunicación y onboarding 30/60/90 con outcomes semanales.
                </p>

                <h3 className="text-xl font-medium mt-10 mb-4 text-secondary-DEFAULT">Cómo trabajamos</h3>
                <ul className="space-y-4 mb-8 pl-6">
                  <li><span className="font-medium">Diagnóstico (2–3 semanas)</span>: detectamos cuellos de botella donde se pierde tiempo o calidad.</li>
                  <li><span className="font-medium">Piloto (6 semanas, 2 roles)</span>: estandarizamos scorecards/entrevistas, ordenamos ATS y lanzamos onboarding con rúbricas.</li>
                  <li><span className="font-medium">Escalado</span>: biblioteca por rol, training y QA de adopción.</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Resultados esperados</h3>
                  <ul className="space-y-3">
                    {[
                      "↓ Time-to-fill",
                      "↑ Tasa de aceptación",
                      "↓ Tiempo a competencia (TTCP)",
                      "Mejor experiencia del candidato y del manager",
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
};

export default ReclutamientoOnboarding;
