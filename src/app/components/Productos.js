import React, { useState, useEffect } from 'react';
import './globals.css';

const Productos = ({ categoria, seleccionarProducto }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
    const url = categoria && categoria !== 'all' ? `https://fakestoreapi.com/products/category/${categoria}` : 'https://fakestoreapi.com/products'; 
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
      <h2 className="texto-titulo texto">Productos</h2>
      <ul>
        <section>
        {productos.map((producto) => (
          <li className="texto" key={producto.id} onClick={() => seleccionarProducto(producto.id)}>
            {producto.title}
            <br></br>
            <img className="imagenes" src={producto.image}></img>
          </li>
        ))}
        </section>
      </ul>
    </div>
  );
};

export default Productos;
