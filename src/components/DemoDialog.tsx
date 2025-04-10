import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { toast } from '@/hooks/use-toast'

const DemoDialog = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    toast({
      title: "Enviando mensaje...",
      description: "Espera un momento mientras procesamos tu solicitud.",
    });

    const formBody = new URLSearchParams()
    formBody.append('name', name)
    formBody.append('email', email)
    formBody.append('company', company)
    formBody.append('user', 'PraxiaWeb')
    formBody.append('api_key', 'xd0in19nkDcNJ9U2')
    formBody.append('subject', `Consulta desde Praxia Web: Demo Solicitada`)

    try {
      const response = await fetch(
        'https://services.darideveloper.com/contact-form/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody.toString(),
        }
      )

      if (response.ok) {
        toast({
          title: 'Mensaje enviado',
          description: 'Nos pondremos en contacto contigo pronto. ¡Gracias!',
        })
      } else {
        toast({
          title: 'Error',
          description:
            'Hubo un problema al enviar tu mensaje. Intenta de nuevo.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Error de red',
        description: 'No se pudo conectar con el servidor. Intenta más tarde.',
        variant: 'destructive',
      })
    }

    setIsSubmitting(false)
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button variant='outline'>Solicitar demo</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Solicita una demostración</DialogTitle>
            <DialogDescription>
              Completa tus datos para programar una demo personalizada de
              nuestras soluciones.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Nombre</Label>
              <Input
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Tu nombre'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Correo electrónico</Label>
              <Input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='tu@empresa.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='company'>Empresa</Label>
              <Input
                id='company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder='Nombre de tu empresa'
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar demo'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default DemoDialog
