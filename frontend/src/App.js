import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Citas from "./pages/Citas";
import Pacientes from "./pages/Pacientes";
import Medicos from "./pages/Medicos";
import AreasMedicas from "./pages/AreasMedicas";
import Usuarios from "./pages/Usuarios";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/medicos" element={<Medicos />} />
            <Route path="/areas-medicas" element={<AreasMedicas />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
