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

export const db = admin.firestore(); // Export Firestore instance
