import React from "react";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/citas">Citas</Link></li>
        <li><Link to="/pacientes">Pacientes</Link></li>
        <li><Link to="/medicos">Médicos</Link></li>
        <li><Link to="/areas-medicas">Áreas Médicas</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
