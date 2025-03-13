import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/certificate/firebase-admin';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('❌ SECRET_KEY is not defined in the environment variables.');
}

export async function GET(req: NextRequest) {
  console.log('🔎 Starting certificate verification...');

  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    if (!token) {
      console.error('❌ Missing token in request');
      return NextResponse.json({ error: 'Certificate token is required.' }, { status: 400 });
    }

    // Decode the JWT token
    let decoded;
    try {
      decoded = jwt.verify(token, SECRET_KEY);
      console.log('✅ Decoded token:', decoded);
    } catch (error) {
      console.error('❌ Invalid token:', error);
      return NextResponse.json({ error: 'Invalid token.' }, { status: 401 });
    }

    const { userId, certificateType } = decoded as { userId: string; certificateType: string };

    console.log(`🔎 Searching for certificate - userId: ${userId}, certificateType: ${certificateType}`);

    const snapshot = await db
      .collection('certificates')
      .where('token', '==', token)
      .get();

    if (snapshot.empty) {
      console.error('❌ Certificate not found');
      return NextResponse.json({ error: 'Certificate not found.' }, { status: 404 });
    }

    const certificate = snapshot.docs[0].data();
    console.log('✅ Certificate found:', certificate);

    return NextResponse.json({
      message: 'Certificate is valid',
      recipient: certificate.name || 'Unknown',
      course: certificate.certificateType || 'Unknown',
      issuedDate: certificate.issuedAt || null,
    });
  } catch (error) {
    console.error('🔥 Internal Server Error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
