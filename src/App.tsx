
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ConsultoriaEstrategica from './pages/servicios/ConsultoriaEstrategica';
import OptimizacionProcesos from './pages/servicios/OptimizacionProcesos';
import DesarrolloProducto from './pages/servicios/DesarrolloProducto';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servicios/consultoria-estrategica" element={<ConsultoriaEstrategica />} />
        <Route path="/servicios/optimizacion-procesos" element={<OptimizacionProcesos />} />
        <Route path="/servicios/desarrollo-producto" element={<DesarrolloProducto />} />
      </Routes>
    </Router>
  );
}

export default App;
