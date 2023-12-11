import React, { useState } from 'react';
import Ingresos from './Components/Ingresos';
import Citas from './Components/Citas';

function App() {
  const [citas, setCitas] = useState([]);
  const [mostrarCitas, setMostrarCitas] = useState(false);

  const addCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
    setMostrarCitas(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h2>Crear mi Cita</h2>
              <Ingresos onAddCita={addCita} />
            </div>
            <div className="one-half column">
              <h2>Administra tus citas</h2>
              {mostrarCitas ? (
                citas.length ? (
                  citas.map((dato, ID) => (
                    <Citas
                      key={ID}
                      mascota={dato.mascota}
                      dueño={dato.dueño}
                      fecha={dato.fecha}
                      hora={dato.hora}
                      sintomas={dato.sintomas}
                    />
                  ))
                ) : (
                  <p>No hay citas disponibles.</p>
                )
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
