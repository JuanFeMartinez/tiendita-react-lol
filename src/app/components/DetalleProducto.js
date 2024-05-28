import React, {useState, useEffect}from 'react';

const DetalleProducto = ({idProducto, agregarAlCarrito})=>{
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        if (idProducto) {
            fetch(`https://fakestoreapi.com/products/${idProducto}`)
            .then(response => response.json())
            .then(data => setProducto(data))
            .catch(error => console.error('¿Y los detalles del producto? nosotros tampoco sabemos'))
        }
    }, [idProducto]);

    if(!producto) return <div>ta cargando, porfa espera </div>;

    return(
        <div>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <button onClick={()=> agregarAlCarrito(producto)}>Agregar al Carrito</button>
        </div>
    );
};

export default DetalleProducto;