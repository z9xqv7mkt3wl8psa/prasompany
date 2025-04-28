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

                    if (!querySnapshot.empty) {
                        const docSnapshot = querySnapshot.docs[0];
                        const docData = docSnapshot.data() as FeedbackData;
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
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <header style={{ padding: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
                <img src="/logo.jpg" alt="Prasunet Logo" style={{ width: '150px', marginBottom: '10px' }} />
                <h1 style={{ color: '#333' }}>Prasunet Company</h1>
                <p style={{ color: '#666', fontStyle: 'italic' }}>Tech Bharat, Global Impact</p>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                {result === null && <div>Loading...</div>}

                {result?.error && (
                    <div style={{ padding: '20px', border: '1px solid red', backgroundColor: '#ffe6e6' }}>
                        <h2>Feedback Result</h2>
                        <p style={{ color: 'red' }}>Error: {result.error}</p>
                    </div>
                )}

                {result?.status === 'Not Found' && (
                    <div style={{ padding: '20px', border: '1px solid orange', backgroundColor: '#fff3e6' }}>
                        <h2>Feedback Result</h2>
                        <p style={{ color: 'orange' }}>Feedback Not Found</p>
                    </div>
                )}

                {result?.status === 'Found' && result.feedback && (
                    <div style={{ padding: '20px', border: '1px solid green', backgroundColor: '#e6ffe6' }}>
                        <h2>Feedback Result</h2>
                        <p><strong>Name:</strong> {result.feedback.name}</p>
                        <p><strong>Intern ID:</strong> {result.feedback.internId}</p>
                        <p><strong>Strengths:</strong> {result.feedback.strengths}</p>
                        <p><strong>Areas of Improvement:</strong> {result.feedback.improvementAreas}</p>
                        <p><strong>Professional Development:</strong> {result.feedback.professionalDevelopment}</p>
                    </div>
                )}

                <div style={{ marginTop: '30px' }}>
                    <h3>Get Connected with Us</h3>
                    <p>If you have any queries or want to connect with us, feel free to reach out through the following channels:</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>
                            <a href="https://discord.gg/WFfj5XCA" target="_blank" style={{ textDecoration: 'none', color: '#0077b5' }}>
                                Discord
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/prasunet-company/" target="_blank" style={{ textDecoration: 'none', color: '#0077b5' }}>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/+gguS8Aty2K5lOTM1" target="_blank" style={{ textDecoration: 'none', color: '#0077b5' }}>
                                Telegram
                            </a>
                        </li>
                        <li>
                            <a href="https://whatsapp.com/channel/0029VbA5wvY4NVin6VvF3U2Q" target="_blank" style={{ textDecoration: 'none', color: '#0077b5' }}>
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
