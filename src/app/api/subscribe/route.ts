import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Ensure Prisma is properly set up

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    // Save the email in the database
    await prisma.subscriber.create({
      data: { email },
    });

    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });
  } catch (error) {
    console.error("Error subscribing:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
