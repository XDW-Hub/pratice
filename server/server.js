const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {sequelize} = require('./models/index')
 
const app = express()
app.use(bodyParser.json())
app.use(morgan("combined"))

app.get('/api',(req,res)=>{
    res.send({
        msg:'Hello World'
    })
})

app.post('/users',(req,res)=>{
    console.log(req.body)
    res.send({
        code:200,
        data:req.body
    })
})

sequelize.sync()
    .then(()=>{
        console.log('connection has been established successfully')
        app.listen(3000,()=>{
            console.log('server has been started on port 3000') 
        })
    })
    .catch(
        err => {
            console.error('unable to connect to the database:',err)
        }
    )