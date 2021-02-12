import React from 'react'
import './count.css'

export default function Count({ contador, onAdd }) {
    return (
        <div className='count container'>
            <button className="btn" onClick={() => onAdd('-')} > - </button>
            <div>
                {contador}
            </div>
            <button className="btn" onClick={() => onAdd('+')}> + </button>
        </div>
    )
}
