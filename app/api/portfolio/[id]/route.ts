import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const body = await request.json();
    const updatedProject = await Portfolio.findByIdAndUpdate(id, body, {
      new: true,
    });
    return NextResponse.json(updatedProject);
  } catch (error: any) {
    console.error("PUT ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    await Portfolio.findByIdAndDelete(id);
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error: any) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
