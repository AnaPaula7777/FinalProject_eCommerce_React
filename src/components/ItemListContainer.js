import React, { useEffect, useState }  from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {getFirestore} from '../firebase'

export default function ItemListContainer() {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = db.collection('items')
        const filtrado = itemsCollection
        .where('category', '==', categoryId).limit(10)
        const promesa =  filtrado.get();


        promesa.then((snaptshot)=>{
            console.log('se consultaron los datos');
            console.log(snaptshot);
      
            if(snaptshot.size > 0){
              console.log(snaptshot.docs.map(doc => doc.data()))
      
              console.log(snaptshot.docs.map(doc => doc.id))
      
      
              setItems(snaptshot.docs.map(doc => {
                return {id:doc.id,  ...doc.data()}
              }
             ))
            }
          });
        },[categoryId])


        return (
            <div>
              <span style={{position: 'relative', top: '-20px'}}>Items de la categoria {categoryId}</span>
              {items.length > 0 ? <ItemList items={items} /> : <h2>Cargando...</h2>}
            </div>
        );
}