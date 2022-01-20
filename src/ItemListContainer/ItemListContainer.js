import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMock } from '../helpers/mock'
import ItemList from './ItemList'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) {
            getMock
                .then(res => setProducts(res.filter(prod => prod.category === categoryId)))
                .finally(() => setLoading(false))
        } else {
            getMock
                .then(res => setProducts(res))
                .finally(() => setLoading(false))
        }

    }, [categoryId])

    console.log(products)


    return (
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>

            {
                loading ? <h1>Loading...</h1> : <ItemList products={products} />
            }

        </div>
    )
}

export default ItemListContainer