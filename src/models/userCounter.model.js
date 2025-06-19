import mongoose from "mongoose";


const userCounterSchema = new mongoose.Schema({
    count: {
        type: Number
    }
},
    {
        timestamps: true
    })




export default mongoose.models.userCounter || mongoose.model("userCounter", userCounterSchema) 