import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index';
import BlogPage from './pages/blog/BlogPage';
import BlogPost from './pages/blog/BlogPost';
import ContactPage from './pages/ContactPage';
import QuienesSomos from './pages/QuienesSomos';
import Comercial from './pages/servicios/comercial';
import Soporte from './pages/servicios/soporte';
import DesarrolloEquipos from './pages/servicios/desarrollo-equipos';
import TransformacionDigital from './pages/servicios/transformacion-digital';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogEditor from './pages/admin/AdminBlogEditor';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/servicios/comercial" element={<Comercial />} />
        <Route path="/servicios/soporte" element={<Soporte />} />
        <Route path="/servicios/desarrollo-equipos" element={<DesarrolloEquipos />} />
        <Route path="/servicios/transformacion-digital" element={<TransformacionDigital />} />
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
