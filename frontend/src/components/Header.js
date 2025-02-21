import React from 'react';

function Header() {
  return (
    <header>
      <h1>Plataforma de Gestión de Citas Médicas</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/appointments">Citas</a></li>
          <li><a href="/profile">Perfil</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
