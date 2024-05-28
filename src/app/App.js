import React, { useState } from 'react';
import Categorias from './components/Categorias';
import Productos from './components/Productos';
import DetalleProducto from './components/DetalleProducto';
import Carrito from './components/Carrito';

const App = () => {
    const [categoria, setCategoria] = useState(null); // Corrección aquí
    const [idProductoSeleccionado, setIdProductoSeleccionado] = useState(null);
    const [elementosCarrito, setElementosCarrito] = useState(
        JSON.parse(sessionStorage.getItem('elementosCarrito')) || []
    );

    const agregarAlCarrito = (producto) => {
        const nuevosElementosCarrito = [...elementosCarrito, producto];
        setElementosCarrito(nuevosElementosCarrito);
        sessionStorage.setItem('elementosCarrito', JSON.stringify(nuevosElementosCarrito));
    };

    return (
        <div>
            <h1>Tienda</h1>
            <Categorias seleccionarCategoria={setCategoria} />
            <Productos categoria={categoria} seleccionarProducto={setIdProductoSeleccionado} /> {/* Corrección aquí */}
            <DetalleProducto idProducto={idProductoSeleccionado} agregarAlCarrito={agregarAlCarrito} />
            <Carrito elementosCarrito={elementosCarrito} />
        </div>
    );
};
export default App;


