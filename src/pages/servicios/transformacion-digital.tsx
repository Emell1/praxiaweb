import { motion } from "framer-motion";
import { Cpu, Check, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import ServiceHeroImage from "./components/ServiceHeroImage";
import { heroConfig } from "./heroConfig";

const steps = [
  "Entendemos el proceso actual y dónde la tecnología existente no está dando lo que debería.",
  "Rediseñamos el flujo de trabajo con la herramienta como soporte, no como protagonista.",
  "Acompañamos la adopción: capacitación práctica, seguimiento y ajuste en tiempo real.",
  "Construimos con el equipo la capacidad de seguir mejorando cuando el proyecto termina.",
];

const results = [
  "Herramientas que se usan de verdad, no que quedan sin adoptar.",
  "Equipos con más capacidad para adaptarse a los cambios que siguen.",
  "Procesos que mejoran con la tecnología, no que se complican más.",
  "Menos resistencia al cambio porque se trabajó con el equipo, no sobre él.",
];

const TransformacionDigital = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Transformación Digital | Praxia"
        description="Acompañamos a organizaciones educativas en el rediseño de procesos con tecnología: no solo implementar herramientas, sino lograr que el equipo las adopte."
        keywords="transformación digital educación, rediseño procesos tecnología, cultura de cambio, LMS, automatización educativa"
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
              <Cpu className="h-4 w-4 text-white/70" />
              <span className="text-sm text-white/70">Servicio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Transformación Digital</h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Tecnología que mejora cómo se trabaja, no que se suma encima de un proceso que ya no funciona.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Imagen hero */}
      <div className="max-w-5xl mx-auto px-4 pt-10 bg-white">
        <ServiceHeroImage
          baseName="hero-transformacion-digital"
          alt="Transformación Digital"
          scale={heroConfig["hero-transformacion-digital"].scale}
          objectPosition={heroConfig["hero-transformacion-digital"].objectPosition}
        />
      </div>

      {/* Contenido principal */}
      <section className="bg-white pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6 text-base leading-relaxed text-foreground/80">
              <p>
                Muchas organizaciones educativas implementan herramientas — un LMS nuevo, un CRM, un sistema de automatización — y a los seis meses el equipo volvió a trabajar como antes. La tecnología no falla: falla la forma en que se introduce el cambio.
              </p>
              <p>
                Acompañamos el rediseño de procesos con tecnología y el desarrollo de la capacidad del equipo para adoptarlos y sostenerlos. No somos implementadores de software — somos los que aseguran que el cambio llegue al trabajo del día a día.
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
          <h2 className="text-2xl font-bold text-white mb-3">¿Hay una transformación que no está dando los resultados esperados?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Podemos revisar juntos dónde está el freno: si en el proceso, en la herramienta o en la adopción.</p>
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

export default TransformacionDigital;
