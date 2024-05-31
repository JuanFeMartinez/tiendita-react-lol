import React, { useState, useEffect } from 'react';
import './globals.css';

const Carrito = ({ elementosCarrito, vaciarCarrito }) => {
  const total = elementosCarrito.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="texto">Carrito de Compras</h2>
      <ul>
        {elementosCarrito.map((item, index) => (
          <li key={index} className="texto">
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <p className="texto">Total: ${total.toFixed(2)}</p>
      <button className="botones botones-vaciar texto" onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
};

export default Carrito;

