import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../component/ItemCount'

const Item = ({ prod }) => {

    const { id, image, name, price, category } = prod

    return (

<div className='mx-auto'>

        <Card style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={image} style={{ minHeight: '300px' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <br />
                    Category: {category}
                </Card.Text>
                <Card.Text>
                    $ {price}
                </Card.Text>
                <Link to={`/detail/${id}`}><Button variant="primary">SHOW DETAILS</Button></Link>
                <ItemCount/>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Item