import React from 'react';
import { CitasProvider } from '../Context/CitasContext';
import App from '../App';

function Main() {
  return (
    <CitasProvider>
      <App />
    </CitasProvider>
  );
}

export default Main;
