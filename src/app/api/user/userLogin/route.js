// this force the website to run on the node.js runtime due to which now the jwt is working
export const runtime = 'nodejs'

import { jwtTokenCreater } from "@/backendUtils/jwtToken";
import dbConnection from "@/db/dbConnection"
import userModel from "@/models/user.model";
import { NextResponse } from "next/server"







export async function POST(req) {
    try {

        await dbConnection();

        let body = await req.json();

        let { email, password, role } = body;

        if (
            email == "" ||
            password == "" ||
            role == "" ||
            !email ||
            !password ||
            !role) {
            return NextResponse.json({ success: false, reason: "All fields are required" })
        }


        let existingUser = await userModel.findOne({ email })
        if (!existingUser) {
            return NextResponse.json({ success: false, reason: "User is not registered" })
        }



        if (existingUser.password !== password) {
            return NextResponse.json({ success: false, reason: "Credential are not correct" })
        }


        // let token = jwtTokenCreater(existingUser?._id)
        // if (!token) {
        //     return NextResponse.json({ success: false, reason: "Something went in wrong in creating token" })
        // }


        return NextResponse.json({ success: true, msg: "The user is successfully Logged In ", existingUser })






    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, reason: "error", msg: "Error from user registration", error })
    }
}