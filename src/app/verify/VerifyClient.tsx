'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc, DocumentSnapshot } from 'firebase/firestore';

interface CertificateData {
    name: string;
    issueDate: string;
    certificateId: string;
    // Add other fields and their types
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
                    const certificateDoc = doc(db, 'certificates', token);
                    const certificateSnapshot: DocumentSnapshot = await getDoc(certificateDoc);

                    if (certificateSnapshot.exists()) {
                        setResult({ status: 'Verified', certificate: certificateSnapshot.data() as CertificateData });
                    } else {
                        setResult({ status: 'Not Verified' });
                    }
                } catch {
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
