const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const blogRoute = require('./routes/blog')


const app = express()

/* Connect Database */

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedToPology:false
}).then(()=> console.log("Connected Database success!!"))
.catch((err) =>console.log(err))


/* Middleware */
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

/* Route */
app.use('/api',blogRoute)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`start server in port ${port}`))