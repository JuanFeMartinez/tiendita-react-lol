import React, { useState, useEffect } from 'react';
import './globals.css';

const DetalleProducto = ({ idProducto, agregarAlCarrito }) => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (idProducto) {
      setLoading(true); // Iniciar la carga
      fetch(`https://fakestoreapi.com/products/${idProducto}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al obtener el detalle del producto: ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          setProducto(data);
          setLoading(false); // Finalizar la carga
        })
        .catch(error => {
          console.error('Error al obtener el detalle del producto:', error);
          setLoading(false); // Finalizar la carga en caso de error
        });
    }
  }, [idProducto]);

  if (loading) return <div className="texto">ta cargando, porfa espera</div>;

  return (
    <div>
      {producto ? (
        <>
        <section className="detalles">
          <h2 className="texto texto-detalle texto-detalle-titulo">{producto.title}</h2>
          <img className="imagenes imagenes-detalle" src={producto.image} alt={producto.title} />
          <p className="texto texto-detalle texto-precio">Precio: ${producto.price}</p>
          <p className="texto texto-detalle">{producto.description}</p>
          
        </section>
          <button className="botones texto" onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
          
        </>
      ) : (
        <div className="texto">No hay información del producto</div>
      )}
    </div>
  );
};

export default DetalleProducto;
