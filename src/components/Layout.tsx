
import { ReactNode } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {children}
      <footer className="bg-background py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
