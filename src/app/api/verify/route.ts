import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import jwt, { JwtPayload } from 'jsonwebtoken';
import serviceAccount from '../../../certificate/firebase-service-key.json'; // Static import

// Initialize Firebase Admin (Only once)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
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
    // Verifying the token
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;  // Type assertion to JwtPayload

    // Ensure 'userId' is in the decoded token
    if (!decoded.userId) {
      return NextResponse.json({ message: 'Invalid token: userId missing' }, { status: 401 });
    }

    // Fetch the certificate from Firebase Firestore using userId
    const doc = await db.collection('certificates').doc(decoded.userId).get();

    if (!doc.exists) {
      return NextResponse.json({ message: 'Certificate not found' }, { status: 404 });
    }

    const certificate = doc.data();

    if (certificate?.token !== token) {
      return NextResponse.json({ message: 'Invalid certificate' }, { status: 401 });
    }

    // Return the certificate details if everything is valid
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
