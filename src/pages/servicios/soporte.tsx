import { motion } from "framer-motion";
import { Headset, Check, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeroImage from "./components/ServiceHeroImage";
import { heroConfig } from "./heroConfig";

const steps = [
  "Entendemos qué entra hoy: tipos de casos, volumen y dónde se generan más fricciones.",
  "Diseñamos rutas de atención simples: qué entra por cada canal, cómo se prioriza y quién resuelve qué.",
  "Construimos una base de respuestas para los temas más frecuentes, en un formato que el equipo use de verdad.",
  "Probamos los cambios en los flujos más críticos, ajustamos y extendemos al resto de la operación.",
];

const results = [
  "Menos rebotes internos para resolver un mismo caso.",
  "Estudiantes que entienden mejor qué esperar y por dónde pedir ayuda.",
  "Equipos con menos desgaste y más foco en los casos que realmente lo necesitan.",
  "Resolución más rápida de los temas frecuentes sin escalar innecesariamente.",
];

const Soporte = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Atención al Estudiante | Praxia"
        description="Ordenamos los flujos de atención para que los estudiantes reciban respuestas claras y rápidas, y los equipos de soporte trabajen con menos desgaste."
        keywords="atención al estudiante, soporte educativo, flujos de atención, resolución consultas, educación online"
      />
      <NavBar />

      {/* Hero oscuro */}
      <section className="bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Headset className="h-4 w-4 text-white/70" />
              <span className="text-sm text-white/70">Servicio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Atención al Estudiante</h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Que los problemas se resuelvan antes de que escalen y afecten la experiencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Imagen hero */}
      <div className="max-w-5xl mx-auto px-4 pt-10 bg-white">
        <ServiceHeroImage
          baseName="hero-soporte-new"
          alt="Atención al Estudiante"
          scale={heroConfig["hero-soporte-new"].scale}
          objectPosition={heroConfig["hero-soporte-new"].objectPosition}
        />
      </div>

      {/* Contenido principal */}
      <section className="bg-white pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6 text-base leading-relaxed text-foreground/80">
              <p>
                En organizaciones educativas el soporte carga con mucho: dudas sobre el programa, problemas técnicos con el LMS, consultas administrativas, reclamos. Cuando eso no está ordenado, el equipo se satura, los estudiantes se frustran y la experiencia se deteriora.
              </p>
              <p>
                Trabajamos para que cada consulta llegue al lugar correcto, con la información necesaria para resolverla bien y rápido. Mapeamos qué tipos de consultas llegan, definimos rutas claras y documentamos las respuestas a lo más frecuente.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Cómo trabajamos</h2>
              <ol className="space-y-3">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 h-6 w-6 rounded-md bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="rounded-xl bg-slate-50 border p-6 sticky top-24">
                <h3 className="font-semibold text-base mb-4">Qué cambia</h3>
                <ul className="space-y-3">
                  {results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA oscuro */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Revisamos los flujos que más fricción generan hoy?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Podemos tomar uno o dos tipos de casos muy frecuentes y diseñar un piloto simple de mejora.</p>
          <Link to="/contacto">
            <button className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-white/90 transition text-sm">
              Hablemos <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 py-6">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Separator className="mb-6 bg-white/10" />
          <p className="text-sm text-white/30">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Soporte;
