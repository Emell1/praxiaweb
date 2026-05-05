import { motion } from "framer-motion";
import { Users, Check, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeroImage from "./components/ServiceHeroImage";
import { heroConfig } from "./heroConfig";

const steps = [
  "Entendemos dónde está el problema: si en cómo se selecciona, incorpora o forma al equipo.",
  "Definimos criterios claros por rol: guías de entrevista, hitos de onboarding o módulos de formación.",
  "Probamos el enfoque con un equipo o rol específico y medimos qué cambia.",
  "Acompañamos a los líderes para que sostengan lo construido sin depender de nosotros.",
];

const results = [
  "Personas nuevas que entienden antes cómo aportar valor en su rol.",
  "Menos sorpresas post-contratación porque se evaluó bien desde el principio.",
  "Formación que se ve en cómo trabaja el equipo, no solo en lo que dice saber.",
  "Líderes con más herramientas para acompañar, no solo para reaccionar.",
];

const DesarrolloEquipos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Desarrollo de Equipos | Praxia"
        description="Acompañamos la incorporación y el desarrollo de personas en organizaciones educativas: desde cómo se selecciona hasta cómo se forma para que rindan mejor."
        keywords="desarrollo de equipos educación, onboarding, formación aplicada, incorporación, liderazgo educativo"
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
              <Users className="h-4 w-4 text-white/70" />
              <span className="text-sm text-white/70">Servicio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Desarrollo de Equipos</h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Incorporaciones sólidas y formación que se ve en el trabajo, no en las diapositivas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Imagen hero */}
      <div className="max-w-5xl mx-auto px-4 pt-10 bg-white">
        <ServiceHeroImage
          baseName="hero-desarrollo-equipos"
          alt="Desarrollo de Equipos"
          scale={heroConfig["hero-desarrollo-equipos"].scale}
          objectPosition={heroConfig["hero-desarrollo-equipos"].objectPosition}
        />
      </div>

      {/* Contenido principal */}
      <section className="bg-white pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6 text-base leading-relaxed text-foreground/80">
              <p>
                En organizaciones que crecen rápido — como suelen hacerlo las ed techs — el onboarding queda sin estructura y la formación se reduce a cursos que nadie recuerda a las dos semanas. Trabajamos en los dos frentes: cómo se incorpora gente nueva y cómo se desarrolla al equipo que ya está.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="rounded-xl bg-slate-50 border p-5">
                  <h3 className="font-semibold text-foreground mb-2">Incorporación</h3>
                  <p className="text-sm">Definimos perfiles, guías de entrevista y una rampa de 90 días que no depende de que la persona "se las arregle sola".</p>
                </div>
                <div className="rounded-xl bg-slate-50 border p-5">
                  <h3 className="font-semibold text-foreground mb-2">Formación</h3>
                  <p className="text-sm">Programas cortos con casos reales, práctica guiada y seguimiento para que lo aprendido no se diluya a los pocos días.</p>
                </div>
              </div>

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
          <h2 className="text-2xl font-bold text-white mb-3">¿Arrancamos por un rol o un equipo concreto?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Podemos empezar por donde más duele hoy: la incorporación de un perfil clave o la formación de un equipo específico.</p>
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

export default DesarrolloEquipos;
