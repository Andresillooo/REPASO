import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './/pages/Index/Index'; 
import InicioSesion from './pages/InicioSesion/InicioSesion'; 
import Registrarse from './pages/Registrarse/Registrarse'; 
import Productos from './pages/Productos/Productos'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} /> 
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/registro" element={<Registrarse />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}

export default App;
