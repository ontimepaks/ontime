import dbConnection from "@/db/dbConnection";
import orderModel from "@/models/order.model";
import { NextResponse } from "next/server";





export async function POST(request) {
    try {

        await dbConnection();
        let body = await request.json()

        let { name, email, phoneNo, serviceId, userId } = body;

        // console.log(name, email, phoneNo, serviceId, userId)

        if (!name || !email || !phoneNo || !serviceId) {
            return NextResponse.json({ success: false, reason: "All fields are required" })
        }


        let createdOrder = await orderModel.create({
            userProvidedName: name,
            userId,
            serviceId,
            phoneNo,
            email,
            orderStatus:"pending"
        })


        let userRelatedOrders = await orderModel.find()

        return  NextResponse.json({ success: true, msg: "The order is created", userRelatedOrders })
  


    } catch (error) {
        return NextResponse.json({ success: false, reason: "error", error })
    }
}