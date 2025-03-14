'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';

interface CertificateData {
    certificateType: {
        internshipDomain: string;
        name: string;
    };
    issuedAt: string;
    expiryDate: string;
    token: string;
    internId: string;
    // Removed teamId, teamName, userType
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
    storageBucket: "cert-final-c1409.firebasestorage.app",
    messagingSenderId: "948127703754",
    appId: "1:948127703754:web:03289910ff99fb33ee4a33",
    measurementId: "G-PBNBSHK135"
};

export default function VerifyClient() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [result, setResult] = useState<Result | null>(null);

    useEffect(() => {
        if (token) {
            if (getApps().length === 0) {
                initializeApp(firebaseConfig);
            }
            const db = getFirestore();

            const verifyToken = async () => {
                try {
                    const certificatesCollection = collection(db, 'certificates');
                    const q = query(certificatesCollection, where('token', '==', token));
                    const querySnapshot: QuerySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        const doc = querySnapshot.docs[0];
                        setResult({ status: 'Verified', certificate: doc.data() as CertificateData });
                    } else {
                        setResult({ status: 'Not Verified' });
                    }
                } catch (error) {
                    console.error('Verification error:', error);
                    setResult({ error: 'Error during verification' });
                }
            };
            verifyToken();
        }
    }, [token]);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
                <h1 style={{ margin: '0', color: '#333' }}>Prasunet Company</h1>
                <p style={{ margin: '5px 0', color: '#666', fontStyle: 'italic' }}>Tech Bharat, Global Impact.</p>
            </header>

            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
                {result === null && <div>Loading...</div>}

                {result?.error && (
                    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid red', backgroundColor: '#ffe6e6' }}>
                        <h1>Verification Result</h1>
                        <p style={{ color: 'red' }}>Error: {result.error}</p>
                    </div>
                )}

                {result?.status === 'Not Verified' && (
                    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid orange', backgroundColor: '#fff3e6' }}>
                        <h1>Verification Result</h1>
                        <p style={{ color: 'orange' }}>Certificate Not Verified</p>
                    </div>
                )}

                {result?.status === 'Verified' && result.certificate && (
                    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid green', backgroundColor: '#e6ffe6' }}>
                        <h1>Verification Result</h1>
                        <p style={{ color: 'green' }}>Certificate Verified</p>
                        <div style={{ textAlign: 'left', marginTop: '20px' }}>
                            <p><strong>Name:</strong> {result.certificate.certificateType.name}</p>
                            <p><strong>Internship Domain:</strong> {result.certificate.certificateType.internshipDomain}</p>
                            <p><strong>Intern ID:</strong> {result.certificate.internId}</p>
                            <p><strong>Issued At:</strong> {new Date(result.certificate.issuedAt).toLocaleDateString()}</p>
                            <p><strong>Valid Until:</strong> {new Date(result.certificate.expiryDate).toLocaleDateString()}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
