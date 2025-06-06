import dbConnection from "@/db/dbConnection";
import memberModel from "@/models/member.model";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";






export async function POST(request){
    try {

        await dbConnection()

        let body= await request.json()

        let {name, desc, price, catag}= body;

        if(name=="" || !name || desc=="" || !desc  || price=="" || !price || !catag){
            return NextResponse.json({success:false, reason:"All fileds are required", name, desc})
        }


        let createdService= await serviceModel.create({
            name,
            desc,
            price,
            catag
        })



        if(!createdService){
            return NextResponse.json({success:false, reason:"service is not successfully creted"})
        }


        return NextResponse.json({success:true, msg:"The service is successfully created", createdService})





        
        
    } catch (error) {
        return NextResponse.json({success:false, reason:"error", error})
    }
}