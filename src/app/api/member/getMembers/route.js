import dbConnection from "@/db/dbConnection";
import memberModel from "@/models/member.model";
import { NextResponse } from "next/server";






export async function GET(){
    try {

        await dbConnection()

        let allMembers= await memberModel.find().lean()

        if(!allMembers  || allMembers?.lenght<=0){
            return NextResponse.json({success:false, reason:"no member is found"})
        }

        return NextResponse.json({success:true, msg:"The all member is data is successfuly fetched", allMembers})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false, reason:"error", error})
    }
}