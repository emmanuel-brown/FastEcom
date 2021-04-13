import React from 'react'

const User = props => {
    const { 
        name,
        email,
        // address,
        // phone,
        // website,
        // company,
        // myNotes
    } = props
    return(
        <div className="user">
            <p className="detes">{name}</p>
            <p className="detes">{email}</p>
            <p className="detes">{email}</p>
            <p className="detes">{email}</p>
        </div>
    )
}

export default User