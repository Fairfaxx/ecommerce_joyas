import React from 'react'
import Count from '../Components/Count/Count'

export default function CountContainer({ min, max, contador, setContador }) {



    const onAdd = (sign) => {
        if ((sign === '+') && (contador < max)) setContador(contador + 1)
        if ((sign === '-') && (contador > min)) setContador(contador - 1)
    }

    return (
        <Count onAdd={onAdd} contador={contador} />
    )
}
