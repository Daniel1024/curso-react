import React from 'react';
// import React, { Fragment } from 'react';

// FC
const PrimeraApp = ({ saludo = 'Hola Mundo' }) => {

  return (
    <>
      <h1>{ saludo }</h1>
      <p>Mi primera aplicación</p>
    </>
  );
}

export default PrimeraApp;
