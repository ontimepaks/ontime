import dbConnection from "@/db/dbConnection"
import orderModel from "@/models/order.model";
import { NextResponse } from "next/server"





export async function POST(request) {
    try {

        await dbConnection()
        let body = await request.json()

        let { changedTo, orderId } = body;


        console.log( changedTo, orderId)

        if (!changedTo) {
            return NextResponse.json({ success: false, msg: "All fileds are required" })
        }


        if (changedTo == "completed") {
            let existingOrder = await orderModel.findOneAndUpdate({ _id: orderId }, { orderStatus: "completed" })
            return NextResponse.json({ success: true, msg: "The order status is changed to completed successfully" })
        }
        else if (changedTo == "cancel") {
            await orderModel.findOneAndDelete({ _id: orderId })
            return NextResponse.json({ success: true, msg: "The order is deleted successfuly" })
        }





    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, reason: "error" })
    }
}