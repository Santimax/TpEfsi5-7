import React, { useState, useEffect } from 'react';
import Ingresos from './Components/Ingresos';
import Citas from './Components/Citas';

function App() {
  const [citas, setCitas] = useState(JSON.parse(localStorage.getItem('citas')) || []);


  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);


  const addCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
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
              <h2>Administra tus citas</h2>{
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
                )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
