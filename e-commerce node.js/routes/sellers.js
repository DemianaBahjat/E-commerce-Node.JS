   
  const express = require("express")
  const router =express.Router()
  const {newSeller,createProducts, seeAllProducts ,editProducts,deleteProducts} =require("../controllers/sellers")

  const {auth} = require('../middlewares/auth')




router.post("/" , auth , newSeller)
router.get('/',auth, seeAllProducts )
router.post("/" , createProducts)
router.patch("/:id", editProducts)
router.delete("/:id", deleteProducts)


module.exports= router