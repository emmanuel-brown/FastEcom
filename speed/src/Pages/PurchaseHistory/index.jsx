import React, { useEffect, useState, useContext} from 'react'
import { CartContext } from '../../Components/Context'
import axios from 'axios'
import './Purchase.scss'

const Purchased = (p, i) => (
    <div className="purchase" key={i}>
        <p className="detes">Username: { p.username }</p>
        <p className="detes">Points Earned: { p.pointsEarned }</p>
        <p className="detes">Total: { p.total }</p>
    </div>
)

const PurchaseHistory = () =>{
    const [cart, setCart, user, setUser] = useContext(CartContext)
    const [ history, setHistory ] = useState([])
    
    useEffect(() => {
        console.log(user)
        axios.post("/transactions/user", { username: user.username })
            .then(res => setHistory(res.data))
            .catch(() => console.log("was unable to retrieve transactions"))
    }, [])

    return (
        <main id="transactions">
            <div className="welcome">
                <h1 className="head">Purchase History</h1>
            </div>
            <section className="purchases">
                {history.length > 0 ? history.map((purchase, i) => Purchased(purchase, i)) : <h1>There are no transactions</h1>}
            </section>
        </main>
    )
}

export default PurchaseHistory