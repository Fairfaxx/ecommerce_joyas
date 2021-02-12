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
    const [contador, setContador] = useState(0)



    return (
        <Context.Provider value={{ cartItems, contador, setCartItems, setContador }}>
            {children}
        </Context.Provider>
    )
}
export default CartContext;