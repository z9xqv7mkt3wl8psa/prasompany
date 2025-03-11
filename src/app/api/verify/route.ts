import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const certId = searchParams.get('certId');

        if (!certId || certId.length !== 10) {
            return NextResponse.json({ error: 'Invalid Certificate ID' }, { status: 400 });
        }

        // Find certificate in the database
        const certificate = await prisma.certificate.findUnique({
            where: { id: certId }, // Ensure your database has an 'id' field with a 10-digit value
        });

        if (!certificate) {
            return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
        }

        return NextResponse.json({
            message: 'Certificate is valid',
            recipient: certificate.recipient,
            course: certificate.course,
            issuedDate: certificate.issuedDate,
        });
    } catch (error) {
        console.error('Error verifying certificate:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
