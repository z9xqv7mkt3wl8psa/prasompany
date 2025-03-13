import { NextResponse } from 'next/server';
import { getFirestore } from 'firebase-admin/firestore';
import jwt, { JwtPayload } from 'jsonwebtoken';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db = getFirestore();
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

    if (!token) {
      return NextResponse.json({ error: 'Certificate token is required.' }, { status: 400 });
    }

    // ✅ Just verify the token without assigning it
    jwt.verify(token, SECRET_KEY);

    // ✅ Firestore Query Improvement
    const snapshot = await db
      .collection('certificates')
      .where('token', '==', token)
      .get();

    if (snapshot.empty) {
      return NextResponse.json({ error: 'Certificate not found.' }, { status: 404 });
    }

    const certificate = snapshot.docs[0].data();

    return NextResponse.json({
      message: 'Certificate is valid',
      recipient: certificate.name || 'Unknown',
      course: certificate.certificateType || 'Unknown',
      issuedDate: certificate.issuedAt || null,
    });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
