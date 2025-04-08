
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
import { ArrowRight } from "lucide-react";

export const DemoDialog = () => {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      mensaje: "Hola! estoy interesado en una demostración de vuestra herrramienta OPTA...",
    },
  });

  const onSubmit = (data: any) => {
    // En un entorno real, aquí se enviaría el correo electrónico a info@praxia.site con el asunto específico
    console.log("Enviando solicitud de demo a info@praxia.site con asunto 'Consultas por Demo OPTA':", data);
    
    toast({
      title: "Solicitud de demo enviada",
      description: "Nos pondremos en contacto contigo para coordinar una demostración de OPTA.",
    });
    form.reset();
    form.setValue("mensaje", "Hola! estoy interesado en una demostración de vuestra herrramienta OPTA...");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full"
        >
          Solicitar una demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Solicitar una demo de OPTA</DialogTitle>
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
              placeholder="Mensaje"
              {...form.register("mensaje", { required: true })}
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-secondary-DEFAULT text-secondary-foreground hover:bg-secondary-DEFAULT/90"
          >
            Solicitar demo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
