import dbConnection from "@/db/dbConnection";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";





export async function GET(){
    try {

        await dbConnection()

        let allServices= await serviceModel.find().lean()

        if(!allServices  || allServices?.lenght<=0){
            return NextResponse.json({success:false, reason:"no service is found"})
        }

        return NextResponse.json({success:true, msg:"The all service is data is successfuly fetched", allServices})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false, reason:"error", error})
    }
}