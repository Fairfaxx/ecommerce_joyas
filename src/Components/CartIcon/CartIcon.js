import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import cart from './cart.svg';

const CartIcon = (props) => {

    return (
        <div>
            <Link to='/cart'>
                <i style={{ color: 'white' }} className="fas fa-cart-arrow-down"></i>
            </Link>
            <p style={{ color: "#ffff " }}>{props.greeting} {props.name}</p>
        </div>
    )
}

export default CartIcon;