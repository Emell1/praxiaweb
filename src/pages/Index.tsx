import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import SEO from '@/components/SEO';
import ProcessCard from '@/components/ProcessCard';
import Steps from '@/components/Steps';
import Experience from '@/components/Experience';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Praxia — Consultoría de operaciones para educación"
        description="Ayudo a universidades y ed techs a mejorar cómo operan sus equipos: procesos, formación, estructura y ejecución. Experiencia directa en Utel y Griky."
        keywords="consultoría educación superior, operaciones ed tech, mejora continua universidades, procesos educativos, Utel, Griky"
      />
      <NavBar />
      <Hero />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-lg mb-2">En qué trabajo</h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Cuatro áreas donde suelo encontrar los mayores cuellos de botella en organizaciones educativas.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ProcessCard
              title="Operaciones comerciales"
              subtitle="Que el proceso de venta no frene el crecimiento"
              description="En educación, el ciclo de inscripción tiene particularidades propias. Revisamos cómo entran los prospectos, qué hace el equipo con ellos y qué pasa hasta la matrícula. Menos improvisación, más consistencia."
              to="/servicios/comercial"
            />
            <ProcessCard
              title="Atención y soporte al estudiante"
              subtitle="Que los problemas se resuelvan antes de que escalen"
              description="Ordenamos cómo llegan las consultas, quién resuelve qué y con qué información. Documentamos lo frecuente y definimos qué tiene sentido automatizar. El resultado: menos rebotes y equipos que saben qué hacer."
              to="/servicios/soporte"
            />
            <ProcessCard
              title="Incorporación de personas"
              subtitle="Entradas más claras, arranques más rápidos"
              description="En organizaciones que crecen rápido, el onboarding suele ser lo primero que queda sin estructura. Definimos perfiles, ordenamos el proceso de entrevistas y construimos una rampa de incorporación que funciona sin depender de una sola persona."
              to="/servicios/reclutamiento-onboarding"
            />
            <ProcessCard
              title="Formación de equipos"
              subtitle="Que lo que se enseña se vea en el trabajo"
              description="Diseño programas cortos para equipos operativos y mandos medios, centrados en lo que se necesita hacer mejor. Sin teoría suelta: casos reales, práctica concreta y seguimiento."
              to="/servicios/formacion-ejecucion"
            />
          </div>
        </div>
      </section>

      <Experience />

      <Steps
        steps={[
          {
            title: "Entender primero",
            description:
              "Antes de proponer nada, me tomo el tiempo de entender qué está pasando de verdad: dónde se pierden los esfuerzos, qué frustra al equipo y qué espera la organización.",
          },
          {
            title: "Hipótesis concreta",
            description:
              "Defino qué cambios probar y por qué creo que van a mover la aguja. No un plan de 80 páginas: una apuesta clara sobre el trabajo del día a día.",
          },
          {
            title: "Probar en pequeño",
            description:
              "Testeo los cambios en un espacio acotado antes de escalar. Lo que funciona en la realidad del equipo vale más que lo que se ve bien en un documento.",
          },
          {
            title: "Que quede funcionando",
            description:
              "El objetivo no es que dependan de mí. Lo que construimos juntos tiene que sostenerse cuando yo no esté.",
          },
        ]}
      />

      <CTA />
    </div>
  );
};

export default Index;
