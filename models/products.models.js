require("dotenv").config()
const mongoose = require('mongoose')


const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
    created_at: { 
        type: Date, 
        required: true, 
        default: Date.now 
    }
})

const ProductModel = mongoose.model("Products", ProductSchema)

module.exports = ProductModel