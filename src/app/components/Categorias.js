import React, {useState, useEffect} from 'react';


const Categorias = ({ seleccionarCategoria }) => {
    const [categorias, setCategorias] = useState([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=>response.json())
        .then(data => setCategorias(data))
        .catch(error => console.error('Error al obtener las categorías:', error));
    },[]);

    return(
        <div>
            <h2>Categorias</h2>
            <ul>
                {categorias.map((categoria)=>(
                    <li key={categoria} onClick={() => seleccionarCategoria(categoria)}>{categoria}</li>
                ))}   
            </ul>
        </div>
    );
};
export default Categorias;