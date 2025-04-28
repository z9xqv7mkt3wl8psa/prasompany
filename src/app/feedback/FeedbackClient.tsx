'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
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

export default function InternDashboard() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState<FeedbackData | null>(null);
    const [certificate, setCertificate] = useState<CertificateData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (token) {
            if (getApps().length === 0) {
                initializeApp({
                    apiKey: "AIzaSyA_XvAPygXMMMddn7NsqsogzDpM-FXDgeI",
                    authDomain: "cert-final-c1409.firebaseapp.com",
                    projectId: "cert-final-c1409",
                    storageBucket: "cert-final-c1409.firebasestorage.app",
                    messagingSenderId: "948127703754",
                    appId: "1:948127703754:web:03289910ff99fb33ee4a33",
                    measurementId: "G-PBNBSHK135"
                });
            }
            const db = getFirestore();

            const fetchData = async () => {
                try {
                    // Try to fetch feedback first
                    const feedbackQuery = query(
                        collection(db, 'feedback'),
                        where('token', '==', token)
                    );
                    const feedbackSnapshot = await getDocs(feedbackQuery);

                    if (!feedbackSnapshot.empty) {
                        const docData = feedbackSnapshot.docs[0].data() as FeedbackData;
                        setFeedback(docData);
                        setLoading(false);
                        return;
                    }

                    // If no feedback, try to fetch certificate
                    const certQuery = query(
                        collection(db, 'certificates'),
                        where('token', '==', token)
                    );
                    const certSnapshot = await getDocs(certQuery);

                    if (!certSnapshot.empty) {
                        const docSnapshot = certSnapshot.docs[0];
                        const docData = docSnapshot.data();
                        
                        // Fetch assigned project
                        const certDoc = await getDoc(doc(db, 'certificates', docSnapshot.id));
                        const assignedProject = certDoc.data()?.assignedProject || 'Not specified';

                        setCertificate({
                            ...docData as CertificateData,
                            assignedProject
                        });
                    } else {
                        setError('No data found for this token');
                    }
                } catch (err) {
                    console.error('Fetch error:', err);
                    setError('Error loading data');
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        } else {
            setError('No token provided');
            setLoading(false);
        }
    }, [token]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm py-5 mb-8">
                <div className="container mx-auto px-4 flex items-center justify-center">
                    <Image 
                        src={loggo}
                        alt="Company Logo"
                        width={80}
                        height={80}
                        className="rounded-full mr-4"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Prasunet Company</h1>
                        <p className="text-blue-500 italic">Tech Bharat, Global Impact</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 pb-12">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
                        <p className="mt-4 text-gray-600">Loading your data...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
                        <h2 className="text-red-700 font-bold">Error</h2>
                        <p className="text-red-600">{error}</p>
                    </div>
                ) : feedback ? (
                    <DashboardSection title="Your Feedback">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoCard label="Name" value={feedback.name} />
                            <InfoCard label="Intern ID" value={feedback.internId} />
                            <InfoCard label="Strengths" value={feedback.strengths} fullWidth />
                            <InfoCard label="Areas for Improvement" value={feedback.improvementAreas} fullWidth />
                            <InfoCard label="Professional Development" value={feedback.professionalDevelopment} fullWidth />
                        </div>
                    </DashboardSection>
                ) : certificate ? (
                    <DashboardSection title="Certificate Verification">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoCard label="Name" value={certificate.certificateType.name} />
                            <InfoCard label="Internship Domain" value={certificate.certificateType.internshipDomain} />
                            <InfoCard label="Intern ID" value={certificate.internId} />
                            <InfoCard label="Issued Date" value={new Date(certificate.issuedAt).toLocaleDateString()} />
                            <InfoCard label="Valid Until" value={new Date(certificate.expiryDate).toLocaleDateString()} />
                            <InfoCard label="Assigned Project" value={certificate.assignedProject} />
                        </div>
                    </DashboardSection>
                ) : (
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                        <h2 className="text-yellow-700 font-bold">No Data Found</h2>
                        <p className="text-yellow-600">No feedback or certificate found with this token.</p>
                    </div>
                )}

                {/* Social Links */}
                <div className="mt-12 bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Connect With Us</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <SocialLink 
                            href="https://discord.gg/WFfj5XCA" 
                            color="bg-indigo-600" 
                            label="Discord" 
                        />
                        <SocialLink 
                            href="https://www.linkedin.com/company/prasunet-company/" 
                            color="bg-blue-700" 
                            label="LinkedIn" 
                        />
                        <SocialLink 
                            href="https://t.me/+gguS8Aty2K5lOTM1" 
                            color="bg-blue-500" 
                            label="Telegram" 
                        />
                        <SocialLink 
                            href="https://whatsapp.com/channel/0029VbA5wvY4NVin6VvF3U2Q" 
                            color="bg-green-500" 
                            label="WhatsApp" 
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p>© {new Date().getFullYear()} Prasunet Company. All rights reserved.</p>
                    <p className="text-sm opacity-80 mt-1">Tech Bharat, Global Impact</p>
                </div>
            </footer>
        </div>
    );
}

// Reusable components
function DashboardSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
            <div className="bg-green-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}

function InfoCard({ label, value, fullWidth = false }: { 
    label: string; 
    value: string; 
    fullWidth?: boolean 
}) {
    return (
        <div className={fullWidth ? 'md:col-span-2' : ''}>
            <h3 className="font-semibold text-gray-700 mb-1">{label}</h3>
            <p className="text-gray-800 whitespace-pre-line bg-gray-50 p-3 rounded">{value}</p>
        </div>
    );
}

function SocialLink({ href, color, label }: { 
    href: string; 
    color: string; 
    label: string 
}) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${color} text-white py-3 px-4 rounded-lg text-center font-medium hover:opacity-90 transition-opacity`}
        >
            {label}
        </a>
    );
}
