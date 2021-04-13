require("dotenv").config()
const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true
    },
    points: {
        type: Number,
        required: true
    },
    created_at: { 
        type: Date, 
        required: true, 
        default: Date.now 
    }
})

const UserModel = mongoose.model("Users", UserSchema)

module.exports = UserModel