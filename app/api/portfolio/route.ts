import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

// Allow larger payloads for Base64 images
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const portfolio = await Portfolio.find({}).sort({ createdAt: -1 });
    return NextResponse.json(portfolio);
  } catch (error: any) {
    console.error("MONGODB GET ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { title, description, before, after } = body;

    if (!title || !description || !before || !after) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newProject = await Portfolio.create({
      title,
      description,
      before,
      after,
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error: any) {
    console.error("MONGODB POST ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
