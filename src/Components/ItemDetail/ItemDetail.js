import React from 'react'
import Contador from '../../Containers/CountContainer'
import { Link } from 'react-router-dom';
import './itemDetail.css'


export default function ItemDetail({ item, loading, contador, setContador, handleComprar }) {
    console.log('Desde ItemDetail', contador)

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
                        <p className="text-start margin-bottom"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, tempora nemo velit perspiciatis expedita iusto reiciendis quod doloremque, nostrum accusantium illum eligendi tempore tenetur qui iste beatae natus voluptate voluptatibus? </p>
                        <p className="price-detail">${item.precio}</p>
                        <p className="text-start margin-bottom">{item.quantity} en Stock!</p>
                        <div className="contadorItem">
                            <Contador className='width-200px' min={0} max={item.quantity} contador={contador} setContador={setContador}>Agregar</Contador>
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
                                    <button className='btn-detail' onClick={() => setContador(contador + 1)}>Agregar al Carrito</button>
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
















// import React, { useContext,useState} from 'react';
// import Contador from '../Containers/CountContainer';
// import { useParams } from 'react-router-dom';
// import {CartContext} from '../Context/CartContext'

// export default function ItemDetail ({item}) {
//     const { id } = useParams();

//     const [product, setProduct] =useContext(CartContext)
//     const [contador, setContador] = useState(0);

//     const addCart=()=> {
//         setProduct( [...product, {
//             title:item.title,
//             image:item.thumbnail,
//             cantidad:contador
//         }])
//     }
//   return (
//     <div>
//         <section>
//             { 
//             item &&
//             <div> 
//                 <div key={id} >                 
//                     <p>
//                         {id}
//                     </p>
//                     <p>
//                        name: {item.name}
//                     </p>
//                     <div> stock:{item.stock} </div>
//                     <div>id: {id} </div>

//                 </div>
//                 <div>
//                     <Contador contador={contador} setContador={setContador} min='0' max='10'/>                          
//                 </div>   
//                 <div>
//                     <button onClick={()=>addCart()}>Añadir a carrito</button>
//                 </div>
//              </div>
//              }   
//         </section>             
//     </div>
//     )

// }





// import React, { useEffect, useState } from "react"; 
// import { getFirestore} from '../firebase/index'

// export default function ItemDetail({ id }){
//     const [item,setItem]=useState({});
//     const [loading,setLoading]=useState(false);

// useEffect(()=>{
//     setLoading(true);
//     const db = getFirestore();
//     const itemCollection = db.collection('items');
//     const item = itemCollection.doc(id);

//     item
//     .get()
//     .then((doc) => {
//         if(!doc.exists){
//             console.log('Items does not exist');
//             return true;
//         }
//         console.log('Item found');
//         setItem({
//             id:doc.id,
//             ...doc.data(),
//         })
//     })
//     .catch((error) => {
//         console.log(error);
//     }).finally(()=>{
//         setLoading(false)
//     }); 
// },[id]);
// // useEffect(()=>{
// //     console.log(item);
// // }, [item]);
//     return (
//         <div>
//             {
//                 loading && <h1>Loading item Detail..</h1>
//             }
//             {
//                 !loading && 
//                 <>
//                     <div> 
//                         <h2>Description: {item.description}</h2>
//                         <p>Stock:{item.stock}</p>
//                         <p>Color:{item.color}</p>
//                         <p>Id:{id}</p>
//                     </div>
//                 </>
//             }            
//         </div>

//     )
// }