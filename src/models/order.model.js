import mongoose, { trusted } from "mongoose";

const orderSchema= new mongoose.Schema({
    serviceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"service"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    userProvidedName:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    email:{
        type:String
    },
    catag:{
        type:String
    }, 
    orderStatus:{
        type:String,
    }
},
{
    timestamps:true
})





export default mongoose.models.order || mongoose.model("order", orderSchema)