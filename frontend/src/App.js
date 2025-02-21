import logo from './logo.svg';
import './App.css';

function App() {
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
      </div>
    </div>
  );
}

export default App;
