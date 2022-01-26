import { useContext } from 'react';
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount'
import './ItemDetail.css';

function ItemDetail({ producto }) { 

    const { cartList, agregarAlCarrito } = useCartContext()
    
    const [show, setShow] = useState(true)

    const onAdd = (counter) => {

        setShow(false)
        agregarAlCarrito({...producto, cantidad: counter})
        console.log(cartList)
    }

    return (
        <div className='divDetail'>
            <img src={producto.img} alt={producto.nombre} className='imgDetail'/>
            <div>
                <h2>{producto.nombre}</h2>
                <p className='pDescripcionDetail'>{producto.descripcion}</p>
                <p className='pPatronDetail'>{producto.patron}</p>
                <h4 className='precioDetail'>Precio: ${producto.precio}</h4>
                { show ? <ItemCount stock={producto.stock} onAdd={onAdd}/> : 
                <div className='divButtonsDetail'>
                    <Link to='/'><Button variant="outline-dark" className='buttonSeguirCompra'>Seguir comprando</Button></Link>
                    <Link to='/cart'><Button variant="dark" className='buttonTerminarCompra'>Terminar compra</Button></Link>
                </div>}
            </div>
        </div>
    )
}

export default ItemDetail