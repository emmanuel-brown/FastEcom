import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context'

const Navbar = () =>{
    const [cart, setCart, user, setUser] = useContext(CartContext)
    useEffect(() =>{
        axios.get('/user/Collection')
            .then(res => setUser(res.data[0]))
    }, [])
    
    return(
        <nav id="navbar">
            <div className="header">
                <h1 className="header-head">Spectrum</h1>
            </div>
            <div className="sites">
                <Link className="sites-link" to='/'>Home</Link>
                <Link className="sites-link" to='/products'>Products</Link>
            </div>
            <section className="user">
                {user.name}
            </section>
        </nav>
    )
}

export default Navbar