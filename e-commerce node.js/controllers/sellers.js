   
  const sellersModel =require("../models/sellers")
  const ProductModel = require('../models/products')


    const newSeller= async (req, res) => {
    let dataSeller= req.body;
    let createSeller= await sellersModel.create(dataSeller);
    res.json({message: "Added Success", createSeller});
};

    const seeAllProducts= async (req, res) => {
    let {id}= req.params;
    try{
        let getProduct= await ProductModel.findOne({sellerId: id});
        res.json({message: "get it", getProduct});  
    }catch(err){
        res.json({message: err.message});
    }
      
};

    const createProducts= async (req, res) => {
    let newProduct= req.body;
    let createProduct= await ProductModel.create(newProduct);
    res.json({message: "Created Success", createProduct});
};

   const editProducts= async (req, res) => {
    let {id}= req.params;
    let {name}= req.body;
    let updateProduct= await ProductModel.findByIdAndUpdate(id, {name}, {new: true});
    res.json({message: "Updated Successfully", updateProduct});
};

    const deleteProducts= async (req, res) => {
    let {id}= req.params;
    let deleteProduct= await ProductModel.findByIdAndDelete(id);
    if(deleteProduct){
        res.json({message: "Deleted"});
    }else{
      res.json({message: "Product Not Founded to Deleted"});
    }
}


module.exports= {newSeller,createProducts, seeAllProducts ,editProducts,deleteProducts}