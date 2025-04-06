import { NextResponse } from "next/server";
import Comments from "../data";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const data = Comments.find((comment) => comment.id === parseInt(id));
  if (!data) {
    return NextResponse.json({ message: "Data not found" });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { text } = await req.json();

  const data = Comments.findIndex((comment) => comment.id === parseInt(id));

  Comments[data].comments=text
  return NextResponse.json(data);
}



export async function DELETE(req:Request, { params }: { params: Promise<{ id: string }> }
){
    const {id}=await params;

    const data=Comments.findIndex((comment)=>comment.id===parseInt(id));
    const removed=Comments[data];
    Comments.splice(data,1)
    return NextResponse.json(removed);
}
