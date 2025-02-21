import React, { useState } from "react";
import './App.css';  // Asegúrate de tener un archivo CSS con los estilos

function App() {
<<<<<<< HEAD
  const handleButtonClick = (buttonName) => {
    alert(`Botón de ${buttonName} presionado`);
  };

  return (
    <div className="App">
      {/* Botones */}
      <div className="button-container">
        <button className="App-button" onClick={() => handleButtonClick('Citas')}>
          Citas
        </button>
        <button className="App-button" onClick={() => handleButtonClick('Doctores')}>
          Doctores
        </button>
      </div>

      {/* Imagen de fondo */}
      <div className="background-image">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
=======
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
>>>>>>> 6ac5aef (La interfaz del menu)
      </div>
    </div>
  );
}

export default App;
