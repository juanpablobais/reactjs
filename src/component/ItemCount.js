import React from 'react'
import { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const ItemCount = ({stock}) => {
    const [count, setCount]= useState(1)
    const [newstock, setNewStock]= useState(stock)


    //Suma
    const addCount=()=>{
        if(count>=stock){
        console.log("All products sold")
    }
    else{
        setCount(count+1)
        setNewStock(newstock-1)}
    }

    //Resta
    const restCount=()=>{
        if(count<=0){
            console.log("Cart is empty")
        }
        else{
            setCount(count-1)
            setNewStock(newstock+1)
        }
       }


    return (
        <div>
            <Card border="light" className="text-center">
            <Card.Body>
            <Row>
            <Col><Button onClick={restCount} variant="outline-secondary">-</Button></Col>
            {'    '}
            <Col><p className="text-dark">
                     {count}
                     </p></Col>{'   '}

            <Col><Button onClick={addCount} variant="outline-secondary">+ </Button></Col>
            </Row>  
            <Button className='d-flex mx-auto' onClick={addCount} variant="outline-secondary">Add to cart <box-icon type='solid' name='cart-add'></box-icon> </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                {newstock} units remaining! 
            </Card.Footer>
            </Card>
            
           
            
        </div>
    )
}

export default ItemCount