import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {getFirestore} from '../firebase'

const getItems = (id) => {

    const db = getFirestore();
    const itemsCollection = db.collection('items')

    const item = itemsCollection.doc(id)
    return item.get();
}


export default function ItemDetailContainer(props) { 
    const [item, setItem] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        getItems(itemId)
        .then((res) => {
            if(res.exists){
                setItem({id:res.id, ...res.data()})
            }
        })
        return;
        }, [itemId]);
    

    // Implementar mock invocando a getItems() y utilizando el resolver then
     return (
         <div style={{padding: '50px', display: 'inline-block'}}>
            {item 
            ? <>{`ID del producto: ${itemId}`}<ItemDetail item={item} /></> 
            : props.showMsg
                ? <h2>Cargando...</h2>
                : null}
        </div>
        )
    }
