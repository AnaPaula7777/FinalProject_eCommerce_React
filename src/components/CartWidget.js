import React, { useContext } from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartContext } from "../context/CartContext";

export const CartWidget = () =>{
    const {totalItems} = useContext(CartContext)

    return <div>
            <i>
                <AddShoppingCartIcon />
            </i>
            {totalItems? <i>Carrito {totalItems}</i>: null } 
    </div>
}

export default CartWidget;