// import React, { useState } from 'react'

// export const Context = React.createContext();

// export const CartContext = ({ children }) => {

//     const [cartItems, setCartItems] = useState([])

//     console.log('Desde CartContext', cartItems);

//     return (
//         <Context.Provider value={{ cartItems, setCartItems }}>
//             {children}
//         </Context.Provider>
//     )
// }

// export default CartContext;

import React, { useState } from "react";

export const Context = React.createContext();

export const CartContext = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    console.log(cartItems)

    const qtyInCart = cartItems.reduce((acc, curr) => { return acc + curr.qty }, 0)


    return (
        <Context.Provider value={{ cartItems, setCartItems, qtyInCart }}>
            {children}
        </Context.Provider>
    )
}
export default CartContext;