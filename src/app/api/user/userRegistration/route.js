import { jwtTokenCreater } from "@/backendUtils/jwtToken";
import dbConnection from "@/db/dbConnection"
import userModel from "@/models/user.model";
import { NextResponse } from "next/server"







export async function POST(req) {
    try {

        await dbConnection();

        let body = await req.json();

        let { name, email, phoneNo, password, role, authProvider } = body;

        // console.log(name, email, phoneNo, password, role, authProvider)

        if (name == "" ||
            email == "" ||
            role == "" ||
            authProvider == "" ||
            !authProvider ||
            !name ||
            !email ||
            !role) {
            return NextResponse.json({ success: false, reason: "All fields are required" })
        }


        if(role=="admin"){
            let existingAdmin= await userModel.find({role:"admin"})
            console.log("existingAdmin", existingAdmin)
            if(existingAdmin && existingAdmin?.length>=1){
                return NextResponse.json({success:false, reason:"The admin is already present"})
            }
        }


        let existingUser = await userModel.findOne({ $or: [{ phoneNo }, { email }] })
        if (existingUser) {
            return NextResponse.json({ success: false, reason:"The user is already present on this number and email", msg: "The user on this credential is already present", existingUser })
        }



        let createdUser = await userModel.create({
            name,
            email,
            phoneNo,
            password,
            role,
            authProvider
        })


        let token = jwtTokenCreater({ id: createdUser?._id })

        if (!token) {
            return NextResponse.json({ success: false, reason: "Something went in wrong in creating token" })
        }


        let response= NextResponse.json({ success: true, msg: "The user is successfully created", token, createdUser })

        response.cookies.set({
            name:"user",
            value:token,
            httpOnly:true,
            sameSite:"strict",
            maxAge:60*60*24*5
        })


        return response;




    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, reason: "error", msg: "Error from user registration", error })
        // throw new Error("The error from user registration in next backend", error)
    }
}