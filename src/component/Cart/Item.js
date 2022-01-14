import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from '../ItemCount';

 function Item({item, id}) {

    return (
        <div className='col-md-3'>
         
            <Card  key={item.id} style={{ width: '300px', hight: '500px'}}>
                <Card.Header className="text-dark">{item.nombre}</Card.Header>
                    <Card.Img  width="100" height="300" variant="top" src={item.img} />
                        <Card.Body>
                        <Card.Title className="text-secondary">$ {item.precio}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <Button to={`/item/${id}`} variant="outline-primary">Details</Button>
                    </Card.Footer>
                    <ItemCount stock= {item.stock}/>
                </Card>
                {' '}
        </div>
       
    )
}

export default Item