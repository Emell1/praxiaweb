import { motion } from "framer-motion";
import { Globe, TrendingUp, Users, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Expansión a 8+ países",
    description:
      "Lideramos la apertura de operaciones educativas en más de 8 países de América Latina: research de mercado, setup comercial, atención y vinculación institucional.",
  },
  {
    icon: TrendingUp,
    title: "Mejora continua a escala",
    description:
      "Diseñamos e implementamos sistemas de mejora continua en organizaciones educativas con operaciones distribuidas, logrando consistencia sin uniformidad forzada.",
  },
  {
    icon: Users,
    title: "Formación de equipos operativos",
    description:
      "Desarrollamos equipos comerciales, de soporte y líderes intermedios en contextos de crecimiento rápido, donde no hay tiempo para aprender de cero.",
  },
  {
    icon: Cpu,
    title: "Transformación de procesos con tecnología",
    description:
      "Acompañamos procesos de adopción tecnológica en organizaciones educativas: desde el rediseño del flujo hasta que el equipo lo sostiene solo.",
  },
];

const clients = [
  { name: "Utel Universidad", logo: "/logo-utel.png" },
  { name: "Griky", logo: "/logo-griky.png" },
];

export default function Experience() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-2">Lo que sabemos hacer</h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Experiencia acumulada trabajando desde adentro de organizaciones educativas, no desde afuera.
          </p>

          {/* Tarjetas de capacidades */}
          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="rounded-xl border bg-white p-6 shadow-sm flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clientes / casos */}
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Organizaciones con las que hemos trabajado
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              {clients.map((c, i) => (
                <div
                  key={i}
                  className="rounded-lg border bg-white px-6 py-4 shadow-sm flex items-center justify-center"
                  style={{ height: "64px" }}
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-8 w-auto object-contain grayscale opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
