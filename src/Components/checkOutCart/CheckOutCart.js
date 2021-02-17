import React from 'react';
import './outCart.css'


export default function CheckOutCart({ product }) {
    return (

        <div className='itemCartCont'>
            <div className="text-center flex-detail-cart">
                <div className="title-img">
                    <img src={product.img} className='img-detail img-cart' />
                </div>
                <div className='description-name-button'>
                    <h3 className='h3-size margin-bottom'>{product.nombre} </h3>
                    <p className="price-detail">${product.precio} </p>
                    <p className="text-start"> <em>ID de tu producto:</em> {product.id} </p>
                    <p className="text-start margin-bottom">{product.description}</p>
                    <p className="text-start margin-bottom">Todos los productos tienen hasta 5 años  de garantía desde la fecha de adquisición. La presente garantía se extingue automáticamente una vez cumplidos los 5 años de adquirido el producto.</p>
                </div>
            </div>
        </div>
    );
}
