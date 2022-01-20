import React from 'react'
import { CartContext } from '../CartContext/CartContext'
import './Cart.css'

const Cart = () => {
    const {cartList,vaciarCarrito} = CartContext()
    return (
        <div>
            {cartList.map(elem=><div>{elem.nombre}</div>)}
            {cartList.map(elem=><div>{elem.cantidad}</div>)}
            <button onClick={vaciarCarrito} >Vaciar Lista de compras</button>
        </div>
    )
}

export default Cart