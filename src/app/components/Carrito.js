import React, { useState, useEffect } from 'react';
import './globals.css';

const Carrito = ({ elementosCarrito, vaciarCarrito }) => {
  const total = elementosCarrito.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {elementosCarrito.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button className="botones botones-vaciar" onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
};

export default Carrito;

