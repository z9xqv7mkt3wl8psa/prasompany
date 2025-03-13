import { NextRequest, NextResponse } from 'next/server';
import admin from '@/certificate/firebase-admin';

export async function GET() {
  try {
    const snapshot = await admin.firestore().collection('certificates').get();
    const data = snapshot.docs.map((doc) => doc.data());

    console.log('Firestore Data:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Firestore Error:', error);
    return NextResponse.json({ message: 'Firestore error', error: (error as Error).message }, { status: 500 });
  }
}
