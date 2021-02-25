import React from 'react'
import CountContainer from '../../Containers/CountContainer'
import { Link } from 'react-router-dom';
import './itemDetail.css'


export default function ItemDetail({ item, loading, contador, setContador, handleComprar, handlerDeleteItem }) {


    return (

        loading ?
            <div>Loading...</div>
            :
            <div>
                <h4 className='title-item-detail'>Detalles del Producto</h4>
                <div className="flex-detail" bg='secondary' text='white' style={{ minHeight: '550px' }}>
                    <div className="title-img-detail">
                        <img src={item.img} className='img-detail' />
                    </div>
                    <div className='description-name-button-detail'>
                        <h3 className='h3-size margin-bottom'>{item.nombre}</h3>
                        <p className="text-start"> {item.description}</p>
                        <p className="price-detail">${item.precio}</p>
                        <p className="text-start margin-bottom">{item.quantity} en Stock!</p>
                        <div className="contadorItem">
                            <CountContainer className='width-200px' min={0} max={item.quantity} contador={contador} setContador={setContador}>Agregar</CountContainer>
                        </div>
                        {
                            contador > 0 ?
                                <div>
                                    <Link to={'/cart/'}>
                                        <button className='btn-detail' onClick={handleComprar}>Comprar {contador}</button>
                                    </Link>
                                    <div>
                                        <Link to={'/'} className='links'>
                                            <button className='btn-detail margin-bottom-400px'> Volver a Home</button>
                                        </Link>
                                    </div>
                                </div>
                                :
                                <div>
                                    <button className='btn-detail' onClick={() => handleComprar()}>Agregar al Carrito</button>
                                    <div>
                                        <Link to={'/'} className='links'>
                                            <button className='btn-detail margin-bottom-400px'> Volver a Home</button>
                                        </Link>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
    )
}
