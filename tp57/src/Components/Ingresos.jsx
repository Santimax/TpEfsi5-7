import React, { useState } from 'react';

const Ingresos = ({ onAddCita }) => {
  const [formData, setFormData] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCita(formData);
    setFormData({
      mascota: '',
      dueño: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre Mascota</label>
      <input
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Nombre Mascota"
        value={formData.mascota}
        onChange={handleChange}
      />
      <label>Nombre Dueño</label>
      <input
        type="text"
        name="dueño"
        className="u-full-width"
        placeholder="Nombre dueño de la mascota"
        value={formData.dueño}
        onChange={handleChange}
      />
      <label>Fecha</label>
      <input
        type="date"
        name="fecha"
        className="u-full-width"
        value={formData.fecha}
        onChange={handleChange}
      />
      <label>Hora</label>
      <input
        type="time"
        name="hora"
        className="u-full-width"
        value={formData.hora}
        onChange={handleChange}
      />
      <label>Sintomas</label>
      <textarea
        name="sintomas"
        className="u-full-width"
        value={formData.sintomas}
        onChange={handleChange}
      />
      <button type="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>
    </form>
  );
};

export default Ingresos;
