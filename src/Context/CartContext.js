import React, { useState } from "react";

export const Context = React.createContext();

export const CartContext = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [item, setItem] = useState([]);

    const deleteItem = (item, toDel = 1) => {
        let newCart = [...cartItems]
        newCart.splice(item - 1, toDel)
        setCartItems(newCart)
    }

    let qtyInCart = cartItems.reduce((acc, curr) => { return acc + curr.qty }, 0)


    return (
        <Context.Provider value={{ cartItems, setCartItems, qtyInCart, item, setItem, deleteItem }}>
            {children}
        </Context.Provider>
    )
}
export default CartContext;