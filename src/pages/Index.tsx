import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Users, Workflow, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      mensaje: "",
    },
  });

  const onSubmit = (data: any) => {
    toast({
      title: "Consulta enviada",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            alt="Consultora trabajando"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-medium mb-6">
              Praxia | Consultoría Estratégica
            </span>
            <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
              Transformamos procesos en{" "}
              <span className="text-secondary-DEFAULT">resultados medibles</span>
            </h1>
            <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Optimizamos los procesos de tu producto para maximizar su eficiencia
              y potenciar su crecimiento en el mercado.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full"
                >
                  Agenda una consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Agenda una consulta</DialogTitle>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Nombre completo"
                      {...form.register("nombre", { required: true })}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...form.register("email", { required: true })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Empresa"
                      {...form.register("empresa", { required: true })}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="¿Cómo podemos ayudarte?"
                      {...form.register("mensaje", { required: true })}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary-DEFAULT text-secondary-foreground hover:bg-secondary-DEFAULT/90"
                  >
                    Enviar consulta
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
                className="glass-card p-8 rounded-2xl relative overflow-hidden group"
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
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-secondary-DEFAULT transition-colors"
                  >
                    Saber más
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="Equipo trabajando"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              ¿Listo para transformar tu producto?
            </h2>
            <p className="body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a optimizar tus procesos y alcanzar
              tus objetivos de negocio.
            </p>
            <Button
              size="lg"
              className="bg-secondary-DEFAULT hover:bg-secondary-DEFAULT/90 text-white rounded-full"
            >
              Contactar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Users,
    title: "Consultoría Estratégica",
    description:
      "Análisis profundo y recomendaciones para optimizar los procesos de tu producto.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    icon: Workflow,
    title: "Optimización de Procesos",
    description:
      "Mejoramos la eficiencia operativa y reducimos costos innecesarios.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    icon: Target,
    title: "Desarrollo de Producto",
    description:
      "Estrategias para evolucionar tu producto según las necesidades del mercado.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

export default Index;