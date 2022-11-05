const {default:mongoose} = require("mongoose")

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User1"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"  
    },
    amount: Number,
    isFreeAppUser : Boolean,
    date : string,
})

module.exports=mongoose.model("Order",orderSchema)