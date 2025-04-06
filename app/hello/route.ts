import { NextRequest, NextResponse } from "next/server";
import comments from "./data"
// import Comments from "./data";
import { cookies, headers } from "next/headers";
// import { redirect } from "next/navigation";
export async function GET(req:NextRequest){
    // redirect("https://google.com")
    // const searchParams=req.nextUrl.searchParams;
    // const id=searchParams.get("id")
    const header=await headers()
    console.log("header",header.get("Authorization"))

    const reqheader=new Headers(req.headers)
    console.log("reqheder",reqheader.get("Authorization"))

    // const filter=id ?Comments.filter((comment)=>comment.comments.includes(id!)):Comments;

    // let cooki=req.cookies.get("name")
    // console.log(cooki)

    const cookieStore=await cookies();
    cookieStore.set("champak","chachaji")
    console.log(cookieStore.get("champak"))

    return (
        NextResponse.json(comments,{
            status:200
        })
        // new Response("hello bro",{
        //     headers:{
        //         "Content-type":"text/plain",
        //         "Set-Cookie":"name=Hello;"
        //     }
        // })
    )
}

export async function POST(req:Request){
    const comment=await req.json();
    const newComment={
        id:comments.length+1,
        comments:comment.text
    }
    comments.push(newComment);
    return NextResponse.json(comments,{
        status:201
    })

}  