'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

interface CertificateData {
  certificateType: {
    internshipDomain: string;
    name: string;
  };
  issuedAt: string;
  expiryDate: string;
  token: string;
  internId: string;
  assignedProject: string;
}

interface Result {
  status?: string;
  error?: string;
  certificate?: CertificateData;
}

const firebaseConfig = {
  apiKey: "AIzaSyA_XvAPygXMMMddn7NsqsogzDpM-FXDgeI",
  authDomain: "cert-final-c1409.firebaseapp.com",
  projectId: "cert-final-c1409",
  storageBucket: "cert-final-c1409.appspot.com",
  messagingSenderId: "948127703754",
  appId: "1:948127703754:web:03289910ff99fb33ee4a33",
  measurementId: "G-PBNBSHK135"
};

export default function VerifyClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    if (!token) {
      setResult({ error: 'No token provided' });
      return;
    }

    if (getApps().length === 0) {
      initializeApp(firebaseConfig);
    }
    const db = getFirestore();

    const verifyToken = async () => {
      try {
        const certificatesCollection = collection(db, 'certificates_verify');
        const q = query(certificatesCollection, where('token', '==', token));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data() as CertificateData;

          // assignedProject fallback if missing
          const assignedProject = docData.assignedProject || 'Not Assigned';

          setResult({
            status: 'Verified',
            certificate: { ...docData, assignedProject }
          });
        } else {
          setResult({ status: 'Not Verified' });
        }
      } catch (error) {
        console.error('Verification error:', error);
        setResult({ error: 'Error during verification' });
      }
    };

    verifyToken();
  }, [token]);

  if (!token) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        No token provided in URL.
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px'
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Verification Result</h1>

      {result === null && <p style={{ textAlign: 'center' }}>Loading...</p>}

      {result?.error && (
        <p style={{ color: 'red', textAlign: 'center' }}>Error: {result.error}</p>
      )}

      {result?.status === 'Not Verified' && (
        <p style={{ color: 'orange', textAlign: 'center' }}>
          Certificate Not Verified
        </p>
      )}

      {result?.status === 'Verified' && result.certificate && (
        <div
          style={{
            border: '1px solid green',
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: '#e6ffe6'
          }}
        >
          <p>
            <strong>Name:</strong> {result.certificate.certificateType.name}
          </p>
          <p>
            <strong>Internship Domain:</strong>{' '}
            {result.certificate.certificateType.internshipDomain}
          </p>
          <p>
            <strong>Intern ID:</strong> {result.certificate.internId}
          </p>
          <p>
            <strong>Issued At:</strong>{' '}
            {new Date(result.certificate.issuedAt).toLocaleDateString()}
          </p>
          <p>
            <strong>Valid Until:</strong>{' '}
            {new Date(result.certificate.expiryDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Assigned Project:</strong> {result.certificate.assignedProject}
          </p>
        </div>
      )}
    </div>
  );
}
