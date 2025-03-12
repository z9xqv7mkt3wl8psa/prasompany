import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const SECRET_KEY = process.env.SECRET_KEY as string; // Load from environment variables

if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined in the environment variables.');
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get('token');

        if (!token) {
            return NextResponse.json({ error: 'Certificate token is required' }, { status: 400 });
        }

        // Decode and verify JWT token
        let decoded;
        try {
            decoded = jwt.verify(token, SECRET_KEY) as {
                userId: string;
                certificateType: string;
                iat: number;
                exp: number;
            };
        } catch (_error) {
            console.error('JWT verification failed:', _error);
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
        }

        // Validate token data
        const certificate = await prisma.certificate.findUnique({
            where: { userId: decoded.userId },
        });

        if (!certificate) {
            return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
        }

        return NextResponse.json({
            message: 'Certificate is valid',
            recipient: certificate.recipient,
            course: decoded.certificateType,
            issuedDate: certificate.issuedDate,
        });
    } catch (error) {
        console.error('Error verifying certificate:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    } finally {
        await prisma.$disconnect(); // Close connection to prevent leaks
    }
}
