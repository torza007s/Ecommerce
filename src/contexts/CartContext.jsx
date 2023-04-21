import React from 'react'
import { createContext,useState,useEffect } from 'react'

export const Cartcontext = createContext()
const CartProvider = ({children}) => {
    const [cart ,setCart] = useState([])
    const addTocart = () =>{
        console.log('added to the cart')
    }
  return (
    <Cartcontext.Provider value={{addTocart}}>{children}</Cartcontext.Provider>
  )
}

export default CartProvider