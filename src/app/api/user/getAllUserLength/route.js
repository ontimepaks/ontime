import dbConnection from "@/db/dbConnection";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";




export async function GET(request) {
    try {

        await dbConnection()


        let allUser = await userModel.find().lean()

        if (!allUser || allUser?.length < 1) {
            return NextResponse.json({ success: false, reason: "No user is found" })
        }

        let userLength = allUser?.length;

        return NextResponse.json({ success: true, msg: "All user lenght are fetched", userLength })


    } catch (error) {
        return NextResponse.json({ success: false, reason: "error" })
    }
}