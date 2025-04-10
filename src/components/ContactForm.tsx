
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    } = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'El email es obligatorio';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    }

    if (!subject.trim()) {
      newErrors.subject = 'El asunto es obligatorio';
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
      isValid = false;
    } else if (message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    toast({
      title: "Enviando mensaje...",
      description: "Espera un momento mientras procesamos tu solicitud.",
    });

    // Convertir los datos en formato x-www-form-urlencoded
    const formBody = new URLSearchParams();
    formBody.append('name', name);
    formBody.append('email', email);
    formBody.append('subject', `Consulta desde Praxia Web: ${subject}`);
    formBody.append('message', message);
    formBody.append('user', 'PraxiaWeb');
    formBody.append('api_key', 'xd0in19nkDcNJ9U2');

    // Simulate form submission
    try {
      const response = await fetch('https://services.darideveloper.com/contact-form/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });

    if (response.ok) {
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto. ¡Gracias!",
      });
    } else {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Error de red",
      description: "No se pudo conectar con el servidor. Intenta más tarde.",
      variant: "destructive",
    });
  }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input 
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Tu nombre"
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tu@email.com"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Asunto</Label>
        <Input 
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          placeholder="¿En qué podemos ayudarte?"
          className={errors.subject ? "border-destructive" : ""}
        />
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea 
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Escribe tu mensaje aquí"
          className={`min-h-[150px] ${errors.message ? "border-destructive" : ""}`}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>
      
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </Button>
    </form>
  );
};

export default ContactForm;
