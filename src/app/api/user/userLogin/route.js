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

        let { email, password, role, authProvider } = body;

        if (
            email == "" ||
            role == "" ||
            !email ||
            !role ||
            !authProvider) {
            return NextResponse.json({ success: false, reason: "All fields are required" })
        }


        if (authProvider == "local" && !password && password == "") {
            return NextResponse.json({ success: false, reason: "The password is required" })
        }


        let existingUser = await userModel.findOne({ email })
        if (!existingUser) {
            return NextResponse.json({ success: false, reason: "User is not registered" })
        }



        if (authProvider == "local" && existingUser.password !== password) {
            return NextResponse.json({ success: false, reason: "Credential are not correct" })
        }



        return NextResponse.json({ success: true, msg: "The user is successfully Logged In ", existingUser })






    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, reason: "error", msg: "Error from user registration", error })
    }
}