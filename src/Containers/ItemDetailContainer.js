import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/CartContext';
import { getFirestore } from '../firebase';
import ItemDetail from '../Components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { item, setItem } = useContext(Context);
    let { qtyInCart } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(0)
    const { cartItems, setCartItems } = useContext(Context);
    const [modal, setModal] = useState(false);


    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id);
        item.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('El doc no existe');
                    return true;
                }
                // const dataQuery = doc.data();
                setItem(({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log('desde itemdatailcontainer', item);
            })
            .catch((error) => {
                console.log('Ocurrio un error', error);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [id, qtyInCart]);

    //Dentro del if de linea 44 hacer logica que modifique el contexto la cantidad del item que esta repetido si exeder el stock

    let handleComprar = () => {
        let alreadyIn = false;
        cartItems && cartItems.map((itemIn) => {
            if (itemIn.id === item.id) {
                console.log('Mismo id', id)
                alert("El producto ya se encuentra en el carrito, igual se agregará")
                itemIn.qty++;
                qtyInCart++
                alreadyIn = true
            }
        })
        if (!alreadyIn) {
            let itemCompra = {
                qty: contador,
                ...item
            }
            setCartItems(currentCart => [...currentCart, itemCompra])
        } else {
            setModal(true)
        }
    }

    return (
        <>{
            !modal ?
                <ItemDetail loading={loading} item={item} setContador={setContador} contador={contador} handleComprar={handleComprar} />
                :
                <div>Loading...</div>
        }
        </>
    )
}

export default ItemDetailContainer;

