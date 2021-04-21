require("dotenv").config()
const mongoose = require('mongoose')


const TransactionSchema = mongoose.Schema({
    products: {
        type: Array,
        require: true,
    },
    username: {
        type: String,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    pointsEarned: {
        type: Number,
    },
    status:{
        type: String,
    },
    created_at: { 
        type: Date, 
        required: true, 
        default: Date.now 
    }
})

const ProductModel = mongoose.model("Transactions", TransactionSchema)

module.exports = ProductModel