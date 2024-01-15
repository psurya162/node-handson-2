const express = require("express")

const app =express()

const PORT =5500

app.get('/',(req,res)=>{
    res.send("This Is Home Page")
})

app.get('/Page',(req,res)=>{
    res.send("This is Page ")
})

app.get('/express',(req,res)=>{
    res.send("Express.js, commonly known as Express, is a web application framework for Node.js, a server-side JavaScript runtime.Express.js simplifies the process of building web applications and APIs by providing a set of robust features and tools. It is lightweight and flexible, allowing developers to create web servers and define routes quickly. Express is particularly popular for building RESTful APIs due to its simplicity and minimalistic design.")
})

app.listen(PORT,()=>{
    console.log(`The Server is Running on PORT no ${PORT}`)
})