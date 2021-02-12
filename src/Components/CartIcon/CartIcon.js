import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import cart from './cart.svg';

const CartIcon = (props) => {

    return (
        <div>
            <Link to='/cart'>
                <i class="fas fa-cart-arrow-down"></i>
            </Link>
            <p>{props.greeting} {props.name}</p>
        </div>
    )
}

export default CartIcon;