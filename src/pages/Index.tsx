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
        description="Mejoramos 4 procesos clave en 60–90 días con cambios concretos en cómo se vende, cómo se atiende, cómo se incorpora gente y cómo se entrena a los equipos."
        keywords="optimización comercial, soporte, reclutamiento estructurado, onboarding, formación aplicada, playbooks, KPIs"
      />
      <NavBar />
      <Hero />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <ProcessCard
            title="Optimización Comercial"
            subtitle="Que tu proceso de ventas acompañe tu crecimiento"
            description="Revisamos cómo entran los leads, qué hace tu equipo con ellos y qué pasa hasta el cierre. Simplificamos etapas, ordenamos el uso del CRM y dejamos claro qué se espera en cada paso. Menos improvisación, más oportunidades bien trabajadas."
            to="/servicios/comercial"
          />
          <ProcessCard
            title="Atención y Soporte"
            subtitle="Que los problemas se resuelvan de verdad"
            description="Acomodamos los flujos de atención para que cada consulta llegue al lugar correcto, con prioridades claras y buena información para resolver. Documentamos lo más frecuente y definimos qué vale la pena automatizar. Menos rebotes, menos espera y un equipo que sabe qué hacer."
            to="/servicios/soporte"
          />
          <ProcessCard
            title="Reclutamiento y Onboarding"
            subtitle="Entradas más claras, rampas más cortas"
            description="Ponemos orden en cómo definís los perfiles, cómo entrevistás y cómo acompañás a las personas nuevas en sus primeros meses. Más claridad para el candidato, menos tiempo perdido para el equipo y un aterrizaje más rápido al nivel de desempeño que necesitás."
            to="/servicios/reclutamiento-onboarding"
          />
          <ProcessCard
            title="Formación para la Ejecución"
            subtitle="Que lo aprendido se vea en el trabajo"
            description="Diseñamos programas cortos y concretos para ventas, soporte y líderes, centrados en mejorar cómo se hace el trabajo del día a día. Menos teoría suelta, más práctica con casos reales, feedback claro y acompañamiento a quienes conducen los equipos."
            to="/servicios/formacion-ejecucion"
          />
        </div>
      </section>

      <Steps
        steps={[
          { title: "Objetivo", description: "Antes de tocar nada, acordamos qué tiene que mejorar para que valga la pena el proyecto. Puede ser vender mejor, responder más rápido o incorporar gente con menos caos, pero lo dejamos por escrito para no perdernos en el camino." },
          { title: "Hipótesis", description: "Definimos qué cambios vamos a probar y por qué creemos que eso va a mejorar la situación. No son grandes discursos, son apuestas concretas sobre el trabajo del día a día." },
          { title: "Testeo", description: "Probamos los cambios en un espacio acotado (un equipo, un segmento o unos pocos flujos) durante unas semanas. Miramos qué pasa en la realidad y ajustamos sobre eso, no sobre supuestos." },
          { title: "Medición", description: "Con lo aprendido, decidimos juntos si vale la pena escalar, si hay que ajustar o si conviene descartar la idea. La idea es que el proceso nuevo se pueda sostener cuando nosotros no estemos." },
        ]}
      />

      <Stats
        stats={[
          { label: "Más oportunidades bien trabajadas en cada etapa comercial.", value: "+10–20%" },
          { label: "Menos tiempo muerto entre un paso y otro del proceso de venta.", value: "−20–40%" },
          { label: "Mejores niveles de resolución en los flujos de soporte donde intervenimos.", value: "+10–15 pts" },
          { label: "Reducción del tiempo promedio que tarda tu equipo en atender y cerrar un caso.", value: "−10–20%" },
        ]}
      />

      <CTA />
    </div>
  );
};

export default Index;
