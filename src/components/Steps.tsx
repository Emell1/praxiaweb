interface Step { title: string; description: string; }
interface StepsProps { title?: string; steps: Step[]; }

export default function Steps({ title = "Cómo trabajamos", steps }: StepsProps) {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-6">{title}</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-lg border p-5 bg-white">
              <div className="h-8 w-8 rounded-md bg-primary text-white flex items-center justify-center font-semibold mb-3">
                {i + 1}
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
