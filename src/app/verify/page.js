'use client'; // Important: Use client-side rendering

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_XvAPygXMMMddn7NsqsogzDpM-FXDgeI",
  authDomain: "cert-final-c1409.firebaseapp.com",
  projectId: "cert-final-c1409",
  storageBucket: "cert-final-c1409.firebasestorage.app",
  messagingSenderId: "948127703754",
  appId: "1:948127703754:web:03289910ff99fb33ee4a33",
  measurementId: "G-PBNBSHK135"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Verify() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (token) {
            const verifyToken = async () => {
                try {
                    const certificateDoc = doc(db, 'certificates', token);
                    const certificateSnapshot = await getDoc(certificateDoc);

                    if (certificateSnapshot.exists()) {
                        setResult({ status: 'Verified' });
                    } else {
                        setResult({ status: 'Not Verified' });
                    }
                } catch { // Corrected catch block
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
