import React, { useState, useEffect } from 'react';

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
      .then(data => setCategorias(data))
      .catch(error => console.error('Error al obtener las categorias:', error));
  }, []);

  return (
    <div>
      <h2>Categorias</h2>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria} onClick={() => seleccionarCategoria(categoria)}>{categoria}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
