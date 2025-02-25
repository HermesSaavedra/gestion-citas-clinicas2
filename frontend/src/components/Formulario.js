import React, { useState } from "react";
import { supabase } from "../supabaseClient";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !email) {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }

    const { data, error } = await supabase
      .from("pacientes")
      .insert([{ nombre, correo: email }]);

    if (error) {
      setMensaje("Error al guardar los datos.");
      console.error("Error:", error);
    } else {
      setMensaje("Datos guardados correctamente.");
      setNombre("");
      setEmail("");
    }
  };

  return (
    <div className="form-container">
      <h2>Ingresar Datos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default Formulario;
