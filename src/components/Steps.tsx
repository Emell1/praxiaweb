import { motion } from "framer-motion";

interface Step { title: string; description: string; }
interface StepsProps { title?: string; steps: Step[]; }

export default function Steps({ title = "Cómo trabajamos", steps }: StepsProps) {
  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-2 text-white">{title}</h2>
          <p className="text-white/50 mb-10 max-w-xl">Sin grandes diagnósticos ni planes interminables. Así es como avanzamos.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur-sm"
            >
              <div className="h-8 w-8 rounded-md bg-white/10 text-white flex items-center justify-center font-semibold mb-3 text-sm">
                {i + 1}
              </div>
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-white/50 mt-2 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
