import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/CartContext';
import './cartStyle.css'

export default function Cart({ cartItems, total, envio, deleteCartItems }) {

    const { deleteItem } = useContext(Context);

    return (
        <div className='cartPageStyle'>
            { cartItems && cartItems.length ?
                <div>
                    <h2 className='title-item-detail'> Detalle de tu carrito</h2>
                    <div className='padding-table'>
                        <table className='customers'>
                            <thead style={{ textAlign: 'center' }}>
                                <tr>
                                    <th className='name'>#</th>
                                    <th className='name'>Titulo</th>
                                    <th className='name'>Precio</th>
                                    <th className='name'>Cantidad</th>
                                    <th className='name'>Total</th>
                                    <th className='name'>Eliminar Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item, idx) =>
                                        <tr key={idx}>
                                            <td className='number' >{idx + 1}</td>
                                            <td className='name' >{item.nombre}</td>
                                            <td className='name' style={{ textAlign: 'center' }}>${item.precio}</td>
                                            <td className='name' style={{ textAlign: 'center' }}>{item.qty}</td>
                                            <td className='name' style={{ textAlign: 'center' }}>${item.precio * item.qty}</td>
                                            <td onClick={() => deleteItem()} class='name' style={{ textAlign: 'center' }}><i style={{ color: "red", fontSize: '41px' }} class="far fa-times-circle"></i></td>
                                        </tr>
                                    )
                                }
                                <tr>
                                    <td>*</td>
                                    <td class='envio' colSpan="3">Envio</td>
                                    <td class='envio' style={{ textAlign: 'center' }}>${envio}</td>
                                </tr>
                                <tr>
                                    <td>*</td>
                                    <td class='envio' colSpan="3">Total</td>
                                    <td class='envio' style={{ textAlign: 'center' }}>${total + 100}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='d-flex flex-row justify-content-center'>
                        <Link to={'/'}>
                            <button className="btn-detail-card">Seguir Viendo</button>
                        </Link>
                        <Link to={'/'}>
                            <button onClick={deleteCartItems} className="ml-2 btn-detail-card">Vaciar el Carrito</button>
                        </Link>
                        <Link to={'/checkout/'}>
                            <button className="btn-detail-card links-card">Terminar Comprar</button>
                        </Link>
                    </div>
                </div>
                :
                <div className='noItems'>
                    <h2 className='textNoItems'>
                        No hay nada en tu carrito
                    </h2>
                    <Link to={'/'} className='links-bottom'>
                        <button className="btn-detail"> ir a Home</button>
                    </Link>
                </div>
            }
        </div>
    )
}
