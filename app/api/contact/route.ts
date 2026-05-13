import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function GET() {
  try {
    await dbConnect();
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    return NextResponse.json(leads);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // 1. Connect to MongoDB
    await dbConnect();

    // 2. Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // 3. Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 4. Create the lead in MongoDB
    const newLead = await Lead.create({
      name,
      email,
      message,
      source: "Portfolio Contact Form (MongoDB)",
    });

    console.log("MongoDB Lead Created:", newLead._id);

    return NextResponse.json(
      { message: "Lead saved successfully", id: newLead._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("MONGODB API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
