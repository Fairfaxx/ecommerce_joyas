import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import CartIcon from '../CartIcon/CartIcon';
import { Context } from '../../Context/CartContext';
import './navbar.css'

export default function NavBar({ type, setTipo }) {

    const [vip, setVip] = useState("Inicia sesion");
    const [user, setUser] = useState("");
    const { contador } = useContext(Context);

    useEffect(() => {
        const nombre = setTimeout(() => {
            setUser("Bienvenid@")
        }, 2000);
        return () => clearTimeout(nombre);
    }, []);

    const handleVip = () => {
        if (type === "inicia") {
            setTipo("cerrar");
            setVip("cerra sesion");
        } else {
            setTipo("inicia");
            setVip("Inicia sesion");

        }
    };

    return (
        <header>
            <div className={`navStyle-${type}`}>
                <div className='ul'>
                    <NavLink to='/' className='links-nav'><p className='nav-link-nav'>Home</p></NavLink>
                    <NavLink to='/categories' className='links-nav'><p className='nav-link'>categorias</p></NavLink>
                </div>
                <div>
                    <CartIcon name={user} />
                    <button onClick={handleVip} className="buttonVip">
                        <p className={`to-${type}`}>{vip}</p>
                    </button>
                    <p>{contador}</p>
                </div>
            </div>
        </header>
    );
}

