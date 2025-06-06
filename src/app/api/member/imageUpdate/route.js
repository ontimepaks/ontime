import dbConnection from "@/db/dbConnection";
import memberModel from "@/models/member.model";
import { NextResponse } from "next/server";





export async function POST(request){
    try {
        await dbConnection()

        let body=await request.json()

        let {memberId,imgUrl}=body;

        // console.log(memberId,  imgUrl)

        if(!memberId){
            return NextResponse.json({success:false,reason:"No memberId is found", memberId})
        }

        let currentMember= await memberModel.findOneAndUpdate({_id:memberId}, {imgUrl})

        if(!currentMember){
            return NextResponse.json({success:false, reason:"The member is not updated and somethings wend wrong in it."})
        }


        let existingMember= await memberModel.find().lean()
        if(!existingMember || existingMember?.length<1){
            return NextResponse.json({success:false, reason:"no members are present"})
        }

        return NextResponse.json({success:true, msg:"All member are fetched", allMembersData:existingMember})
        
    } catch (error) {
        return NextResponse.json({success:false, reason:"error", error})
    }
}