interface Stat { label: string; value: string; }
interface StatsProps { title?: string; stats: Stat[]; }

export default function Stats({ title = "Resultados en 60–90 días", stats }: StatsProps) {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-6">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-lg border p-5 bg-white text-center">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
