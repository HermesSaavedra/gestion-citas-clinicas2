import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Asegúrate de tener la ruta correcta

function Medicos() {
  const [medicos, setMedicos] = useState([]);
  const [search, setSearch] = useState("");

  // Función para obtener médicos desde Supabase
  useEffect(() => {
    const fetchMedicos = async () => {
      const { data, error } = await supabase
        .from("doctores") // Cambié "medicos" por "doctores"
        .select("*");

      if (error) {
        console.error("Error al obtener médicos:", error);
      } else {
        setMedicos(data);
      }
    };

    fetchMedicos();
  }, []); // Se ejecuta solo una vez al montar el componente

  // Filtrar médicos por nombre o especialidad
  const filteredMedicos = medicos.filter(
    (medico) =>
      medico.nombre.toLowerCase().includes(search.toLowerCase()) ||
      medico.especialidad.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="medicos-container">
      <h1>Lista de Médicos</h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar médico por nombre o especialidad..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Tabla de médicos */}
      <table className="medicos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Especialidad</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicos.length > 0 ? (
            filteredMedicos.map((medico) => (
              <tr key={medico.doctor_id}> {/* Cambio de medico.id a medico.doctor_id */}
                <td>{medico.doctor_id}</td>
                <td>{medico.nombre}</td>
                <td>{medico.apellido}</td>
                <td>{medico.especialidad}</td>
                <td>{medico.telefono}</td>
                <td>{medico.correo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No hay médicos registrados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Medicos;
