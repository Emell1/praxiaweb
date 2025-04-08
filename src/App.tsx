
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ConsultoriaEstrategica from './pages/servicios/ConsultoriaEstrategica';
import OptimizacionProcesos from './pages/servicios/OptimizacionProcesos';
import DesarrolloProducto from './pages/servicios/DesarrolloProducto';
import BlogPage from './pages/blog/BlogPage';
import BlogPost from './pages/blog/BlogPost';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogEditor from './pages/admin/AdminBlogEditor';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from './components/ui/toaster';
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/consultoria-estrategica" element={<ConsultoriaEstrategica />} />
          <Route path="/servicios/optimizacion-procesos" element={<OptimizacionProcesos />} />
          <Route path="/servicios/desarrollo-producto" element={<DesarrolloProducto />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/blog/edit/:id" element={
            <ProtectedRoute>
              <AdminBlogEditor />
            </ProtectedRoute>
          } />
          <Route path="/admin/blog/new" element={
            <ProtectedRoute>
              <AdminBlogEditor />
            </ProtectedRoute>
          } />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;
