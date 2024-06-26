
const express = require('express')
const dotnev = require('dotenv')
const bodyParser = require('body-parser')

const app = express()
const port =  process.env.PORT || 3001

app.use(bodyParser.json())

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})

