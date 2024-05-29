"use client";

import React, { useState, useEffect } from 'react';
import Categorias from './components/Categorias';
import Productos from './components/Productos';
import DetalleProducto from './components/DetalleProducto';
import Carrito from './components/Carrito';

const App = () => {
    const [categoria, setCategoria] = useState(null);
    const [idProductoSeleccionado, setIdProductoSeleccionado] = useState(null);
    const [elementosCarrito, setElementosCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        const nuevosElementosCarrito = [...elementosCarrito, producto];
        setElementosCarrito(nuevosElementosCarrito);
        sessionStorage.setItem('elementosCarrito', JSON.stringify(nuevosElementosCarrito));
    };

    const vaciarCarrito = () => {
        setElementosCarrito([]);
        sessionStorage.removeItem('elementosCarrito');
    };

    useEffect(() => {
        const elementosGuardados = JSON.parse(sessionStorage.getItem('elementosCarrito'));
        if (elementosGuardados) {
            setElementosCarrito(elementosGuardados);
        }
    }, []);

    return (
        <div>
            <h1>Tienda</h1>
            <Categorias seleccionarCategoria={setCategoria} />
            <Productos categoria={categoria} seleccionarProducto={setIdProductoSeleccionado} />
            <DetalleProducto idProducto={idProductoSeleccionado} agregarAlCarrito={agregarAlCarrito} />
            <Carrito 
                elementosCarrito={elementosCarrito} 
                vaciarCarrito={vaciarCarrito} 
            />
        </div>
    );
};

export default App;

