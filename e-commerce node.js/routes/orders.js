const express =require('express')
    const router =express.Router()
    const{createOrder,getAllOrders} =require('../controllers/orders')
    const { auth,restrictTo } = require('../middlewares/auth')




   
   router.post("/" , auth ,restrictTo('User'),createOrder)
   router.get("/" , auth ,restrictTo('User'),getAllOrders)

   
   

  
   module.exports= router