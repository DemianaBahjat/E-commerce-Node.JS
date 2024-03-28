
const mongoose =require('mongoose')


  let productsSchema=mongoose.Schema({
        name:{
            type:String,
            unique:true,
            minLength:3,
            maxLength:25,
            required:true,
            trim:true
        },
        description :{
            type:String,
            required:true,
            trim:true

        },
        photo:{
             type:String,
             default:''
        },
        price: {
            type: Number,
            required: true
          },
        sellerId:{
            type: mongoose.SchemaTypes.ObjectId,
            ref:"Seller"
        },
        userId:{
            type: mongoose.SchemaTypes.ObjectId,
            ref:"User"

        }},{timestamps:true})



    const productsModel=mongoose.model("Product", productsSchema)


    module.exports= productsModel