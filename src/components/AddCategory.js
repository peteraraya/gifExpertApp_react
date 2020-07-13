import React, { useState } from 'react'
import PropTypes from 'prop-types';
// Recibimos propiedades con props aunque no es tan comun ver props

export const AddCategory = ({ setCategories }) => {

    // useState
    const [inputValue, setinputValue] = useState('');

    // Mostramos valores actualizados del input cuando la persona escribe algo
    const handleInputChange = (e)=>{
        // console.log(e.target.value);
        setinputValue(e.target.value);

    }
    // Manejo de enter
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('handleSubmit', inputValue);

        // validación
        if (inputValue.trim().length > 2 ) {
            // obtenemos información de otro componente con 
            setCategories( cats => [inputValue, ...cats]);
            setinputValue('');
        }

        
    }
    
    return (
        // <>
            //<h1>{inputValue}</h1> 
            <form onSubmit={ handleSubmit} >
            <p>{inputValue}</p>
                <input 
                    type="text" 
                    value={ inputValue }
                    onChange={ handleInputChange }
                />

            </form>
        // </>
    )
}
// setCategories --> sera requerido usar esta función
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}




// ignoramos la etiqueta de elemento contenedor ya que form engloba todo lo que queremos enviar
// siempre debemos devolver un elemento en este caso form
// evitamos el refresh del navegador previniendo con onSubmit  --->    e.preventDefault();


// simularemos el submit del formulario