  
    const express =require('express')
    const router =express.Router()
    const{createProduct,getAllProducts, UserSearch} =require('../controllers/products')
    const { auth,restrictTo } = require('../middlewares/auth')




   
   router.post("/" ,createProduct)
   router.get("/", getAllProducts)
   router.get("/" ,auth, UserSearch )
   
//    router.patch("/",auth, restrictTo('Admin', 'User'), updateById)
  




   module.exports= router