import dbConnection from "@/db/dbConnection";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";







export async function POST(request){
    try {

        await dbConnection()
        let body= await request.json()
        let {serviceId}= body;

        let existingServices= await serviceModel.findOneAndDelete({_id:serviceId})
        let allServices= await serviceModel.find()

        
        return NextResponse.json({success:true, msg:"The member is deleted", allServices })

        

    } catch (error) {
        return NextResponse.json({success:false, reason:"error", error})
    }
}