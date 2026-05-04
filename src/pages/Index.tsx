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
        description="Ayudamos a universidades y ed techs a mejorar cómo operan sus equipos: procesos comerciales, atención al estudiante, desarrollo de equipos y transformación digital."
        keywords="consultoría educación superior, operaciones ed tech, mejora continua universidades, transformación digital educación"
      />
      <NavBar />
      <Hero />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-lg mb-2">En qué trabajamos</h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Cuatro áreas donde solemos encontrar los mayores cuellos de botella en organizaciones educativas.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ProcessCard
              title="Operaciones comerciales"
              subtitle="Que el proceso de captación acompañe el crecimiento"
              description="El ciclo de inscripción en educación tiene lógica propia. Ordenamos cómo entran los prospectos, qué hace el equipo con ellos y qué pasa hasta la matrícula. Menos improvisación, más consistencia en cada etapa."
              to="/servicios/comercial"
            />
            <ProcessCard
              title="Atención al estudiante"
              subtitle="Que los problemas se resuelvan antes de que escalen"
              description="Ordenamos cómo llegan las consultas, quién resuelve qué y con qué información. Documentamos lo frecuente y definimos qué tiene sentido automatizar. Menos rebotes, equipos con más foco en lo que importa."
              to="/servicios/soporte"
            />
            <ProcessCard
              title="Desarrollo de equipos"
              subtitle="Incorporaciones sólidas y formación que se ve en el trabajo"
              description="Trabajamos en cómo se incorpora gente nueva y cómo se desarrolla al equipo que ya está. Desde la definición del perfil hasta la rampa de 90 días y los programas de formación aplicada."
              to="/servicios/desarrollo-equipos"
            />
            <ProcessCard
              title="Transformación digital"
              subtitle="Tecnología que mejora cómo se trabaja, no que se suma encima"
              description="Acompañamos el rediseño de procesos con tecnología y la adopción real por parte del equipo. No somos implementadores: somos los que aseguran que el cambio llegue al trabajo del día a día."
              to="/servicios/transformacion-digital"
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
              "Antes de proponer nada, nos tomamos el tiempo de entender qué está pasando de verdad: dónde se pierden los esfuerzos, qué frustra al equipo y qué espera la organización.",
          },
          {
            title: "Hipótesis concreta",
            description:
              "Definimos qué cambios probar y por qué creemos que van a mover la aguja. No un plan de 80 páginas: una apuesta clara sobre el trabajo del día a día.",
          },
          {
            title: "Probar en pequeño",
            description:
              "Testeamos los cambios en un espacio acotado antes de escalar. Lo que funciona en la realidad del equipo vale más que lo que se ve bien en un documento.",
          },
          {
            title: "Que quede funcionando",
            description:
              "El objetivo no es que dependan de nosotros. Lo que construimos juntos tiene que sostenerse cuando nos vayamos.",
          },
        ]}
      />

      <CTA />
    </div>
  );
};

export default Index;
