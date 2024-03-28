      
     let mongoose =require("mongoose")
     

       const ordersSchema = mongoose.Schema({
               productsId:{
                    type:mongoose.SchemaTypes.ObjectId,
                    ref:"Product"
               },
               
              usersId:{
               type: mongoose.SchemaTypes.ObjectId,
               ref:"User"
              }

              },{timestamps:true})

     const ordersModel = mongoose.model("Order", ordersSchema)
     
     module.exports= ordersModel