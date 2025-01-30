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

export const ContactDialog = () => {
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
  );
};