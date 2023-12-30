const express = require('express')
const app = express()
let counter = 0;
app.get('/test', async(req,res) =>{
    counter++;
    res.send("Ok");
})

app.get('/counter', async(req,res) =>{
    res.send("Counter is "+counter);
})
app.listen(process.env.PORT || 3000)
