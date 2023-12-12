// CitasContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CitasContext = createContext();

export const CitasProvider = ({ children }) => {
  const [citas, setCitas] = useState(() => {
    const storedCitas = JSON.parse(localStorage.getItem('citas'));
    return storedCitas || [];
  });

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  return <CitasContext.Provider value={{ citas, setCitas }}>{children}</CitasContext.Provider>;
};
