import React from 'react';

const Carrito = ({ elementosCarrito }) => {
    const total = elementosCarrito.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h2>Carito de Compras</h2>
            <ul>
                {elementosCarrito.map((item, index)=>(
                    <li key={index}>
                        {item.title} - ${item.price}
                    </li>
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    );
};

export default Carrito;