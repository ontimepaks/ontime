import { jwtTokenDecrypter } from "@/backendUtils/jwtToken";
import dbConnection from "@/db/dbConnection";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";





export async function POST(request) {
    try {

        await dbConnection();

        let body = await request.json()
        let { email } = body;

        // console.log("The userAuth email is: ", email)

        let existingUser = await userModel.findOne({ email })

        if (!existingUser) {
            return NextResponse.json({ success: false, reason: "No user is existed" })
        }


        return NextResponse.json({ success: true, msg: "the user is authenticated successfully" })

    } catch (error) {
        return NextResponse.json({ success: false, reason: "Error", error })
    }
}