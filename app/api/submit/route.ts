import { NextResponse } from "next/server";

export async function POST (request:Request){
    const body=await request.json();

    
    return NextResponse.json({
        message: "Hello, world!",
        data:body
    })
}

export async function GET() {

    for(let i=0;i<10000000;i++){
    }
    const start = Date.now();
    const response = NextResponse.json({ message: "Hello, world!" });
    console.log("Response Time:", Date.now() - start, "ms");
    return response;
}



