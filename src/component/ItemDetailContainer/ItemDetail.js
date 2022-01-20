import React, {  useState, useContext } from 'react'
import './ItemDetail.css'
import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCount'
import TerminarCompra from '../TerminarCompra/TerminarCompra'
import { CartContext } from '../CartContext/CartContext'


const ItemDetail = ({prop}) => {
    const { agregarAlCarrito } = useContext(CartContext)
    const [boolean,setBoolean]= useState(true)


    function add ({prod}){
        setBoolean(!boolean)
        agregarAlCarrito({...prod, cantidad : prod})
    }

    return (
        <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prop.img} />
            <Card.Body>
                <Card.Title>{prop.nombre}</Card.Title>
                <Card.Text>{prop.descp}</Card.Text>
                <Card.Text>Precio: ${prop.precio}</Card.Text>
                {boolean ? <ItemCount item={prop} add={add} />
                    :     <TerminarCompra add={add}/>}
            </Card.Body>
            </Card>
       </div>
    )
}

export default ItemDetail