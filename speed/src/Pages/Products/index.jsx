import React, { useEffect, useState, useContext } from 'react'
import './Products.scss'
import axios from 'axios'
import Prod from '../../Components/products/prod'
import CloseClickOutside from '../../Components/CloseClickOutside'
import { CartContext } from '../../Components/Context'
import { FaShoppingCart } from "react-icons/fa"

const Products = () =>{
    const [cart, setCart, user, setUser] = useContext(CartContext)
    const [ products, setProducts ] = useState([])
    const [ total, setTotal ] = useState()
    const [ showCart, setShowCart ] = useState(false)
    const { domNode } = CloseClickOutside(() => setShowCart(false));
    useEffect(() => {
        axios.get('/products/collection')
            .then(res => setProducts(res.data))
            .catch(() => console.log("could not retreive products"))

    }, [])

    useEffect(() =>{
        let total = 0
        cart.forEach(item => total += item.price)
        setTotal(total)    
    }, [cart])

    const addProd = pro =>{
        setCart([...cart, pro])
    }

    const mapProducts = () => products.map(prod => (
        <Prod 
            productName={prod.productName}
            image={prod.image} 
            price={prod.price}
            addProd={addProd}
            key={prod.productName}
        />
    ))

    const mapCart = () => cart.map((prod, i) => (
        <Prod 
            productName={prod.productName}
            image={prod.image} 
            price={prod.price}
            key={i}
        />
    ))
    const toggleCart = () => setShowCart(!showCart)
    const purchase = async () => {
        try{
            let points = 0
            if(total > 100){
                points = (total * 3) - 250
            } else if(total > 50){
                points = total - 50
            }
            user.points = points + user.points
            setUser(user)

            const obj = {
                products: cart,
                username: user.username,
                total
            }
            axios.put('/user/edit', user)
                .then(res => console.log(res.data))
                .catch(() => console.log("was unable to send user data"))
            
            axios.post('/transactions', obj)
                .then(res => console.log(res))
                .catch(e => console.log(e))
        }
        catch{
            console.log("something went wrong")
        }
    }
    return(
        <>
            <main id="products">
                <div className="welcome">
                    <h1 className="head">Products</h1>
                </div>
                <section className="products">
                    {mapProducts()}
                </section>
                <div className="cart" onClick={() => toggleCart()}>
                    {cart.length} <FaShoppingCart />
                </div>
            </main>
            <section id="cart" style={{display: showCart ? "block" : "none"}} ref={domNode}>
                <div className="welcome">
                    <h1 className="head">Products</h1>
                </div>
                {mapCart()}
                <div className="buy" onClick={() => purchase()}>
                    <div className="buy-button">
                        <h2>Purchase</h2>
                    </div>
                </div>
                <div className="total">
                    ${total}
                </div>
            </section>
        </>
    )
}

export default Products