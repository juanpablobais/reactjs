import { createContext,  useState } from "react";
export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cartList,setCarList]= useState()
    
    function agregarAlCarrito(itemAgregar){
        setCarList({itemAgregar})
    }


    function agregarAlCarrito(item){
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1){
            const cantAnterior = cartList[index].cantidad
            let cantAgregada = cantAnterior + item.cantidad
            cartList[index].cantidad = cantAgregada
            let array = [...cartList]
            setCarList(array)
        } else {
            setCarList([...cartList, item ])
        }
    }

    function vaciarCarrito(){
        setCarList([])
    }

    return (
        <CartContext.Provider value={{cartList,agregarAlCarrito,vaciarCarrito}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider