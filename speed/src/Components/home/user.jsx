import React from 'react'

const User = props => {
    const { 
        name,
        points,
        // address,
        // phone,
        // website,
        // company,
        // myNotes
    } = props
    return(
        <div className="user">
            <p className="detes">{name}</p>
            <p className="detes">Points: {points}</p>
        </div>
    )
}

export default User