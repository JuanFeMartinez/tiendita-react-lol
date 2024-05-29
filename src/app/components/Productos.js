import React, { useState, useEffect } from 'react';
import './globals.css';

const Productos = ({ categoria, seleccionarProducto }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const url = categoria ? `https://fakestoreapi.com/products/category/${categoria}` : 'https://fakestoreapi.com/products'; 
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los productos: ' + response.status);
        }
        return response.json();
      })
      .then(data => setProductos(data))
      .catch(error => console.error('No se pueden conseguir los productos:', error));
  }, [categoria]);

  return (
    <div>
      <h2 className="titulos">Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id} onClick={() => seleccionarProducto(producto.id)}>{producto.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
