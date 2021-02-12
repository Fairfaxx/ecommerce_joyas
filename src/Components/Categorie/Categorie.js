import React from 'react'
import { Link } from 'react-router-dom'
import './styleItems.css'

export default function Categorie({ items, loading }) {


    return (
        <div className="item">
            {   loading ?
                <div> Loading--</div>
                :
                items && items.map((item) =>
                    <div key={item.id} className='cardItem-item'>
                        <Link to={`/item/${item.id}`}>
                            <img src={item.img} className='img rotate-hor-center' />
                            <h5 className='title-item'>{item.nombre}</h5>
                            <p className="price-item">${item.precio}</p>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
