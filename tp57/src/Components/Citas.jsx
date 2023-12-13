import React, { useContext } from 'react';
import { CitasContext } from '../Context/CitasContext';
import PropTypes from 'prop-types';

const Citas = () => {
  const { citas, setCitas } = useContext(CitasContext);

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };

  return (
    <div className="lista-citas">
      {citas.length ? (
        citas.map((cita, index) => (
          <div key={index} className="cita">
            <p><span className="bold-text">Mascota:</span> {cita.mascota}</p>
            <p><span className="bold-text">Dueño:</span> {cita.dueño}</p>
            <p><span className="bold-text">Fecha:</span> {cita.fecha}</p>
            <p><span className="bold-text">Hora:</span> {cita.hora}</p>
            <p><span className="bold-text">Síntomas:</span> {cita.sintomas}</p>
            <button onClick={() => eliminarCita(index)} className="button eliminar u-full-width">Eliminar ×</button>
          </div>
        ))
      ) : (
        <p>No hay citas disponibles.</p>
      )}
    </div>
  );
};

Citas.propTypes = {
  mascota: PropTypes.string.isRequired,
  dueño: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  sintomas: PropTypes.string,
};

export default Citas;
