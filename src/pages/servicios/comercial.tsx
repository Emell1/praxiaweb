import { motion } from "framer-motion";
import { Briefcase, Check, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeroImage from "./components/ServiceHeroImage";
import { heroConfig } from "./heroConfig";

const steps = [
  "Entendemos cómo opera hoy el equipo y dónde se frena más matrícula.",
  "Diseñamos un flujo de captación ajustado a la realidad de la organización.",
  "Armamos guías y cadencias sostenibles y las probamos en un piloto acotado.",
  "Ajustamos con lo que pasa en la práctica y extendemos al resto del equipo.",
];

const results = [
  "Menos prospectos que se pierden entre etapas sin que nadie los retome.",
  "Equipos que saben qué hacer en cada momento del ciclo de inscripción.",
  "Pipeline que refleja la realidad y sirve para tomar decisiones.",
  "Líderes con visibilidad real sin depender de reuniones para entender qué pasa.",
];

const Comercial = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Operaciones Comerciales | Praxia"
        description="Ordenamos el proceso de captación y conversión para que los equipos comerciales de universidades y ed techs trabajen con más claridad y mejores resultados."
        keywords="operaciones comerciales educación, captación estudiantes, proceso inscripción, matrícula, CRM educativo"
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
              <Briefcase className="h-4 w-4 text-white/70" />
              <span className="text-sm text-white/70">Servicio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Operaciones Comerciales</h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Que el proceso de captación acompañe el crecimiento de la organización.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Imagen hero */}
      <div className="max-w-5xl mx-auto px-4 -mt-0 pt-10 bg-white">
        <ServiceHeroImage
          baseName="hero-comercial-new"
          alt="Operaciones Comerciales"
          scale={heroConfig["hero-comercial-new"].scale}
          objectPosition={heroConfig["hero-comercial-new"].objectPosition}
        />
      </div>

      {/* Contenido principal */}
      <section className="bg-white pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6 text-base leading-relaxed text-foreground/80">
              <p>
                En educación, el ciclo comercial tiene lógica propia: los tiempos de decisión son más largos, las objeciones son distintas y el equipo maneja prospectos en distintos momentos del año. Cuando ese proceso no está ordenado, se pierde matrícula que ya estaba cerca.
              </p>
              <p>
                Revisamos cómo entran los prospectos, qué hace el equipo en cada etapa y qué pasa hasta la inscripción. Definimos etapas claras, criterios para avanzar o soltar un caso, y guías prácticas que el equipo pueda usar sin depender de la memoria de cada uno.
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

            {/* Sidebar resultados */}
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
          <h2 className="text-2xl font-bold text-white mb-3">¿Revisamos cómo está funcionando la captación hoy?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">En una conversación corta podemos identificar dónde se pierde más matrícula y proponer un primer paso concreto.</p>
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

export default Comercial;
