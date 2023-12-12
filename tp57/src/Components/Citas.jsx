// Citas.jsx
import React, { useContext } from 'react';
import { CitasContext } from '../Context.jsx/CitasContext';

const Citas = () => {
  const { citas, setCitas } = useContext(CitasContext);

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };

  return (
    <div>
      {citas.length ? (
        citas.map((cita, index) => (
          <div key={index} className="cita-card">
            <p>Mascota: {cita.mascota}</p>
            <p>Dueño: {cita.dueño}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <p>Síntomas: {cita.sintomas}</p>
            <button onClick={() => eliminarCita(index)}>Eliminar Cita</button>
          </div>
        ))
      ) : (
        <p>No hay citas disponibles.</p>
      )}
    </div>
  );
};

export default Citas;
