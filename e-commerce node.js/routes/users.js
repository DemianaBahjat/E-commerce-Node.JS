   
   const express =require('express')
   const router =express.Router()
    const{createUser,getAllUser,editInfo, login} =require('../controllers/users')
    const {auth, restrictTo} = require('../middlewares/auth')





   
   router.post("/" ,createUser)
   router.get("/",  getAllUser)
   router.patch("/:id",auth,editInfo)
   router.post("/login" , login)





module.exports=router