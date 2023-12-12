// App.jsx
import React from 'react';
import Ingresos from './Components/Ingresos';
import Citas from './Components/Citas';
import { CitasProvider } from './Context.jsx/CitasContext';

function App() {
  return (
    <CitasProvider>
      <div className="App">
        <header className="App-header">
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <h2>Crear mi Cita</h2>
                <Ingresos />
              </div>
              <div className="one-half column">
                <h2>Administra tus citas</h2>
                <Citas />
              </div>
            </div>
          </div>
        </header>
      </div>
    </CitasProvider>
  );
}

export default App;
