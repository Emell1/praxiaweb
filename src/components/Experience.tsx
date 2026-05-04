import { motion } from "framer-motion";

const experiences = [
  {
    org: "Utel Universidad",
    role: "Gerencia Sr. de Mejora Continua",
    period: "3 años",
    description:
      "Universidad 100% online con presencia en más de 8 países de América Latina. Lideramos procesos de mejora en calidad académica, formación de equipos y operaciones digitales a escala regional.",
    type: "Universidad online",
  },
  {
    org: "Griky",
    role: "Arquitectura Operativa",
    period: "Actual",
    description:
      "Ed tech especializada en desarrollo de portafolio académico para universidades. Trabajamos en eficientar la fábrica de contenido: desde la detección de demanda hasta la entrega del curso en el LMS.",
    type: "Ed tech",
  },
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
          <h2 className="heading-lg mb-2">Experiencia en el sector</h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Hemos trabajado desde adentro de organizaciones de educación. No como observadores externos, sino gestionando equipos, rediseñando procesos y midiendo resultados.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {exp.type}
                </span>
                <h3 className="text-xl font-semibold mt-4">{exp.org}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {exp.role} · {exp.period}
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/80">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
