import React, { Fragment, useState } from "react";

function Citas({ nombre, dueno, fecha, hora, sintomas }) {
  const [citaEliminada, setCitaEliminada] = useState(false);

  const handleClick = () => {
    setCitaEliminada(!citaEliminada);
  };

  return !citaEliminada && (
    <Fragment>
      <div className="citas">
        <p>Mascota: <span>{nombre}</span></p>
        <p>Dueño: <span>{dueno}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>
        <button className="button eliminar u-full-width" onClick={handleClick}>
          Eliminar ×
        </button>
      </div>
    </Fragment>
  );
}

export default Citas;
