import React from 'react'

const User = props => {
    const { 
        name,
        points,
        clicked,
        i
        // address,
        // phone,
        // website,
        // company,
        // myNotes
    } = props
    return(
        <div className="user" onClick={() => clicked(i)}>
            <p className="detes">{name}</p>
            <p className="detes">Points: {points}</p>
        </div>
    )
}

export default User