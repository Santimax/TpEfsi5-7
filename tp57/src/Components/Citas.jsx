// Citas.jsx
import React, { useContext } from 'react';
import { CitasContext } from '../context/CitasContext';

function Citas() {
  const { citas, setCitas } = useContext(CitasContext);
  return (
    <div>
      <h2>Administra tus citas</h2>
      {citas.length ? (
        citas.map((e, index) => (
          <div key={index}>
            <p>Mascota: {e.mascota}</p>
            <p>Dueño: {e.dueño}</p>
            <p>Fecha: {e.fecha}</p>
            <p>Hora: {e.hora}</p>
            <p>Síntomas: {e.sintomas}</p>
          </div>
        ))
      ) : (
        <p>No hay citas disponibles.</p>
      )}
    </div>
  );
}

export default Citas;
