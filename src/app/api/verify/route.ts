import { NextResponse } from 'next/server';
import { getFirestore } from 'firebase-admin/firestore';
import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

if (!admin.apps.length) {
  try {
    const serviceAccountPath = path.resolve('src/certificate/firebase-service-key.json');
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'),
      }),
    });
    console.log('✅ Firebase initialized successfully.');
  } catch (error) {
    console.error('🔥 Error initializing Firebase:', error);
    throw new Error('Failed to load Firebase service account key.');
  }
}

const db = getFirestore();
const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('❌ SECRET_KEY is not defined in the environment variables.');
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json({ error: 'Certificate token is required.' }, { status: 400 });
    }

    // ✅ Type assertion to fix TypeScript error
    jwt.verify(token, SECRET_KEY as string);

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
    console.error('🔥 Internal Server Error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
