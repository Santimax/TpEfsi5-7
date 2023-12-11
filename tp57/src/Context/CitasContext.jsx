import React from 'react';

export const CitasContext = React.createContext();

const CitasProvider = (children) => {
    const [citas, setCitas] = React.useState(JSON.parse(localStorage.getItem('citas')) || []);

    return <CitasContext.Provider value={{citas, setCitas}}>{children}</CitasContext.Provider>
}

export default CitasProvider;


