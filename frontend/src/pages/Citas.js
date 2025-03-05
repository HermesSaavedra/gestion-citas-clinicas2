import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

function Citas() {
  const [citas, setCitas] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [doctores, setDoctores] = useState([]);
  const [mostrarCitas, setMostrarCitas] = useState(false);
  const [editando, setEditando] = useState(false);
  const [citaIdEditando, setCitaIdEditando] = useState(null);

  const [formData, setFormData] = useState({
    paciente_id: "",
    doctor_id: "",
    motivo: "",
    estado: "pendiente",
  });

  useEffect(() => {
    const fetchPacientes = async () => {
      const { data, error } = await supabase.from("pacientes").select("paciente_id, nombre, apellido");
      if (!error) setPacientes(data);
    };

    const fetchDoctores = async () => {
      const { data, error } = await supabase.from("doctores").select("doctor_id, nombre, apellido");
      if (!error) setDoctores(data);
    };

    fetchPacientes();
    fetchDoctores();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editando) {
      // Actualizar cita existente
      const { error } = await supabase.from("citas").update(formData).eq("id", citaIdEditando);

      if (error) {
        alert("Error al actualizar la cita: " + error.message);
      } else {
        alert("Cita actualizada con éxito");
        setEditando(false);
        setCitaIdEditando(null);
      }
    } else {
      // Registrar nueva cita
      const fecha = new Date().toISOString();
      const { error } = await supabase.from("citas").insert([{ ...formData, fecha }]);

      if (error) {
        alert("Error al registrar la cita: " + error.message);
      } else {
        alert("Cita registrada con éxito");
      }
    }

    cargarCitas();
    resetForm();
  };

  const cargarCitas = async () => {
    const { data, error } = await supabase
      .from("citas")
      .select("id, paciente_id, doctor_id, fecha, motivo, estado, pacientes (nombre, apellido), doctores (nombre, apellido)");

    if (!error) {
      setCitas(data);
    }
  };

  const eliminarCita = async (id) => {
    const { error } = await supabase.from("citas").delete().eq("id", id);
    if (!error) {
      setCitas(citas.filter((cita) => cita.id !== id));
    } else {
      alert("Error al eliminar la cita: " + error.message);
    }
  };

  const editarCita = (cita) => {
    setFormData({
      paciente_id: cita.paciente_id,
      doctor_id: cita.doctor_id,
      motivo: cita.motivo,
      estado: cita.estado,
    });
    setEditando(true);
    setCitaIdEditando(cita.id);
  };

  const resetForm = () => {
    setFormData({ paciente_id: "", doctor_id: "", motivo: "", estado: "pendiente" });
    setEditando(false);
    setCitaIdEditando(null);
  };

  return (
    <div>
      <h1>Gestión de Citas</h1>

      <h2>{editando ? "Editar Cita" : "Registrar Nueva Cita"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Paciente:
          <select name="paciente_id" value={formData.paciente_id} onChange={handleChange} required>
            <option value="">Seleccione un paciente</option>
            {pacientes.map((p) => (
              <option key={p.paciente_id} value={p.paciente_id}>
                {p.nombre} {p.apellido}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Doctor:
          <select name="doctor_id" value={formData.doctor_id} onChange={handleChange} required>
            <option value="">Seleccione un doctor</option>
            {doctores.map((d) => (
              <option key={d.doctor_id} value={d.doctor_id}>
                {d.nombre} {d.apellido}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Motivo de la Consulta:
          <textarea name="motivo" value={formData.motivo} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Estado:
          <select name="estado" value={formData.estado} onChange={handleChange} required>
            <option value="pendiente">Pendiente</option>
            <option value="confirmada">Confirmada</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </label>
        <br />

        <button type="submit">{editando ? "Actualizar Cita" : "Registrar Cita"}</button>
        {editando && <button onClick={resetForm}>Cancelar Edición</button>}
      </form>

      <h2>Lista de Citas</h2>
      <button onClick={() => setMostrarCitas(!mostrarCitas)}>
        {mostrarCitas ? "Ocultar Citas" : "Mostrar Citas"}
      </button>

      {mostrarCitas && (
        citas.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Doctor</th>
                <th>Fecha</th>
                <th>Motivo</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => (
                <tr key={cita.id}>
                  <td>{cita.pacientes?.nombre} {cita.pacientes?.apellido}</td>
                  <td>{cita.doctores?.nombre} {cita.doctores?.apellido}</td>
                  <td>{new Date(cita.fecha).toLocaleString()}</td>
                  <td>{cita.motivo}</td>
                  <td>{cita.estado}</td>
                  <td>
                    <button onClick={() => editarCita(cita)}>Editar</button>
                    <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay citas registradas.</p>
        )
      )}
    </div>
  );
}

export default Citas;
