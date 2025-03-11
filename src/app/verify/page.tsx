'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface Certificate {
    recipient: string;
    course: string;
    issuedDate: string;
}

function CertificateVerification() {
    const searchParams = useSearchParams();
    const certId = searchParams.get('certId');
    const [certificate, setCertificate] = useState<Certificate | null>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (!certId) {
            setError('Invalid access. Certificate ID is required.');
            return;
        }

        fetch(`/api/certificate/verify?certId=${certId}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setCertificate(data);
                }
            })
            .catch(() => setError('Failed to fetch certificate details.'));
    }, [certId]);

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>;
    }

    if (!certificate) {
        return <p className="text-gray-500 text-center">Verifying certificate...</p>;
    }

    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold">Certificate Verification</h1>
            <p className="text-green-600 mt-2">Certificate is valid</p>
            <p><strong>Recipient:</strong> {certificate.recipient}</p>
            <p><strong>Course:</strong> {certificate.course}</p>
            <p><strong>Issued Date:</strong> {new Date(certificate.issuedDate).toLocaleDateString()}</p>
        </div>
    );
}

// Wrap the component inside Suspense
export default function VerifyPage() {
    return (
        <Suspense fallback={<p className="text-center">Loading...</p>}>
            <CertificateVerification />
        </Suspense>
    );
}
