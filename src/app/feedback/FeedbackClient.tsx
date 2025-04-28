'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, QuerySnapshot, doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import loggo from './loggo.jpg';

interface FeedbackData {
    name: string;
    internId: string;
    strengths: string;
    improvementAreas: string;
    professionalDevelopment: string;
    token: string;
}

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
    feedback?: FeedbackData;
    certificate?: CertificateData;
    mode?: 'feedback' | 'certificate';
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

export default function CombinedVerification() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [result, setResult] = useState<Result | null>(null);

    useEffect(() => {
        if (token) {
            if (getApps().length === 0) {
                initializeApp(firebaseConfig);
            }
            const db = getFirestore();

            const fetchData = async () => {
                try {
                    // First try to fetch feedback
                    const feedbackCollection = collection(db, 'feedback');
                    const feedbackQuery = query(feedbackCollection, where('token', '==', token));
                    const feedbackSnapshot = await getDocs(feedbackQuery);

                    if (!feedbackSnapshot.empty) {
                        const docSnapshot = feedbackSnapshot.docs[0];
                        const docData = docSnapshot.data() as FeedbackData;
                        setResult({ 
                            status: 'Found', 
                            feedback: docData,
                            mode: 'feedback'
                        });
                        return;
                    }

                    // If no feedback found, try to verify certificate
                    const certificatesCollection = collection(db, 'certificates');
                    const certQuery = query(certificatesCollection, where('token', '==', token));
                    const certSnapshot = await getDocs(certQuery);

                    if (!certSnapshot.empty) {
                        const docSnapshot = certSnapshot.docs[0];
                        const docData = docSnapshot.data();
                        
                        // Fetch assigned project
                        const certificateDocRef = doc(db, 'certificates', docSnapshot.id);
                        const certificateDoc = await getDoc(certificateDocRef);
                        const assignedProject = certificateDoc.data()?.assignedProject || 'Assigned Project Not Found';

                        const certificateData: CertificateData = {
                            ...docData as CertificateData,
                            assignedProject: assignedProject,
                        };

                        setResult({ 
                            status: 'Verified', 
                            certificate: certificateData,
                            mode: 'certificate'
                        });
                        return;
                    }

                    // If neither found
                    setResult({ status: 'Not Found' });

                } catch (error) {
                    console.error('Data fetch error:', error);
                    setResult({ error: 'Error fetching data' });
                }
            };

            fetchData();
        }
    }, [token]);

    return (
        <div style={{ 
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
            minHeight: '100vh',
            backgroundColor: '#f9f9f9'
        }}>
            <header style={{ 
                padding: '20px', 
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '30px',
                textAlign: 'center'
            }}>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '15px'
                }}>
                    <Image 
                        src={loggo}
                        alt="Prasunet Logo" 
                        width={80}
                        height={80}
                        style={{ 
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '15px'
                        }} 
                    />
                    <div>
                        <h1 style={{ 
                            color: '#2c3e50', 
                            margin: 0,
                            fontSize: '28px',
                            fontWeight: '600'
                        }}>
                            Prasunet Company
                        </h1>
                        <p style={{ 
                            color: '#3498db', 
                            margin: '5px 0 0',
                            fontSize: '16px',
                            fontStyle: 'italic',
                            fontWeight: '500'
                        }}>
                            Tech Bharat, Global Impact
                        </p>
                    </div>
                </div>
            </header>

            <div style={{ 
                maxWidth: '800px', 
                margin: '0 auto', 
                padding: '0 20px 40px'
            }}>
                {result === null && (
                    <div style={{
                        padding: '30px',
                        textAlign: 'center',
                        color: '#7f8c8d'
                    }}>
                        <div className="spinner" style={{
                            border: '4px solid rgba(0, 0, 0, 0.1)',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            borderLeftColor: '#3498db',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto 20px'
                        }}></div>
                        <p>Loading data...</p>
                    </div>
                )}

                {result?.error && (
                    <div style={{ 
                        padding: '25px', 
                        border: '1px solid #e74c3c', 
                        backgroundColor: '#fdedec',
                        borderRadius: '8px',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{ color: '#e74c3c', marginTop: 0 }}>Error</h2>
                        <p style={{ color: '#e74c3c' }}>{result.error}</p>
                    </div>
                )}

                {result?.status === 'Not Found' && (
                    <div style={{ 
                        padding: '25px', 
                        border: '1px solid #f39c12', 
                        backgroundColor: '#fef5e7',
                        borderRadius: '8px',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{ color: '#f39c12', marginTop: 0 }}>Not Found</h2>
                        <p style={{ color: '#f39c12' }}>No feedback or certificate found with this token.</p>
                    </div>
                )}

                {result?.mode === 'feedback' && result?.status === 'Found' && result.feedback && (
                    <div style={{ 
                        padding: '25px', 
                        border: '1px solid #2ecc71', 
                        backgroundColor: '#e8f8f5',
                        borderRadius: '8px',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{ color: '#27ae60', marginTop: 0 }}>Your Feedback</h2>
                        <div style={{ 
                            display: 'grid',
                            gridTemplateColumns: '150px 1fr',
                            gap: '15px',
                            marginTop: '20px'
                        }}>
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Name:</p>
                            <p>{result.feedback.name}</p>
                            
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Intern ID:</p>
                            <p>{result.feedback.internId}</p>
                            
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Strengths:</p>
                            <p style={{ whiteSpace: 'pre-line' }}>{result.feedback.strengths}</p>
                            
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Areas of Improvement:</p>
                            <p style={{ whiteSpace: 'pre-line' }}>{result.feedback.improvementAreas}</p>
                            
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Professional Development:</p>
                            <p style={{ whiteSpace: 'pre-line' }}>{result.feedback.professionalDevelopment}</p>
                        </div>
                    </div>
                )}

                {result?.mode === 'certificate' && result?.status === 'Verified' && result.certificate && (
                    <div style={{ 
                        padding: '25px', 
                        border: '1px solid #2ecc71', 
                        backgroundColor: '#e8f8f5',
                        borderRadius: '8px',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{ color: '#27ae60', marginTop: 0 }}>Certificate Verified</h2>
                        <div style={{ 
                            display: 'grid',
                            gridTemplateColumns: '150px 1fr',
                            gap: '15px',
                            marginTop: '20px'
                        }}>
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Name:</p>
                            <p>{result.certificate.certificateType.name}</p>
                            
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Internship Domain:</p>
                            <p>{result.certificate.certificateType.internshipDomain}</p>
                            
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Intern ID:</p>
                            <p>{result.certificate.internId}</p>
                            
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Issued At:</p>
                            <p>{new Date(result.certificate.issuedAt).toLocaleDateString()}</p>
                            
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Valid Until:</p>
                            <p>{new Date(result.certificate.expiryDate).toLocaleDateString()}</p>
                            
                            <p style={{ fontWeight: '600', color: '#2c3e50' }}>Assigned Project:</p>
                            <p>{result.certificate.assignedProject}</p>
                        </div>
                    </div>
                )}

                <div style={{ 
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{ 
                        color: '#2c3e50',
                        marginTop: 0,
                        textAlign: 'center',
                        fontSize: '22px'
                    }}>
                        Get Connected With Us
                    </h3>
                    <p style={{ 
                        textAlign: 'center',
                        color: '#7f8c8d',
                        marginBottom: '25px'
                    }}>
                        Join our community and stay updated with the latest opportunities and news.
                    </p>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '15px',
                        textAlign: 'center'
                    }}>
                        <a href="https://discord.gg/WFfj5XCA" target="_blank" rel="noopener noreferrer" style={{ 
                            textDecoration: 'none',
                            padding: '12px',
                            backgroundColor: '#7289da',
                            color: 'white',
                            borderRadius: '6px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease'
                        }}>
                            Discord
                        </a>
                        <a href="https://www.linkedin.com/company/prasunet-company/" target="_blank" rel="noopener noreferrer" style={{ 
                            textDecoration: 'none',
                            padding: '12px',
                            backgroundColor: '#0077b5',
                            color: 'white',
                            borderRadius: '6px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease'
                        }}>
                            LinkedIn
                        </a>
                        <a href="https://t.me/+gguS8Aty2K5lOTM1" target="_blank" rel="noopener noreferrer" style={{ 
                            textDecoration: 'none',
                            padding: '12px',
                            backgroundColor: '#0088cc',
                            color: 'white',
                            borderRadius: '6px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease'
                        }}>
                            Telegram
                        </a>
                        <a href="https://whatsapp.com/channel/0029VbA5wvY4NVin6VvF3U2Q" target="_blank" rel="noopener noreferrer" style={{ 
                            textDecoration: 'none',
                            padding: '12px',
                            backgroundColor: '#25D366',
                            color: 'white',
                            borderRadius: '6px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease'
                        }}>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <footer style={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#2c3e50',
                color: '#ecf0f1',
                marginTop: '40px'
            }}>
                <p>© {new Date().getFullYear()} Prasunet Company. All rights reserved.</p>
                <p style={{ fontSize: '14px', opacity: 0.8 }}>Tech Bharat, Global Impact</p>
            </footer>
        </div>
    );
}
