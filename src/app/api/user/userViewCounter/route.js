import dbConnection from "@/db/dbConnection";
import userCounterModel from "@/models/userCounter.model";
import { NextResponse } from "next/server";





export async function GET() {
    try {

        console.log("User view counter api is hitted")

        await dbConnection()

        let existingCounter = await userCounterModel.find()
        // console.log(existingCounter)
        if (existingCounter && existingCounter.length>0) {
            let firstCounterModel=existingCounter[0]
            let existingFirstCounterModel= await userCounterModel.findOneAndUpdate({_id:firstCounterModel._id},{count:firstCounterModel.count+1})
            console.log(existingFirstCounterModel)
            return NextResponse.json({ success: true, msg: "The counter is updated", userCounterLength: existingFirstCounterModel.count })
        } else if(!existingCounter || existingCounter?.length<1) {
            await userCounterModel.create({
                count: 1
            })
            return NextResponse.json({ success: true, msg: "The counter is created" })
        }


    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, msg: "Error" })
    }
}