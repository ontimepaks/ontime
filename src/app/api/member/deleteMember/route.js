import dbConnection from "@/db/dbConnection";
import memberModel from "@/models/member.model";
import { NextResponse } from "next/server";







export async function POST(request){
    try {

        await dbConnection()
        let body= await request.json()
        let {memberId}= body;

        let existingMember= await memberModel.findOneAndDelete({_id:memberId})
        let allMembers= await memberModel.find()

        
        return NextResponse.json({success:true, msg:"The member is deleted", allMembers })

        

    } catch (error) {
        return NextResponse.json({success:false, reason:"error", error})
    }
}