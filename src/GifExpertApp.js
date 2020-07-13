import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    //const categories = ['One Punch','Samurai X','Dragon Ball'];

    // Utilizaremos hook
    const [categories, setCategories] = useState(defaultCategories);

    //const handleAdd = () =>{
        // No debemos mutar la información con push
        // categories.push('HunterxHunter'); 

        // Utilizamos el operador spread
        // setCategories([...categories, 'HunterXHunter']);

        // Otra opción
        // setCategories( cats=>[...cats,'HunterXHunter']);

    //}


    return (
        <>
            <h2>GifExpertApp</h2>
            {/* <AddCategory setCategories={setCategories} /> */}
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd} >Agregar</button> */}

            <ol>
               {
                   categories.map( category =>(
                        <GifGrid
                            key={ category } 
                            category={category}
                        />
                      
                    ))
                   }
            </ol>
        </>
    )
}

export default GifExpertApp

// Debemos siempre mostrar elementos utilizando su key
// no podemos mutar la información con push
