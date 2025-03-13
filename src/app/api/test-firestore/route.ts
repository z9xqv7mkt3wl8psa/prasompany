import { NextResponse } from 'next/server';
import { getFirestore } from 'firebase-admin/firestore';
import jwt from 'jsonwebtoken';

const db = getFirestore();
const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('❌ SECRET_KEY is not defined in the environment variables.');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log('Incoming POST request:', body);

    const { tokens } = body;

    if (!tokens || !Array.isArray(tokens)) {
      return NextResponse.json({ message: 'Invalid or missing token data' }, { status: 400 });
    }

    const generatedTokens = [];

    for (const tokenData of tokens) {
      console.log('Processing tokenData:', tokenData);

      const { userId, certificateType } = tokenData;

      if (!userId || !certificateType) {
        return NextResponse.json({ message: 'Missing userId or certificateType' }, { status: 400 });
      }

      const token = jwt.sign(
        { userId, certificateType },
        SECRET_KEY,
        { expiresIn: '1y' }
      );

      await db.collection('certificates').doc(userId).set({
        token,
        certificateType,
        issuedAt: new Date().toISOString(),
        expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString()
      });

      generatedTokens.push({ userId, token });
    }

    return NextResponse.json({ tokens: generatedTokens });
  } catch (error) {
    console.error('🔥 Error generating tokens:', error);
    return NextResponse.json({ message: 'Failed to generate tokens' }, { status: 500 });
  }
}
