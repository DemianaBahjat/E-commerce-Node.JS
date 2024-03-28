  const ordersModel= require('../models/orders')

 const createOrder= async (req, res) => {
    let addOrder= req.body;
    let orderAdd= await ordersModel.create(addOrder);
    res.json({message: "Ordered Made", orderAdd});
};

const getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate('user', 'username');
      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
 module.exports= {createOrder,getAllOrders}