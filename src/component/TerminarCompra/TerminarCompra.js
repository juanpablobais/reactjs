import React from 'react'
import './TerminarCompra.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TerminarCompra = (cambiarBoton) => {

    return (
        <div>
            <Link to='/carrito'><Button variant="dark" >Terminar la compra</Button></Link>
            <Link to={`/`}><Button variant='success' onClick={cambiarBoton} >Agregar mas productos</Button></Link>
        </div>
    )
}

export default TerminarCompra