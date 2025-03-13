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
    expiryDate: string;
    issuedAt: string;
    token: string;
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

    if (result === null) {
        return <div>Loading...</div>; // Show a loading message while fetching
    }

    if (result.error) {
        return (
            <div style={{ textAlign: 'center', padding: '20px', border: '1px solid red', backgroundColor: '#ffe6e6' }}>
                <h1>Verification Result</h1>
                <p style={{ color: 'red' }}>Error: {result.error}</p>
            </div>
        );
    }

    if (result.status === 'Not Verified') {
        return (
            <div style={{ textAlign: 'center', padding: '20px', border: '1px solid orange', backgroundColor: '#fff3e6' }}>
                <h1>Verification Result</h1>
                <p style={{ color: 'orange' }}>Certificate Not Verified</p>
            </div>
        );
    }

    if (result.status === 'Verified' && result.certificate) {
        const certificate = result.certificate;
        return (
            <div style={{ textAlign: 'center', padding: '20px', border: '1px solid green', backgroundColor: '#e6ffe6', maxWidth: '600px', margin: '0 auto' }}>
                <h1>Verification Result</h1>
                <p style={{ color: 'green' }}>Certificate Verified</p>
                <div style={{ textAlign: 'left', marginTop: '20px' }}>
                    <p><strong>Name:</strong> {certificate.certificateType.name}</p>
                    <p><strong>Internship Domain:</strong> {certificate.certificateType.internshipDomain}</p>
                    <p><strong>Issued At:</strong> {new Date(certificate.issuedAt).toLocaleDateString()}</p>
                    <p><strong>Expiry Date:</strong> {new Date(certificate.expiryDate).toLocaleDateString()}</p>
                </div>
            </div>
        );
    }

    return null; // Handle any unexpected cases
}
