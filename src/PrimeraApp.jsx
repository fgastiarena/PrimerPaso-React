// En React hay dos tipos de componentes,
// los que estan basados en clases y los que están basados en funciones.
// Vamos a trabajar con FC -Functional Components-
//rafcp -- Crear todo el FC con las importaciones !!


import React from 'react';
import PropTypes from 'prop-types';
// import { Fragment } from 'react/cjs/react.production.min';

const PrimeraApp = ({saludo, subtitulo}) => {



    return (
        <>
        <h1>{saludo}</h1>
         {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
         <p>{subtitulo}</p>
         </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp;