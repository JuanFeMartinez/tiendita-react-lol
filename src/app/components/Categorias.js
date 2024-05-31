import React, { useState, useEffect } from 'react';
import './globals.css';

const Categorias = ({ seleccionarCategoria }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las categorias: ' + response.status);
        }
        return response.json();
      })
      .then(data => setCategorias(['all', ...data]))
      .catch(error => console.error('Error al obtener las categorias:', error));
  }, []);

  const nomCategorias = {
    "all": "Todos los Artículos",
    "electronics": "Electrónicos",
    "jewelery": "Joyería",
    "men's clothing": "Ropa para Hombres",
    "women's clothing": "Ropa para Mujeres",
  };

  return (
    <div>
      <h2 className="texto texto-titulo">Categorias</h2>
      <ul>
        {categorias.map((categoria) => (
          <li className="texto"key={categoria} onClick={() => seleccionarCategoria(categoria)}>{nomCategorias[categoria] || categoria}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
