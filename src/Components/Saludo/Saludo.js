import React from 'react';
import { Link } from 'react-router-dom';
import './saludo.css'

function Saludo() {
    return (
        <div className='padding-compra'>
            <h1>Gracias por tu compra</h1>
            <Link to={'/'} className='links'>
                <button className='btn-detail-saludo'>Volver a comprar</button>
            </Link>
        </div>

    );
};
export default Saludo;
