import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import { Separator } from "@/components/ui/separator";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Quiénes somos | Praxia"
        description="Praxia es una consultora especializada en operaciones para organizaciones de educación superior y ed tech."
        keywords="Praxia consultoría, quiénes somos, equipo, educación superior, ed tech"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quiénes somos</h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Praxia es una consultora especializada en organizaciones de educación superior y ed tech. Trabajamos en la brecha entre la estrategia y la ejecución: el lugar donde más se pierde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-5xl mx-auto px-4 pt-10 bg-white">
        <div className="rounded-xl overflow-hidden" style={{ height: "420px" }}>
          <img
            src="/images/quienes-somos-hero.png"
            alt="Quiénes somos — Praxia"
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 40%" }}
          />
        </div>
      </div>

      {/* Por qué existe / Cómo trabajamos */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold mb-4">Por qué existe Praxia</h2>
              <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                <p>
                  La mayoría de los problemas operativos en educación no son de estrategia ni de tecnología. Son de ejecución: procesos que nadie ordenó, equipos que no tienen claridad sobre qué se espera de ellos, cambios que se anuncian pero no llegan al trabajo del día a día.
                </p>
                <p>
                  Praxia existe para trabajar en eso. No con recetas genéricas, sino desde adentro de cada organización, entendiendo su realidad y construyendo soluciones que se puedan sostener.
                </p>
                <p>
                  Nuestro foco es la educación superior y las ed techs porque es donde tenemos experiencia real.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Cómo trabajamos</h2>
              <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                <p>
                  Entramos a cada proyecto con una premisa: primero entender, después proponer. No llegamos con un diagnóstico predefinido ni con una solución que vendemos a todos por igual.
                </p>
                <p>
                  Trabajamos junto al equipo, no sobre él. Los cambios que construimos juntos son los que se sostienen cuando el proyecto termina.
                </p>
                <p>
                  Operamos con un modelo flexible: según el proyecto armamos el equipo con los perfiles que el trabajo requiere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo — fondo slate-50 */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-10">El equipo</h2>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Foto */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-200 border flex items-center justify-center">
                <img
                  src="/fotoabout.jpg"
                  alt="Enzo Mellone"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span style="color:#94a3b8;font-size:13px;text-align:center;padding:16px">Foto próximamente</span>`;
                    }
                  }}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold">Enzo Mellone</h3>
              <p className="text-primary font-medium mt-1 mb-4">Fundador</p>
              <div className="space-y-3 text-base leading-relaxed text-foreground/80 mb-6">
                <p>
                  Especialista en operaciones y mejora continua con foco en educación. Más de una década trabajando en organizaciones educativas, desde la gestión de equipos hasta el diseño de procesos a escala regional.
                </p>
                <p>
                  Lideró la expansión operativa de Utel Universidad a más de 8 países en América Latina — desde el research de mercado hasta el setup de equipos comerciales, de atención y la vinculación institucional en cada uno de ellos.
                </p>
                <p>
                  Ha trabajado como consultor operativo en proyectos vinculados a ed techs y universidades, acompañando transformaciones digitales, rediseño de procesos y desarrollo de equipos en distintos contextos educativos.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/enzomellone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
              >
                <Linkedin size={16} />
                Ver perfil en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA oscuro */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Hablemos</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Si estás pensando en mejorar cómo opera tu equipo o tu organización educativa, podemos ver juntos si hay algo concreto por dónde empezar.
          </p>
          <a
            href="https://www.linkedin.com/company/praxia-site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-white/90 transition text-sm"
          >
            <Linkedin size={16} />
            Seguinos en LinkedIn
          </a>
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

export default QuienesSomos;
