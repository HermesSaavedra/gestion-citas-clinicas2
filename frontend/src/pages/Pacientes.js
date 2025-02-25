// src/pages/Pacientes.js
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";  // Asegúrate de tener la ruta correcta

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [search, setSearch] = useState("");

  // Función para obtener pacientes desde Supabase
  useEffect(() => {
    const fetchPacientes = async () => {
      const { data, error } = await supabase
        .from("pacientes")  // Asegúrate de que tu tabla se llame 'pacientes'
        .select("*");

      if (error) {
        console.error("Error al obtener pacientes:", error);
      } else {
        setPacientes(data);
      }
    };

    fetchPacientes();
  }, []);  // Se ejecuta solo una vez al montar el componente

  // Filtrar pacientes por nombre
  const filteredPacientes = pacientes.filter((paciente) =>
    paciente.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pacientes-container">
      <h1>Lista de Pacientes</h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar paciente..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Tabla de pacientes */}
      <table className="pacientes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Fecha de Cita</th>
          </tr>
        </thead>
        <tbody>
          {filteredPacientes.length > 0 ? (
            filteredPacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td>{paciente.id}</td>
                <td>{paciente.nombre}</td>
                <td>{paciente.edad}</td>
                <td>{paciente.telefono}</td>
                <td>{paciente.fechaCita}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay pacientes registrados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Pacientes;
