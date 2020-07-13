import React from 'react'
// impt + tab
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}


// class es una palabra reservada de js por eso la reemplazaron por className

// Implementación de Pruebas

/** 
 *  1.Enzyme
 *  2.Enzyme to Json
 *  3. Debe mostrar el componente correctamente
 *  * shallow
 *  *wrapper
 *  *wrapper .toMatchSnapshot()
 */