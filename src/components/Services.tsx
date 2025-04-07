
import { motion } from "framer-motion";
import { ChevronRight, Users, Workflow, Target } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Consultoría Estratégica",
    description:
      "Análisis profundo y recomendaciones para optimizar los procesos de tu producto.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    path: "/servicios/consultoria-estrategica"
  },
  {
    icon: Workflow,
    title: "Optimización de Procesos",
    description:
      "Mejoramos la eficiencia operativa y reducimos costos innecesarios.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    path: "/servicios/optimizacion-procesos"
  },
  {
    icon: Target,
    title: "Desarrollo de Producto",
    description:
      "Estrategias para evolucionar tu producto según las necesidades del mercado.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    path: "/servicios/desarrollo-producto"
  },
];

export const Services = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Nuestros Servicios</h2>
          <p className="body-base text-gray-600 max-w-2xl mx-auto">
            Soluciones personalizadas para optimizar cada aspecto de tu producto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                />
              </div>
              <div className="relative z-10">
                <service.icon className="h-12 w-12 text-secondary-DEFAULT mb-6" />
                <h3 className="heading-md mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-primary hover:text-secondary-DEFAULT transition-colors"
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
