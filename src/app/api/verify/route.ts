import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import jwt from 'jsonwebtoken';
import * as serviceAccount from '../../../certificate/firebase-service-key.json'; // Importing as a module

// Initialize Firebase Admin (Only once)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount) // Explicit cast to ServiceAccount type
  });
}

const db = admin.firestore();

const SECRET_KEY = process.env.SECRET_KEY || 'your-very-secure-key';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ message: 'Token is required' }, { status: 400 });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const doc = await db.collection('certificates').doc(decoded.userId).get();

    if (!doc.exists) {
      return NextResponse.json({ message: 'Certificate not found' }, { status: 404 });
    }

    const certificate = doc.data();

    if (certificate.token !== token) {
      return NextResponse.json({ message: 'Invalid certificate' }, { status: 401 });
    }

    return NextResponse.json({
      status: 'Verified ✅',
      userId: decoded.userId,
      certificateType: certificate.certificateType,
      issuedAt: certificate.issuedAt,
      expiryDate: certificate.expiryDate
    });
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
  }
}
