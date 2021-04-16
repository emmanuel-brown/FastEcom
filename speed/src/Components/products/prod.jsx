import React from 'react'

export const Prod = props =>{
    const { productName, price, image, addProd, quantity, removeProd } = props

    return(
        <>
            <div className="prod" key={productName} onClick={() => addProd(props)}>
                <div className="imgContainer">
                    <img src={image} alt={productName} />
                </div>
                <p className="prod-name">{productName}</p>
                <p className="prod-price">${price}</p>
            </div>
        </>
    )
}

export const CartProd = props =>{
    const { productName, price, image, addProd, quantity, removeProd } = props
    
    return(
        <>
            <div className="prod" key={productName}>
                <div className="imgContainer">
                    <img src={image} alt={productName} />
                </div>
                <p className="prod-name">{productName}</p>
                <p className="prod-price">${price}</p>
                {quantity && <div>{quantity}</div>}
                <div className="buttons">
                    <div onClick={() => removeProd(productName)}>-</div>
                    <div onClick={() => addProd(props)}>+</div>
                </div>
            </div>
        </>
    )
}