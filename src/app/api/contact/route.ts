import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, error: "All fields are required!" }, { status: 400 });
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: { name, email, phone, message },
    });

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json({ success: false, error: "Something went wrong!" }, { status: 500 });
  }  
}
