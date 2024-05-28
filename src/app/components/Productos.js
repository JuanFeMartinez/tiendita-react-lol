import React, {useState, useEffect} from 'react';
const Productos = ({categoria, seleccionarProducto}) => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const url = categoria ? `https://fakestoreapi.com/products/category/${categoría}` : 'https://fakestoreapi.com/products';
        fetch(url)
        .then(response => response.json())
        .then(data => setProductos(data))
        .catch(erro => console.error('No se pueden conseguir los productos:', erro));
    }, [categoria]);
    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {productos.map((producto)=> (
                    <li key={producto.id} onClick={() => seleccionarProducto(producto.id)}>{producto.tittle}</li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;