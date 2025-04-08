
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
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
    // En un entorno real, aquí se enviaría el correo electrónico a info@praxia.site
    console.log("Enviando consulta a info@praxia.site:", data);
    
    toast({
      title: "Consulta enviada",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Nombre completo"
          {...form.register("nombre", { required: true })}
        />
        {form.formState.errors.nombre && (
          <p className="text-red-500 text-sm mt-1">El nombre es obligatorio</p>
        )}
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          {...form.register("email", { required: true })}
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">El email es obligatorio</p>
        )}
      </div>
      <div>
        <Input
          placeholder="Empresa"
          {...form.register("empresa", { required: true })}
        />
        {form.formState.errors.empresa && (
          <p className="text-red-500 text-sm mt-1">La empresa es obligatoria</p>
        )}
      </div>
      <div>
        <Textarea
          placeholder="¿Cómo podemos ayudarte?"
          {...form.register("mensaje", { required: true })}
          className="min-h-[120px]"
        />
        {form.formState.errors.mensaje && (
          <p className="text-red-500 text-sm mt-1">El mensaje es obligatorio</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full bg-secondary-DEFAULT text-secondary-foreground hover:bg-secondary-DEFAULT/90"
      >
        Enviar consulta
      </Button>
    </form>
  );
};
