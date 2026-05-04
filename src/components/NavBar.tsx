import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';

const NavBar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <Link to="/" className="text-foreground hover:text-blue-600">Inicio</Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="text-foreground hover:text-blue-600 inline-flex items-center">
          Servicios <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background">
          <DropdownMenuItem asChild>
            <Link to="/servicios/comercial" className="w-full">Operaciones Comerciales</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/servicios/soporte" className="w-full">Atención al Estudiante</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/servicios/desarrollo-equipos" className="w-full">Desarrollo de Equipos</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/servicios/transformacion-digital" className="w-full">Transformación Digital</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link to="/quienes-somos" className="text-foreground hover:text-blue-600">Quiénes somos</Link>
      <Link to="/contacto" className="text-foreground hover:text-blue-600">Contacto</Link>
    </>
  );

  return (
    <nav className="bg-background py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Praxia Logo"
            style={{ height: "40px", width: "auto" }}
            className="mr-2"
          />
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] pt-10">
              <div className="flex flex-col space-y-6 mt-8">
                <Link to="/" className="text-foreground hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>
                  Inicio
                </Link>

                <div className="flex flex-col space-y-2">
                  <div className="text-foreground text-lg mb-2">Servicios</div>
                  <Link to="/servicios/comercial" className="text-foreground hover:text-blue-600 pl-2" onClick={() => setIsOpen(false)}>
                    Operaciones Comerciales
                  </Link>
                  <Link to="/servicios/soporte" className="text-foreground hover:text-blue-600 pl-2" onClick={() => setIsOpen(false)}>
                    Atención al Estudiante
                  </Link>
                  <Link to="/servicios/desarrollo-equipos" className="text-foreground hover:text-blue-600 pl-2" onClick={() => setIsOpen(false)}>
                    Desarrollo de Equipos
                  </Link>
                  <Link to="/servicios/transformacion-digital" className="text-foreground hover:text-blue-600 pl-2" onClick={() => setIsOpen(false)}>
                    Transformación Digital
                  </Link>
                </div>

                <Link to="/quienes-somos" className="text-foreground hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>
                  Quiénes somos
                </Link>
                <Link to="/contacto" className="text-foreground hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>
                  Contacto
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="hidden md:flex space-x-6">
            <NavItems />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
