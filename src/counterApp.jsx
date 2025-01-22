import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => { 
        // console.log(event)
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    }

    const handleSubstract = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
            
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

/*
area
Crear un nuevo componente dentro de la carpeta SRC llamado CounterApp

El CounterApp debe de ser un Functional Component

El contenido del CounterApp debe de ser:

    <h1>CounterApp</h1>
    <h2> { value } </h2>
Donde "value" es una propiedad enviada desde el padre hacia el componente CounterApp (Debe ser númerica validada con PropTypes)

Reemplazar en el index.js ó main.jsx el componente de <PrimeraApp /> por el componente <CounterApp /> (no se olviden del value que debe de ser un número)

Asegúrense de no tener errores ni warnings (Cualquier warning no usado, comentar el código)

*/