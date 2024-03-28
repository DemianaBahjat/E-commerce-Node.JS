const userModel = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser=async function(req,res){
 
  try{
    var user = req.body
    var user = await userModel.create(user)
    res.status(200).json(user)
  }catch(err){
        res.status(400).json({message: err.message})
  }
  
}
const getAllUser = async function(req , res) {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
}

const editInfo= async (req, res) => {
  let {id}= req.params;
  let {name}= req.body;
  let updateProduct= await userModel.findByIdAndUpdate(id, {name}, {new: true});
  res.json({message: "Updated Successfully", updateProduct});
};

  

  const login= async (req, res) =>{

     // req.body
       const{email, password} =req.body

   
          if(!email || !password){
                return res.status(400).json({message: 'you must provide email and password'})
          }
     
             const user =await userModel.findOne({email : email})
              if (! user){
                return res.status(404).json({message:' invalid email or password'})
              }

              const isValid =await bcrypt.compare(password, user.password)
              if(! isValid){
              return res.status(401).json({message:'invalid email or password'})
              }

   
        
   const token = await jwt.sign(
    {data:{email: user.email, id: user._id ,role:user.role }}, 

    process.env.SECRET_KEY,

    { expiresIn: '1h' })

   res.status(200).json({message:' sign sussccfully' , token: token})


             
   }


 module.exports={createUser,getAllUser,login,editInfo}



