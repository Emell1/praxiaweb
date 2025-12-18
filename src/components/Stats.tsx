interface Stat { label: string; value: string; }
interface StatsProps { title?: string; stats: Stat[]; backgroundImage?: string; }

export default function Stats({ title = "Resultados en 60–90 días", stats, backgroundImage = "/images/home/stats-bg.jpg" }: StatsProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="heading-lg mb-6">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-lg border p-5 bg-white/90 backdrop-blur-sm text-center">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
