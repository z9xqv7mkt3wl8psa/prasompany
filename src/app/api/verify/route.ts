import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const SECRET_KEY = process.env.SECRET_KEY as string;

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

    let decoded;
    try {
      decoded = jwt.verify(token, SECRET_KEY) as {
        userId: string; // Fixed to userId
        certificateType: string;
        iat: number;
        exp: number;
      };
    } catch (_error) {
      console.error('JWT verification failed:', _error);
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    const certificate = await prisma.certificate.findUnique({
      where: { id: decoded.userId },
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
    await prisma.$disconnect();
  }
}
