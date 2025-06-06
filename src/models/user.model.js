import mongoose from "mongoose";



const userSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    password:{
        type:String
    },
    role:{
        type:String,
        emum:["user", "admin"]
    },
    authProvider:{
        type:String
    }
},
{
 timestamps:true
}
)



export default mongoose.models.user || mongoose.model("user", userSchema)