import React, { useState } from 'react'
import './ItemCount.css'

export function ItemCount({ stock, initial,  onAdd }) {
    const [count,setCount] = useState(initial);

    const increment = () => {
        if (count >= stock){
            return
        }
        setCount(count + 1);
    }
    const decrement = ()=>{
        return setCount(count - 1);
    }

    const addHandler = ()=>{
        onAdd(count)
    }

  return (
    <div>
      <div className="buttons">
        <button
          className="row"
          type="button"
          onClick={decrement}
        >
          -
        </button>
        <div className="row">{count}</div>
        <button
          className="row"
          type="button"
          onClick={increment}
        >
          +
        </button>
      </div>
      <button
        className="carrito"
        disabled={count <= 0}
        type="button"
        onClick={addHandler}
      >
        Agregar al carrito
      </button>
    </div>
  )
}