import React, { useEffect, useState } from 'react'
import Count from '../Components/Count/Count'

export default function CountContainer({ min, max, setContador, contador }) {
    console.log('Desde CountContainer', contador)
    const onAdd = (sign) => {
        if ((sign === '+') && (contador < max)) setContador(contador + 1)
        if ((sign === '-') && (contador > min)) setContador(contador - 1)
    }

    return (
        <Count contador={contador} onAdd={onAdd} />
    )
}
