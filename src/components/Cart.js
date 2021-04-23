import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from '../firebase' 

export const Cart = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const [idOrden, setIdOrden ] = useState(null)

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const guardarOrden = (e)=>{
        e.preventDefault();
        const comprador = { name, phone, email }
        
        console.log(comprador)

        const db = getFirestore();

        const ordersCollection = db.collection("orders")

        const date = firebase.firestore.Timestamp.fromDate(new Date());
        console.log(date)

        const items = cart.map(cartItem => {
             console.log(cartItem.item.id, cartItem.item.title, cartItem.item.price)
            return {id: cartItem.item.id, title: cartItem.item.title, price: cartItem.item.price} 
        })

        ordersCollection
        .add({buyer: comprador, items , date, total: totalPrecio })
        .then(doc=>{
            setIdOrden(doc.id)
        })

        const itemsCollection = db.collection('items')
        .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(e => e.item.id))

        console.log(itemsCollection)

        itemsCollection.get()
        .then(resultado =>{

            const batch = db.batch()

            resultado.docs.forEach(docSnapshot => {
                const stockActual = docSnapshot.data().stock;
                const itemDelCart = cart.find(cartItem => cartItem.item.id === docSnapshot.id);
                const cantidadComprado = itemDelCart.quantity;
                const nuevoStock =  stockActual - cantidadComprado;

                batch.update(docSnapshot.ref,
                 {stock: nuevoStock}
                )
            })


            batch.commit()

        })

    }

    const noItemComp = <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>;

    if(totalItems === 0) return noItemComp



    return (
        <div>
            {idOrden? `Orden generada: ${idOrden}`: null}

            {cart.map(cartItem => (
                <div key={cartItem.item.id} >
                    <div> Titulo:  {cartItem.item.title}  </div>
                    <div> cantidad: {cartItem.quantity} </div>
                    <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                </div>)
                )}
            <div>Total:{totalItems} y {totalPrecio}</div> 
            <button onClick={clear}>Borrar todo</button>         

            <form action=""  onSubmit={guardarOrden}>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>

                <button type="submit"> Generar orden</button>
            </form>

        </div>
    )
}