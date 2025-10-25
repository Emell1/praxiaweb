import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import SEO from '@/components/SEO';
import ProcessCard from '@/components/ProcessCard';
import Steps from '@/components/Steps';
import Stats from '@/components/Stats';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Praxia — Procesos que mueven el negocio"
        description="Mejoramos 4 procesos clave en 60–90 días con playbooks claros, métricas y adopción real: Comercial, Soporte, Reclutamiento/Onboarding y Formación para la Ejecución."
        keywords="optimización comercial, soporte omnicanal, reclutamiento estructurado, onboarding 30/60/90, formación aplicada, enablement, playbooks, KPIs"
      />
      <NavBar />
      <Hero />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <ProcessCard
            title="Optimización Comercial"
            subtitle="Más conversión, menos ciclo"
            description="Ordenamos el funnel, estandarizamos cómo se vende y eliminamos fricción en prospecting, discovery, propuesta y cierre. Playbooks y cadencias que el equipo usa de verdad."
            to="/servicios/comercial"
          />
          <ProcessCard
            title="Atención y Soporte"
            subtitle="Resoluciones más rápidas"
            description="Rutas y prioridades claras, guías de resolución y autoservicio transaccional donde aporta. Subimos FCR, bajamos AHT y reducimos abandonos."
            to="/servicios/soporte"
          />
          <ProcessCard
            title="Reclutamiento y Onboarding"
            subtitle="Contrata mejor y acelera la rampa"
            description="Hiring estructurado con scorecards y entrevistas consistentes. Onboarding 30/60/90 conectado con desempeño temprano del rol."
            to="/servicios/reclutamiento-onboarding"
          />
          <ProcessCard
            title="Formación para la Ejecución"
            subtitle="Personas que ejecutan mejor"
            description="Formación aplicada por rol para mover KPIs. Rutas breves, práctica real, rúbricas claras y coaching a líderes."
            to="/servicios/formacion-ejecucion"
          />
        </div>
      </section>

      <Steps
        steps={[
          { title: "Objetivo", description: "Elegimos 1–2 KPIs que importan y establecemos la línea base." },
          { title: "Hipótesis", description: "Definimos qué cambiaremos y por qué debería mover la métrica." },
          { title: "Experimento", description: "Piloto de 6 semanas con responsables y entregables operativos." },
          { title: "Medición", description: "Decidimos escalar, iterar o descartar con evidencia." },
        ]}
      />

      <Stats
        stats={[
          { label: "Comercial: conversión por etapa", value: "+10–20%" },
          { label: "Comercial: tiempo de ciclo", value: "−20–40%" },
          { label: "Soporte: FCR (flujos piloto)", value: "+10–15 pts" },
          { label: "Soporte: AHT", value: "−10–20%" },
        ]}
      />

      <CTA />
    </div>
  );
};

export default Index;
