import React, { useState } from "react";
import "./App.css"; // Asegúrate de tener un archivo CSS con estilos

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleButtonClick = (buttonName) => {
    alert(`Botón de ${buttonName} presionado`);
  };

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

      {/* Botones de acción */}
      <div className="button-container">
        <button className="App-button" onClick={() => handleButtonClick("Citas")}>
          Citas
        </button>
        <button className="App-button" onClick={() => handleButtonClick("Doctores")}>
          Doctores
        </button>
        <button className="button-primary" onClick={() => alert("Agendar Cita")}>
          Agendar Cita
        </button>
        <button className="button-secondary" onClick={() => alert("Ver Expedientes")}>
          Ver Expedientes
        </button>
      </div>

      {/* Formulario */}
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
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
