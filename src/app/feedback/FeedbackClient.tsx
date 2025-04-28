'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';

interface FeedbackData {
    name: string;
    internId: string;
    strengths: string;
    improvementAreas: string;
    professionalDevelopment: string;
    token: string;
}

interface Result {
    status?: string;
    error?: string;
    feedback?: FeedbackData;
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

export default function FeedbackClient() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [result, setResult] = useState<Result | null>(null);

    useEffect(() => {
        if (token) {
            if (getApps().length === 0) {
                initializeApp(firebaseConfig);
            }
            const db = getFirestore();

            const fetchFeedback = async () => {
                try {
                    const feedbackCollection = collection(db, 'feedback');
                    const q = query(feedbackCollection, where('token', '==', token));
                    const querySnapshot: QuerySnapshot = await getDocs(q);

                    console.log('Query Snapshot:', querySnapshot);

                    if (!querySnapshot.empty) {
                        const docSnapshot = querySnapshot.docs[0];
                        const docData = docSnapshot.data() as FeedbackData;
                        console.log('Feedback Data:', docData);
                        setResult({ status: 'Found', feedback: docData });
                    } else {
                        setResult({ status: 'Not Found' });
                    }
                } catch (error) {
                    console.error('Feedback fetch error:', error);
                    setResult({ error: 'Error fetching feedback' });
                }
            };
            fetchFeedback();
        }
    }, [token]);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
                <h1 style={{ margin: '0', color: '#333' }}>Prasunet Company</h1>
                <p style={{ margin: '5px 0', color: '#666', fontStyle: 'italic' }}>Feedback Portal</p>
            </header>

            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
                {result === null && <div>Loading...</div>}

                {result?.error && (
                    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid red', backgroundColor: '#ffe6e6' }}>
                        <h1>Feedback Result</h1>
                        <p style={{ color: 'red' }}>Error: {result.error}</p>
                    </div>
                )}

                {result?.status === 'Not Found' && (
                    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid orange', backgroundColor: '#fff3e6' }}>
                        <h1>Feedback Result</h1>
                        <p style={{ color: 'orange' }}>Feedback Not Found</p>
                    </div>
                )}

                {result?.status === 'Found' && result.feedback && (
                    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid green', backgroundColor: '#e6ffe6' }}>
                        <h1>Feedback Result</h1>
                        <div style={{ textAlign: 'left', marginTop: '20px' }}>
                            <p><strong>Name:</strong> {result.feedback.name}</p>
                            <p><strong>Intern ID:</strong> {result.feedback.internId}</p>
                            <p><strong>Strengths:</strong> {result.feedback.strengths}</p>
                            <p><strong>Areas of Improvement:</strong> {result.feedback.improvementAreas}</p>
                            <p><strong>Professional Development:</strong> {result.feedback.professionalDevelopment}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
