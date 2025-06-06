import mongoose from "mongoose";
import { Schema } from "mongoose";




let serviceSchema = new Schema({
    imgUrl: {
        type: String
    },
    name: {
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number
    },
    catag:{
        type:String
    }
}, {
    timestamps: true
})








export default mongoose.models.service || mongoose.model("service", serviceSchema)