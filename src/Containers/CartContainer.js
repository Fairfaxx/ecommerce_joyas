import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../Context/CartContext';
import Cart from '../Components/Cart/Cart';
// import firebase from 'firebase/app';
// import { getFirestore } from '../firebase';
// import InputUser from '../Components/InputUser'
import 'firebase/firestore';

export default function CartContainer() {
    const { cartItems, setCartItems, setContador } = useContext(Context);
    const [total, setTotal] = useState(0);
    const [envio] = useState(100);

    useEffect(() => {
        cartItems &&
            cartItems.map((item) =>
                setTotal((prevTotal) => prevTotal + item.precio * item.qty)
            );
    }, [cartItems]);

    const deleteCartItems = () => {
        setCartItems([])
        setContador(0)
    }
    return (
        <div>
            <Cart cartItems={cartItems} total={total} envio={envio} deleteCartItems={deleteCartItems} />
        </div>
    );
};



