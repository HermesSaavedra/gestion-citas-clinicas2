import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Asegúrate de que la ruta sea correcta

function Citas() {
  const [citas, setCitas] = useState([]);
  const [formData, setFormData] = useState({
    identificacion: "",
    id_medico: "",
    fecha: "",
    motivo: "",
    estado: "pendiente", // Estado por defecto
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Inserta la nueva cita en Supabase
    const { data, error } = await supabase
      .from("citas") // Asegúrate de que la tabla en Supabase se llame "citas"
      .insert([
        {
          identificacion: formData.identificacion,
          id_medico: formData.id_medico,
          fecha: formData.fecha,
          motivo: formData.motivo,
          estado: formData.estado, // Puedes cambiar el estado si lo deseas
        },
      ]);

    if (error) {
      alert("Error al registrar la cita: " + error.message);
    } else {
      setCitas([...citas, data[0]]); // Agrega la cita registrada a la lista
      setFormData({
        identificacion: "",
        id_medico: "",
        fecha: "",
        motivo: "",
        estado: "pendiente", // Limpia el formulario
      });
      alert("Cita registrada con éxito");
    }
  };

  // Cargar las citas desde Supabase al cargar el componente
  const cargarCitas = async () => {
    const { data, error } = await supabase
      .from("citas")
      .select("*"); // Selecciona todos los registros de citas

    if (error) {
      console.error("Error al cargar las citas:", error.message);
    } else {
      setCitas(data);
    }
  };

  // Cargar las citas cuando el componente se monta
  useEffect(() => {
    cargarCitas();
  }, []);

  return (
    <div>
      <h1>Gestión de Citas</h1>
      <p>Aquí podrás administrar las citas médicas.</p>

      <h2>Registrar Nueva Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Identificación del Paciente:
          <input
            type="number"
            name="identificacion"
            value={formData.identificacion}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Identificación del Médico:
          <input
            type="number"
            name="id_medico"
            value={formData.id_medico}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Fecha y Hora:
          <input
            type="datetime-local"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Motivo de la Cita:
          <textarea
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Registrar Cita</button>
      </form>

      <h2>Lista de Citas</h2>
      {citas.length === 0 ? (
        <p>No hay citas registradas.</p>
      ) : (
        <ul>
          {citas.map((cita, index) => (
            <li key={index}>
              <strong>Paciente ID {cita.identificacion}</strong> - Fecha: {cita.fecha} 
              <br />
              Médico ID: {cita.id_medico} | Motivo: {cita.motivo} | Estado: {cita.estado}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Citas;
