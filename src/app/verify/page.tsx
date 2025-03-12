'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface Certificate {
    recipient: string;
    course: string;
    issuedDate: string;
}

export default function VerifyPage() {
    return (
        <Suspense fallback={<p className="text-center">Loading...</p>}>
            <CertificateVerification />
        </Suspense>
    );
}

function CertificateVerification() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [certificate, setCertificate] = useState<Certificate | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!token) {
            setError('Invalid access. Certificate token is required.');
            setLoading(false);
            return;
        }

        async function fetchCertificate() {
            try {
                console.log(`Fetching certificate with token: ${token}`);

                // Ensure the URL is consistent with the API route
                const res = await fetch(`/verify?token=${token}`); 

                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.error || 'Failed to fetch certificate details.');
                }

                const data = await res.json();

                setCertificate(data);
            } catch (error) {
                console.error('Error fetching certificate:', error);
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchCertificate();
    }, [token]);

    if (loading) {
        return <p className="text-gray-500 text-center">Verifying certificate...</p>;
    }

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>;
    }

    if (!certificate) {
        return null;
    }

    return (
        <div className="p-6 text-center border border-gray-300 rounded-md shadow-md max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-blue-700">Certificate Verification</h1>
            <p className="text-green-600 mt-2">✅ Certificate is valid</p>
            <div className="mt-4 space-y-2">
                <p>
                    <strong>Recipient:</strong> {certificate.recipient}
                </p>
                <p>
                    <strong>Course:</strong> {certificate.course}
                </p>
                <p>
                    <strong>Issued Date:</strong>{' '}
                    {new Date(certificate.issuedDate).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
