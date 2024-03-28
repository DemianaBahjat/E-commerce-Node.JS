
const jwt= require('jsonwebtoken')

let {promisify} = require('util')


 async function auth( req, res, next){
     const  {authorization}=req.headers
       if(!authorization){
             res.status(401).json({message:' unauthenticated, you must login first'})
       }
       
       try{
            let decoded =await promisify(jwt.verify)(authorization,process.env.SECRET_KEY) ()
            console.log(decoded)
            req.id= decoded.data.id
            req.role= decoded.data.role
            next()
       }catch(err){
           return res.status(401).json({message:' unauthorized'})
       }
     

}


  function restrictTo(...roles){
            return (req,res,next) =>{
                 if(!roles.includes(req.role)){
                   return  res.status(403).json({message:'you don not have permission to do this action  '})
                 }
                 next()
            }
  }
module.exports= {auth,restrictTo}