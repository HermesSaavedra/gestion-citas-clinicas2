import React from "react";
import { useNavigate } from "react-router-dom"; // Para la navegación

function Home() {
  const navigate = useNavigate(); // Hook para la navegación

  const handleStart = () => {
    navigate("/citas"); // Redirige a la página de gestión de citas
  };

  return (
    <div className="home-container">
      {/* Encabezado */}
      <header className="home-header">
        <h1>Bienvenido a la Plataforma de Gestión Médica</h1>
        <p>Administra citas y expedientes médicos de manera sencilla y eficiente.</p>
      </header>

      {/* Sección de información */}
      <section className="home-info">
        <h2>¿Qué puedes hacer aquí?</h2>
        <ul>
          <li>📅 Registrar y administrar citas médicas</li>
          <li>👩‍⚕️ Gestionar información de pacientes y médicos</li>
          <li>🔔 Enviar recordatorios automáticos por WhatsApp</li>
          <li>📊 Acceder a reportes y estadísticas</li>
        </ul>
      </section>

      {/* Botón de inicio */}
      <div className="home-start">
        <button onClick={handleStart} className="btn-primary">
          📌 Comenzar
        </button>
      </div>

      {/* Pie de página */}
      <footer className="home-footer">
        <p>📍 Plataforma de Gestión Médica - Bolivia</p>
        <p>© 2025 Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Home;
