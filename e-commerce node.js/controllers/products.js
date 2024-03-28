
   const productsModel= require('../models/products')


   const createProduct= async (req, res) => {
    let dataProduct= req.body;
    let createProduct= await productsModel.create(dataProduct);
    res.json({message: "Added Success", createProduct});
};

 const getAllProducts = async (req, res) => {
    try {
      const products = await productsModel.find().populate('seller', 'name');
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
    const UserSearch= async (req, res) => {
    let {name}= req.body;
    try{
    let foundedProduct= await productsModel.findOne(name);
    if(foundedProduct){
        res.json({message: "founded it", foundedProduct});
    }else{
        res.json({message: "Not founded product"});
    }}
    catch(err){
        res.json({message: err.message});
    }
};

 const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      await product.remove();
      res.json({ message: 'Product deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {createProduct,UserSearch ,getAllProducts}
