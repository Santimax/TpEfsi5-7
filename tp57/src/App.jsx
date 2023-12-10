import React, { useState } from 'react';
import Ingresos from './Components/Ingresos';
import Citas from './Components/Citas';

function App() {
  const [citas, setCitas] = useState([]);
  const [mostrarCitas, setMostrarCitas] = useState(false);

  const addCita = (nuevaCita) => {
    // Agregar la nueva cita al estado de citas
    setCitas([...citas, nuevaCita]);
    // Mostrar la lista de citas después de agregar una cita
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
                  citas.map((e, index) => (
                    <Citas
                      key={index}
                      mascota={e.mascota}
                      dueño={e.dueño}
                      fecha={e.fecha}
                      hora={e.hora}
                      sintomas={e.sintomas}
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
