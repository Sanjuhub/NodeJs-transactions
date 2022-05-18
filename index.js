const express = require('express')
const transactionRoutes = require('./transactionRouter')

const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Up and running.")
})

app.use(transactionRoutes)

app.listen(5000)