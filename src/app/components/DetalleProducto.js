import React, { useState, useEffect } from 'react';
import './globals.css';

const DetalleProducto = ({ idProducto, agregarAlCarrito }) => {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (idProducto) {
      fetch(`https://fakestoreapi.com/products/${idProducto}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al obtener el detalle del producto: ' + response.status);
          }
          return response.json();
        })
        .then(data => setProducto(data))
        .catch(error => console.error('Error al obtener el detalle del producto:', error));
    }
  }, [idProducto]);

  if (!producto) return <div>ta cargando, porfa espera </div>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <img src={producto.image}></img>
      <button className="botones" onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
    </div>
  );
};

export default DetalleProducto;
