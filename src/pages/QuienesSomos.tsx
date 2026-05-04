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
        description="Praxia es una consultora especializada en operaciones para organizaciones de educación superior y ed tech. Conocé el equipo y el enfoque."
        keywords="Praxia consultoría, quiénes somos, equipo, educación superior, ed tech"
      />
      <NavBar />

      <main className="container mx-auto py-16 px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Encabezado */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quiénes somos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Praxia es una consultora especializada en organizaciones de educación superior y ed tech. Trabajamos en la brecha entre la estrategia y la ejecución: el lugar donde más se pierde.
            </p>
          </div>

          <Separator className="mb-16" />

          {/* Qué es Praxia */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Por qué existe Praxia</h2>
              <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                <p>
                  La mayoría de los problemas operativos en educación no son de estrategia ni de tecnología. Son de ejecución: procesos que nadie ordenó, equipos que no tienen claridad sobre qué se espera de ellos, cambios que se anuncian pero no llegan al trabajo del día a día.
                </p>
                <p>
                  Praxia existe para trabajar en eso. No con recetas genéricas ni con metodologías de libro, sino desde adentro de cada organización, entendiendo su realidad y construyendo soluciones que se puedan sostener.
                </p>
                <p>
                  Nuestro foco es la educación superior y las ed techs porque es donde tenemos experiencia real: sabemos cómo funcionan estas organizaciones, qué las frena y qué tipo de intervenciones generan resultados concretos.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Cómo trabajamos</h2>
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

          <Separator className="mb-16" />

          {/* Perfil */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-10">El equipo</h2>

            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Foto placeholder */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-100 border">
                  <img
                    src="/fotoabout.jpg"
                    alt="Enzo Mellone"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.style.display = "flex";
                      target.parentElement!.style.alignItems = "center";
                      target.parentElement!.style.justifyContent = "center";
                      target.parentElement!.innerHTML = `<span class="text-slate-400 text-sm text-center px-4">Foto próximamente</span>`;
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
                    Lideró la expansión operativa de Utel Universidad a más de 8 países en América Latina — desde el research de mercado hasta el setup de equipos comerciales y de atención en cada uno de ellos. Actualmente trabaja como arquitecto operativo en Griky, ed tech especializada en desarrollo de portafolio académico para universidades.
                  </p>
                  <p>
                    Su enfoque combina estrategia, liderazgo de equipos y capacidad de ejecución: sabe tanto diseñar el proceso como acompañar al equipo para que funcione en la práctica.
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/enzomellone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Linkedin size={18} />
                  Ver perfil en LinkedIn
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </main>

      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto py-8 px-4 text-center">
          <Separator className="mb-8" />
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default QuienesSomos;
