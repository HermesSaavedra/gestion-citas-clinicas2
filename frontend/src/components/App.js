import React, { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Datos ingresados:\nNombre: ${nombre}\nEmail: ${email}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Plataforma de Gestión Médica</h1>
      
      <button onClick={() => alert("Agendar Cita")} style={styles.button}>
        Agendar Cita
      </button>
      
      <button onClick={() => alert("Ver Expedientes")} style={styles.button}>
        Ver Expedientes
      </button>

      <h2>Ingresar Datos</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
}

const styles = {
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: "5px",
    padding: "10px",
    fontSize: "16px",
    width: "200px",
  },
  submitButton: {
    marginTop: "10px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default App;
