import dbConnection from "@/db/dbConnection";
import memberModel from "@/models/member.model";
import { NextResponse } from "next/server";






export async function POST(request){
    try {

        await dbConnection()

        let body= await request.json()

        let {name, desc, contact}= body;

        // console.log(name, desc, contact)

        if(name=="" || !name || desc=="" || !desc){
            return NextResponse.json({success:false, reason:"All fileds are required", name, desc})
        }


        let createdMember= await memberModel.create({
            name,
            desc,
            contact
        })



        if(!createdMember){
            return NextResponse.json({success:false, reason:"Member is not successfully creted"})
        }


        return NextResponse.json({success:true, msg:"The member is successfully created", createdMember})





        
        
    } catch (error) {
        return NextResponse.json({success:false, reason:"error", error})
    }
}