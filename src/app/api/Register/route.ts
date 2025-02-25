import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, company, phone, projectType, message } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !projectType || !message) {
      return NextResponse.json({ success: false, error: "All required fields must be filled!" }, { status: 400 });
    }

    // Store data in Prisma `Register` model
    const register = await prisma.register.create({
      data: { firstName, lastName, email, company, phone, projectType, message },
    });

    return NextResponse.json({ success: true, register }, { status: 201 });
  } catch (error: unknown) {
    console.error("Database Error:", error);

    // Handle unique email constraint error
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: "Email already exists!" }, { status: 400 });
    }

    return NextResponse.json({ success: false, error: "Something went wrong!" }, { status: 500 });
  }
}
