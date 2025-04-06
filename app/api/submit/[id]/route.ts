import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  context: { params: { id: string } } 
) {
  const { params } = await context; 
  return NextResponse.json({
    message: "Updated successfully!",
    id: params.id,
  });
}
