import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/certificate/firebase-admin';

export async function GET() {
  try {
    console.log('🔎 Testing Firestore connection...');
    const snapshot = await db.collection('certificates').get();

    const certificates = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log('✅ Firestore data:', certificates);

    return NextResponse.json(certificates);
  } catch (error) {
    console.error('🔥 Firestore test failed:', error);
    return NextResponse.json({ error: 'Failed to connect to Firestore.' }, { status: 500 });
  }
}
