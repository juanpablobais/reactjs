import { useState , useEffect } from 'react'
import { getFetch } from '../../helpers/mock'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === '1')))

    }, [])

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer