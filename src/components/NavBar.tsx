
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="font-bold text-xl">Praxia</Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
          <Link to="/servicios/consultoria-estrategica" className="text-gray-700 hover:text-blue-600">Servicios</Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          <Link to="/admin" className="text-gray-700 hover:text-blue-600">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
