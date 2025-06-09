import dbConnection from "@/db/dbConnection"
import orderModel from "@/models/order.model"
import { NextResponse } from "next/server"




export async function GET(request) {

    try {

        await dbConnection()

        let allOrders = await orderModel.find().populate("serviceId").populate("userId")

        if (!allOrders || allOrders?.length < 1) {
            return NextResponse.json({ success: false, reason: "No orders are present" })
        }


        let allOrdersArray = allOrders?.map((eachOrder) => {
            return (
                {   _id:eachOrder._id,
                    serviceImg:eachOrder?.serviceId?.imgUrl,
                    serviceName: eachOrder?.serviceId?.name,
                    username: eachOrder?.userProvidedName,
                    catag: eachOrder?.serviceId?.catag,
                    email: eachOrder?.email,
                    phoneNo:eachOrder?.phoneNo,
                    price: eachOrder?.serviceId?.price,
                    orderStatus:eachOrder?.orderStatus
                }
            )
        })


        return NextResponse.json({ success: true, msg: "All orders are fetched", allOrdersArray })


    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            reason: "error",
        })
    }
}