const express = require('express')
const app = express()
const cors=require('cors')
const port = 5000;
const data = require('./data.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('from server')
})

app.get('/data',(req,res)=>{
    res.send(data)
})


app.listen(port,()=>{
    console.log('server is running')
})

