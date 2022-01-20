import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMock } from '../../helpers/mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { detailId } = useParams()

    useEffect(() => {
        getMock
            .then(res => setProduct(res.find(prod => prod.id === detailId)))

    }, [detailId])

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer