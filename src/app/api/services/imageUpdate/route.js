import dbConnection from "@/db/dbConnection";
import memberModel from "@/models/member.model";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";





export async function POST(request){
    try {
        await dbConnection()

        let body=await request.json()

        let {serviceId,imgUrl}=body;

        // console.log(serviceId,  imgUrl)

        if(!serviceId){
            return NextResponse.json({success:false,reason:"No memberId is found", serviceId})
        }

        let currentService= await serviceModel.findOneAndUpdate({_id:serviceId}, {imgUrl})

        if(!currentService){
            return NextResponse.json({success:false, reason:"The member is not updated and somethings wend wrong in it."})
        }


        let existingService= await serviceModel.find().lean()
        if(!existingService || existingService?.length<1){
            return NextResponse.json({success:false, reason:"no members are present"})
        }

        return NextResponse.json({success:true, msg:"All member are fetched", allServicesData:existingService})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false, reason:"error", error})
    }
}