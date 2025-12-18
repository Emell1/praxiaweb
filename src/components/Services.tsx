
import { motion } from "framer-motion";
import { ChevronRight, Users, Workflow, Target } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Optimización Comercial",
    description:
      "Ordenamos el funnel, estandarizamos cómo se vende y eliminamos fricción en prospecting, discovery, propuesta y cierre.",
    image: "/images/servicios/card-comercial.jpg",
    path: "/servicios/comercial"
  },
  {
    icon: Workflow,
    title: "Atención y Soporte",
    description:
      "Rutas y prioridades claras, guías de resolución y autoservicio transaccional. Subimos FCR, bajamos AHT y reducimos abandonos.",
    image: "/images/servicios/card-soporte.jpg",
    path: "/servicios/soporte"
  },
  {
    icon: Users,
    title: "Reclutamiento y Onboarding",
    description:
      "Hiring estructurado con scorecards y entrevistas consistentes. Onboarding 30/60/90 conectado con desempeño temprano del rol.",
    image: "/images/servicios/card-reclutamiento.jpg",
    path: "/servicios/reclutamiento-onboarding"
  },
  {
    icon: Target,
    title: "Formación para la Ejecución",
    description:
      "Formación aplicada por rol para mover KPIs. Rutas breves, práctica real, rúbricas claras y coaching a líderes.",
    image: "/images/servicios/card-formacion.jpg",
    path: "/servicios/formacion-ejecucion"
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-accent relative overflow-hidden">
      {/* Background image for entire section */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home/servicios-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Nuestros Servicios</h2>
          <p className="body-base text-gray-600 max-w-2xl mx-auto">
            Soluciones personalizadas para optimizar cada aspecto de tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                />
              </div>
              <div className="relative z-10">
                <service.icon className="h-12 w-12 text-secondary-DEFAULT mb-6" />
                <h3 className="heading-md mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center px-3 py-1.5 rounded-md text-white bg-[#4c6cb3] hover:bg-[#4c6cb3]/90 transition-colors"
                >
                  Saber más
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
