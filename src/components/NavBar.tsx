
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-background py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="font-bold text-xl">Praxia</Link>
        <div className="space-x-6">
          <Link to="/" className="text-foreground hover:text-blue-600">Inicio</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-blue-600 inline-flex items-center">
              Servicios <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background">
              <DropdownMenuItem asChild>
                <Link to="/servicios/consultoria-estrategica" className="w-full">
                  Consultoría Estratégica
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/optimizacion-procesos" className="w-full">
                  Optimización de Procesos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/desarrollo-producto" className="w-full">
                  Desarrollo de Producto
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/blog" className="text-foreground hover:text-blue-600">Blog</Link>
          <Link to="/admin" className="text-foreground hover:text-blue-600">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
