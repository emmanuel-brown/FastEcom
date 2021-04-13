require("dotenv").config();
// const auth = require('../middleware/auth')
const ProductRouter = require('express').Router()
const Product = require('../models/products.models')

const toArray = prop => typeof prop === 'string' ? [ prop ] : prop
const validateProps = (allowed, incoming) => incoming.every(incoming => allowed.includes(incoming))

/*
    use req.user from auth to see if user is admin to create a product
    get request needs help
*/

// POST

ProductRouter.post('/create', async (req, res) =>{
    const {
        productName,
        price,
        image
    } = req.body
    const productProperties = {
        productName,
        price,
        image
    }
    try{
        const doesProductExist = await Product.findOne({ productName })
        if(doesProductExist) res.status(400).send("product already exist")
        const product = await new Product(productProperties)
        product.save()

        res.status(200).send(product)
    } catch (e){
        res.status(400).send("Was unable to create new product")
    }
})

ProductRouter.get('/collection', async (req, res) =>{ //this component needs help with filtering

    try{
        const products = await Product.find({})
        res.status(200).send(products)
    } catch (e){
        res.status(400).send({
            error: "unable to retieve products"
        })
    }
})

module.exports = ProductRouter