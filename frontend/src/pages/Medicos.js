import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

function Medicos() {
  const [medicos, setMedicos] = useState([]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    especialidad: "",
    telefono: "",
    correo: "",
  });
  const [editando, setEditando] = useState(null); // ID del médico en edición

  // Obtener la lista de doctores al cargar el componente
  useEffect(() => {
    cargarMedicos();
  }, []);

  const cargarMedicos = async () => {
    const { data, error } = await supabase.from("doctores").select("*");
    if (error) {
      console.error("Error al obtener médicos:", error);
    } else {
      setMedicos(data);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editando) {
      // Editar doctor
      const { error } = await supabase
        .from("doctores")
        .update(formData)
        .eq("doctor_id", editando);

      if (error) {
        alert("Error al actualizar el doctor: " + error.message);
      } else {
        alert("Doctor actualizado con éxito");
      }
    } else {
      // Registrar nuevo doctor
      const { error } = await supabase.from("doctores").insert([formData]);

      if (error) {
        alert("Error al registrar el doctor: " + error.message);
      } else {
        alert("Doctor registrado con éxito");
      }
    }

    setFormData({ nombre: "", apellido: "", especialidad: "", telefono: "", correo: "" });
    setEditando(null);
    cargarMedicos();
  };

  const handleEdit = (doctor) => {
    setFormData({
      nombre: doctor.nombre,
      apellido: doctor.apellido,
      especialidad: doctor.especialidad,
      telefono: doctor.telefono,
      correo: doctor.correo,
    });
    setEditando(doctor.doctor_id);
  };

  const handleDelete = async (doctor_id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar este doctor?");
    if (confirmar) {
      const { error } = await supabase.from("doctores").delete().eq("doctor_id", doctor_id);
      if (error) {
        alert("Error al eliminar el doctor: " + error.message);
      } else {
        alert("Doctor eliminado con éxito");
        cargarMedicos();
      }
    }
  };

  const filteredMedicos = medicos.filter(
    (medico) =>
      medico.nombre.toLowerCase().includes(search.toLowerCase()) ||
      medico.especialidad.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="medicos-container">
      <h1>Gestión de Médicos</h1>

      <h2>{editando ? "Editar Doctor" : "Registrar Nuevo Doctor"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Apellido:
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Especialidad:
          <input type="text" name="especialidad" value={formData.especialidad} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Teléfono:
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
        </label>
        <br />

        <label>
          Correo:
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
        </label>
        <br />

        <button type="submit">{editando ? "Actualizar Doctor" : "Registrar Doctor"}</button>
        {editando && <button onClick={() => setEditando(null)}>Cancelar</button>}
      </form>

      <h2>Lista de Médicos</h2>
      <input
        type="text"
        placeholder="Buscar médico por nombre o especialidad..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table className="medicos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Especialidad</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicos.length > 0 ? (
            filteredMedicos.map((medico) => (
              <tr key={medico.doctor_id}>
                <td>{medico.doctor_id}</td>
                <td>{medico.nombre}</td>
                <td>{medico.apellido}</td>
                <td>{medico.especialidad}</td>
                <td>{medico.telefono}</td>
                <td>{medico.correo}</td>
                <td>
                  <button onClick={() => handleEdit(medico)}>✏️ Editar</button>
                  <button onClick={() => handleDelete(medico.doctor_id)}>🗑 Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No hay médicos registrados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Medicos;
