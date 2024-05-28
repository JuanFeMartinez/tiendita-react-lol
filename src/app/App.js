import React, {useState} from 'react';
import Categorias from './components/Categorias';
import Productos from './components/Productos';
import DetalleProducto from './components/DetalleProducto';
import Carrito from './components/Carrito';

const App = () => {
    const [categoria, setCategorias] = useState(null);
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
            <Categorias seleccionarCategoria={setCategorias}/>
            <Productos categoria={categoria} seleccionarProductos={setIdProductoSeleccionado}/>
            <DetalleProducto idProducto={idProductoSeleccionado} agregarAlCarrito={agregarAlCarrito}/>
            <Carrito elementosCarrito={elementosCarrito}/>
        </div>
    );
};
export default App;

