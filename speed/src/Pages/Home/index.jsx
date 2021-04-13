import React, { useEffect, useState, useContext } from 'react'
import './Home.scss'
import User from '../../Components/home/user'
import { CartContext } from '../../Components/Context'
import axios from 'axios'

const Home = () =>{
    const [ users, setUsers ] = useState([])
    const [ cart, setCart, user, setUser ] = useContext(CartContext)

    useEffect(() =>{
        axios.get('/user/collection')
            .then(res => setUsers(res.data))
    }, [])

    const mapUsers = () => users.map(use => (
        <User 
            name={use.name}
            points={use.points} 
            key={use.id}
            username={user.username}
        />
    ))
        console.log(user)
    return(
        <main id="home">
            <div className="welcome">
                <h1 className="head">Welcome to the User Manager</h1>
                <p className="body">Choose your user</p>
            </div>
            <div className="users">
                {mapUsers()}
            </div>
        </main>
    )
}

export default Home