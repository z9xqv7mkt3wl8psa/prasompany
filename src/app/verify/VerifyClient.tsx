'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore'; // Import query, where, getDocs, QuerySnapshot

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

        console.log('Query Snapshot:', querySnapshot); // Log the query snapshot

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            console.log('Document Data:', doc.data()); // Log the document data
            setResult({ status: 'Verified', certificate: doc.data() as CertificateData });
        } else {
            console.log('Document not found for token:', token); // Log when no document is found
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
        <div>
            <h1>Verification Result</h1>
            {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
        </div>
    );
}
