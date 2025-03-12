import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const certId = searchParams.get('certId');

        if (!certId) {
            return NextResponse.json({ error: 'Certificate ID is required' }, { status: 400 });
        }

        // Validate certId format (example: 10 alphanumeric characters)
        const certIdPattern = /^[A-Za-z0-9]{10}$/;
        if (!certIdPattern.test(certId)) {
            return NextResponse.json({ error: 'Invalid Certificate ID format' }, { status: 400 });
        }

        // Find certificate in the database
        const certificate = await prisma.certificate.findUnique({
            where: { id: certId },
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
    } finally {
        await prisma.$disconnect(); // Ensure the connection is properly closed
    }
}
