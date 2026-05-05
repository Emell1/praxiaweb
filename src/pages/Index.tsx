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

      {/* Servicios */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-lg mb-2">En qué trabajamos</h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Cuatro áreas donde solemos encontrar los mayores cuellos de botella en organizaciones educativas.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <ProcessCard
              title="Operaciones comerciales"
              subtitle="Que el proceso de captación acompañe el crecimiento"
              description="Ordenamos cómo entran los prospectos y qué pasa hasta la matrícula. Menos improvisación, más consistencia."
              to="/servicios/comercial"
            />
            <ProcessCard
              title="Atención al estudiante"
              subtitle="Que los problemas se resuelvan antes de que escalen"
              description="Ordenamos flujos de atención, documentamos lo frecuente y definimos qué automatizar."
              to="/servicios/soporte"
            />
            <ProcessCard
              title="Desarrollo de equipos"
              subtitle="Incorporaciones sólidas y formación que se ve en el trabajo"
              description="Desde la definición del perfil hasta la rampa de 90 días y los programas de formación aplicada."
              to="/servicios/desarrollo-equipos"
            />
            <ProcessCard
              title="Transformación digital"
              subtitle="Tecnología que mejora cómo se trabaja, no que se suma encima"
              description="Rediseñamos procesos con tecnología y acompañamos la adopción real por parte del equipo."
              to="/servicios/transformacion-digital"
            />
          </div>
        </div>
      </section>

      {/* Experiencia — fondo slate-50 */}
      <Experience />

      {/* Cómo trabajamos — fondo oscuro */}
      <Steps
        steps={[
          {
            title: "Entender primero",
            description: "Antes de proponer nada, entendemos qué está pasando de verdad: dónde se pierden los esfuerzos y qué espera la organización.",
          },
          {
            title: "Hipótesis concreta",
            description: "Definimos qué cambios probar y por qué creemos que van a mover la aguja.",
          },
          {
            title: "Probar en pequeño",
            description: "Testeamos en un espacio acotado. Lo que funciona en la realidad vale más que lo que se ve bien en papel.",
          },
          {
            title: "Que quede funcionando",
            description: "Lo que construimos juntos tiene que sostenerse cuando nos vayamos.",
          },
        ]}
      />

      <CTA />
    </div>
  );
};

export default Index;
