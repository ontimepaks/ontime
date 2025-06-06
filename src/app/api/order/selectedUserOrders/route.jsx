import dbConnection from "@/db/dbConnection"
import orderModel from "@/models/order.model"
import { NextResponse } from "next/server"




export async function POST(request) {

    try {

        await dbConnection()
        let body=await request.json()

        let {userId}=body;

        let allOrders = await orderModel.find({userId}).populate("serviceId").populate("userId")

        if (!allOrders || allOrders?.length < 1) {
            return NextResponse.json({ success: false, reason: "No orders are present" })
        }


        let orderData = allOrders?.map((eachOrder) => {
            return (
                {   _id:eachOrder._id,
                    serviceName: eachOrder?.serviceId?.name,
                    username: eachOrder?.userProvidedName,
                    catag: eachOrder?.serviceId?.catag,
                    email: eachOrder?.email,
                    phoneNo:eachOrder?.phoneNo,
                    price: eachOrder?.serviceId?.price,
                    orderStatus:eachOrder?.orderStatus,
                    cart:true
                }
            )
        })


        return NextResponse.json({ success: true, msg: "All orders are fetched", orderData })


    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            reason: "error",
        })
    }
}