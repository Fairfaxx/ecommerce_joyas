import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../../Context/CartContext";
import CheckOutCart from "../../Components/checkOutCart/CheckOutCart";
import firebase from 'firebase/app';
import { getFirestore } from '../../firebase';
import { Link } from 'react-router-dom';
import './input.css'

export default function CheckOutContainer() {
    const { cartItems, setCartItems } = useContext(Context);
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState([]);
    const [name, setName] = useState("");
    const [total, setTotal] = useState(0);
    const [email, setEmail] = useState("");
    const [conEmail, setConEmail] = useState("");
    const [error, setError] = useState(false)


    useEffect(() => {
        cartItems &&
            cartItems.map((item) =>
                setTotal((prevTotal) => prevTotal + item.price * item.qty),

                setCartItems(cartItems)
            );
    }, [cartItems]);



    const addOrder = () => {
        const db = getFirestore();
        const orders = db.collection("orders");

        const buyer = { name, email, conEmail };
        const items = cartItems;
        const newOrder = {
            buyer,
            items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
        };

        orders.add(newOrder)
            .then(({ id }) => {
                alert(`Felicitaciones se generó la orden Nº${id}`)
                setOrderId(id)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
                setCartItems([]);
            });
    };

    function onNameChange(evento) {
        setName(evento.target.value)
    }
    function onEmailChange(evento) {
        setEmail(evento.target.value)
    }
    function confonEmailChange(evento) {
        setConEmail(evento.target.value)
    }

    const handlerSubmit = e => {
        e.preventDefault()
        if (name.trim() === "" && email.trim() === "" && conEmail.trim() === "") {
            setError(true)
            console.log('validar')
            return
        } else {
            return true
        }

    }


    return (
        <div>
            <h2 className='title-item-out'>Detalle de compra</h2>
            {cartItems.map((product) => (
                <CheckOutCart key={product.id} product={product} />
            ))}
            <Link to={'/'}>
                <button className='btn-detail-out'>Seguir viendo</button>
            </Link>
            <h2 className='margin-top'>Deja tus datos y confirma tu compra</h2>
            <form onSubmit={handlerSubmit} className='form margin-bottom-300px'>
                <div className='form-group d-flex'>
                    <label className="text-start">nombre</label>
                    <input type="text" name="name" value={name} onChange={onNameChange} placeholder="Nombre y Apellido" />
                </div>
                <div className='form-group d-flex'>
                    <label className="text-start">email</label>
                    <input type="email" name="email" value={email} onChange={(evento) => onEmailChange(evento)} placeholder="mail@ejemplo.com" />
                </div>
                <div className='form-group d-flex'>
                    <label className="text-start"> confirma tu email</label>
                    <input type="email" name="conEmail" value={conEmail} onChange={confonEmailChange} placeholder="mail@ejemplo.com" />
                </div>
                <Link to={'/gracias/'}>
                    <button disabled={!(name && email && conEmail)} onClick={addOrder} className='btn-detail-out'>confirmar y comprar</button>
                </Link>
            </form>
        </div>
    );
}
