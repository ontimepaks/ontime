import mongoose from "mongoose";
import { Schema } from "mongoose";




let memberSchema= new Schema({
    imgUrl:{
        type:String
    },
    name:{
        type:String
    },
    desc:{
        type:String
    },
    contactNo:{
        type:Number
    }
},{
    timestamps:true
})








export default mongoose.models.member || mongoose.model("member", memberSchema)