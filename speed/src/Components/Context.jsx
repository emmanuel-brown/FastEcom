import React, { useState } from 'react'

export const CartContext = React.createContext()

export const Provider = props =>{
    console.log(props.children)
    const [cart, setCart] = useState([])
    const [user, setUser] = useState("")
    return (
        <CartContext.Provider value={[cart, setCart, user, setUser]}>
            {props.children}
        </CartContext.Provider>
    )
}