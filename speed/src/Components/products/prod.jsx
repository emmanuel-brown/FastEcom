import React from 'react'

const Prod = props =>{
    const { productName, price, image, addProd } = props
    return(
        <div className="prod" key={productName} onClick={() => addProd(props)}>
            <div className="imgContainer">
                <img src={image} alt={productName} />
            </div>
            <p className="prod-name">{productName}</p>
            <p className="prod-price">${price}</p>
        </div>
    )
}

export default Prod