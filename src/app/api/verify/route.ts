import { NextResponse } from 'next/server';
import { getFirestore } from 'firebase-admin/firestore';
import jwt, { JwtPayload } from 'jsonwebtoken';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK if not already initialized
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

    console.log('Searching for certificate in Firestore...');

    const snapshot = await db.collection('certificates').where('token', '==', token).get();

    if (snapshot.empty) {
      console.warn('Certificate not found for token:', token);
      return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
    }

    const certificate = snapshot.docs[0].data();

    console.log('Certificate result from Firestore:', certificate);

    return NextResponse.json({
      message: 'Certificate is valid',
      recipient: certificate.name || 'Unknown',
      course: certificate.certificateType || 'Unknown',
      issuedDate: certificate.issuedAt || null,
    });
  } catch (error) {
    console.error('Error verifying certificate:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
