

 let mongoose =require('mongoose')

 let sellerSchema = mongoose.Schema({
      name:{
        type:String,
            unique:true,
            minLength:3,
            maxLength:25,
            required:true,
            trim:true
        },
      }
 )

       const sellersModel = mongoose.model("Seller", sellerSchema)

       module.exports= sellersModel