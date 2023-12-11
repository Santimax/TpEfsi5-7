import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function Citas({ mascota, dueño, fecha, hora, sintomas }) {
  const [citaEliminada, setCitaEliminada] = useState(false);

  const handleClick = () => {
    setCitaEliminada(!citaEliminada);
  };

  return !citaEliminada && (
    <Fragment>
      <div className="cita">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{dueño}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Síntomas: <span>{sintomas}</span></p>
        <button className="button eliminar u-full-width" onClick={handleClick}>
          Eliminar  ×
        </button>
      </div>
    </Fragment>
  );
}

Citas.propTypes = {
  mascota: PropTypes.string.isRequired,
  dueño: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  sintomas: PropTypes.string,
};

export default Citas;
