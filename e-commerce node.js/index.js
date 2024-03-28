   const express = require('express')
   const mongoose = require('mongoose')
   const productsRoutes = require('./routes/products')
   const usersRoutes = require('./routes/users')
   const sellersRoutes= require('./routes/sellers')
   const ordersRoutes= require('./routes/orders')
   const dotenv= require('dotenv')
   const cors= require('cors')
   const usersModel = require('./models/users')

   const app =express()
   var PORT= 3000


        mongoose.connect("mongodb://127.0.0.1:27017/myWork" ).then(()=>{
           console.log(" connected")
        }).catch((err) => {
               console.log(err)
        })
     
  app.use(express.json())
  app.use("/products", productsRoutes)
  app.use('/users', usersRoutes)
  app.use("/sellers", sellersRoutes)
  app.use("/orders",ordersRoutes)
  app.use(express.static('./static'))

 // set view engine
 app.set('view engine', 'pug')

 // set  folder 
 app.set('view', './views')


 app.get('/viewUsers',async (req,res) =>{
   let users= await usersModel.find()
       res.render('users', {data:users})
 })



   // not found middleware
    app.use('*' ,(req,res ,next)=>{
           res.status(404).json({message: `You cannot access ${req.originalUrl}`})
    })

    // error middleware
     app.use((err, req, res, next)=>{
        res.status(500).json({message:err.message})
     })
     
   //cors
  app.use(cors({
   origin:'*'

   }))
  
  dotenv.config()
  

   app.listen(PORT, () =>{
      console.log(` server starting listening sussccfully on port ${PORT}`)
   })
