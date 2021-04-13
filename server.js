require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const PORT = process.env.PORT || 4000


const app = express()

app.use(helmet())
app.use(compression())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	uri = process.env.ATLAS_URI  // connection string for Atlas here  
} else {
	uri = process.env.ATLAS_URI   // connection string for localhost mongo here  
}

client = mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, client) => {
    if (err) {    
        console.log(err) 
        return
    }   
    console.log("Connected successfully to database") 
});

  /////////////////
 /// ENDPOINTS ///
/////////////////
// const User = require('./routes/user')
const Products = require('./routes/products')
const Transaction = require('./routes/cart')
const User = require('./routes/users')

app.use('/products', Products)
app.use('/transactions', Transaction)
app.use('/user', User)


app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })