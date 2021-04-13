require("dotenv").config();
// const auth = require('../middleware/auth')
const UserRouter = require('express').Router()
const User = require('../models/users.models')

const toArray = prop => typeof prop === 'string' ? [ prop ] : prop
const validateProps = (allowed, incoming) => incoming.every(incoming => allowed.includes(incoming))

/*
    use req.user from auth to see if user is admin to create a product
    get request needs help
*/

// POST

UserRouter.post('/create', async (req, res) =>{
    const {
        name,
        username,
        points,
    } = req.body
    const userProperties = {
        name,
        username,
        points,
    }
    try{
        const doesUserExist = await User.findOne({ username })
        if(doesUserExist) res.status(400).send("user already exist")
        const user = await new User(userProperties)
        user.save()

        res.status(200).send(user)
    } catch (e){
        res.status(400).send("Was unable to create new user")
    }
})

UserRouter.put('/edit', async (req, res) =>{
    const updates = Object.keys(req.body)
    const {
        username,
        points,
        name
    } = req.body
    console.log(req.body)
    try{
        const user = await User.findOne({ username })
        updates.forEach(update => user[update] = req.body[update])
        console.log(req.body)
        user.save()
        res.status(200).send(user)
    }
    catch{
        res.status().send("wasn unable to edit user")
    }
})

UserRouter.get('/collection', async (req, res) =>{ //this component needs help with filtering

    try{
        const Users = await User.find({})
        res.status(200).send(Users)
    } catch (e){
        res.status(400).send({
            error: "unable to retieve users"
        })
    }
})

module.exports = UserRouter