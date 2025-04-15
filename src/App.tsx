
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import BlogPage from './pages/blog/BlogPage';
import BlogPost from './pages/blog/BlogPost';
import ContactPage from './pages/ContactPage';
import ConsultoriaEstrategica from './pages/servicios/ConsultoriaEstrategica';
import OptimizacionProcesos from './pages/servicios/OptimizacionProcesos';
import SolucionesInternas from './pages/servicios/SolucionesInternas';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogEditor from './pages/admin/AdminBlogEditor';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/servicios/consultoria-estrategica" element={<ConsultoriaEstrategica />} />
        <Route path="/servicios/optimizacion-procesos" element={<OptimizacionProcesos />} />
        <Route path="/servicios/soluciones-internas" element={<SolucionesInternas />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/blog/new" element={
          <ProtectedRoute>
            <AdminBlogEditor />
          </ProtectedRoute>
        } />
        <Route path="/admin/blog/edit/:id" element={
          <ProtectedRoute>
            <AdminBlogEditor />
          </ProtectedRoute>
        } />
      </Routes>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
