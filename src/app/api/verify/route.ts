import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt, { JwtPayload } from 'jsonwebtoken';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const SECRET_KEY = process.env.SECRET_KEY as string;

if (!SECRET_KEY) {
  throw new Error('SECRET_KEY is not defined in the environment variables.');
}

interface DecodedToken extends JwtPayload {
  userId: string;
  certificateType: string;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    console.log('Received token:', token);

    if (!token) {
      console.warn('No token provided');
      return NextResponse.json({ error: 'Certificate token is required' }, { status: 400 });
    }

    let decoded: DecodedToken;
    try {
      decoded = jwt.verify(token, SECRET_KEY) as DecodedToken;
      console.log('Decoded token:', decoded);
    } catch (err) {
      console.error('JWT verification failed:', err);
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    console.log('Searching for certificate in the database...');

    const certificate = await prisma.certificate.findUnique({
      where: { token },
    });

    console.log('Certificate result from DB:', certificate);

    if (!certificate) {
      console.warn('Certificate not found for token:', token);
      return NextResponse.json({ message: 'Certificate not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: 'Certificate is valid',
      recipient: certificate.recipient || 'Unknown',
      course: certificate.certificateType || 'Unknown',
      issuedDate: certificate.issuedAt?.toISOString() || null,
    });
  } catch (error) {
    console.error('Error verifying certificate:', error);

    if ((error as { code?: string }).code === 'P2025') {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
