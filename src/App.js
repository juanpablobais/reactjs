import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './component/NavMenu/NavMenu';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './component/Cart/Cart';
import Form from './component/Cart/Form';
import InicioLogo from './component/InicioLogo/InicioLogo';
import { CartContextProvider } from './component/CartContext/CartContext';

const App = () => {

    return (
        <div className='hooks-app' >
        <CartContextProvider>
            <BrowserRouter>
                <NavMenu />
                <Routes>
                    <Route exact path='/' element={<InicioLogo />} />
                    <Route exact path='/category' element={<InicioLogo />} />
                    <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route exact path='/detail/:detailId' element={<ItemDetailContainer />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/form' element={<Form />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>

        </div >
    )
}

export default App