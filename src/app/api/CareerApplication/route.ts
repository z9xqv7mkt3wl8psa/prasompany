import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, resumeUrl, jobTitle, experience, coverLetter, linkedin, github, portfolio } = body;

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !resumeUrl || !jobTitle || !experience) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to Prisma database
   await prisma.careerApplication.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        resumeUrl,
        jobTitle,
        experience: parseInt(experience, 10),
        coverLetter,
        linkedin,
        github,
        portfolio,
      },
    });

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL, // Set this in your environment variables
        pass: process.env.ADMIN_EMAIL_PASSWORD, // Set this in your environment variables
      },
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, 
      subject: "New Career Application Received",
      text: `New application received:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nResume: ${resumeUrl}\nJob Title: ${jobTitle}\nExperience: ${experience} years\nLinkedIn: ${linkedin}\nGitHub: ${github}\nPortfolio: ${portfolio}\n\nCover Letter:\n${coverLetter}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Application submitted successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
