import React, { useState } from "react";
import "./App.css"; // Asegúrate de tener un archivo CSS con los estilos

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Datos ingresados:\nNombre: ${nombre}\nEmail: ${email}`);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Plataforma de Gestión Médica</h1>
        <p>Organiza citas y gestiona expedientes de tus pacientes.</p>
      </header>

      <div className="action-buttons">
        <button onClick={() => alert("Agendar Cita")} className="button-primary">
          Agendar Cita
        </button>
        <button onClick={() => alert("Ver Expedientes")} className="button-secondary">
          Ver Expedientes
        </button>
        <button onClick={() => alert("Gestionar Pacientes")} className="button-tertiary">
          Gestionar Pacientes
        </button>
        <button onClick={() => alert("Enviar Recordatorio")} className="button-warning">
          Enviar Recordatorio
        </button>
        <button onClick={() => alert("Configuraciones")} className="button-settings">
          Configuraciones
        </button>
      </div>

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
      </div>
    </div>
  );
}

export default App;
