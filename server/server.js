const express = require("express")
const app = express()
const path = require("path")
const {books} = require('./data')
const PORT = process.env.PORt || 1050

app.get('/text',(req,res)=>{
    res.send("text")
})

app.get('/file', (req,res)=>{
    const path1=path.join(__dirname,"p.JPG")
    res.sendFile(path1)
})

app.get('/html', (req,res)=>{
    res.send("<h3>TO The Picture</h3><a href='/file'>Products</a>")
})

app.get('/arr',(req,res)=>{
    res.json(books)
})
//רשות
app.get('/arr2',(req,res)=>{
    const books2 = books.map((a)=>{return {name:a.name,autor:a.autor,price:a.price }})
    res.json(books2)
})

app.listen(PORT,()=>{
    console.log("listen")
})