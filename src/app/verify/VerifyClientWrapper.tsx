'use client'; // Mark as a client component

import dynamic from 'next/dynamic';

const VerifyClient = dynamic(() => import('./VerifyClient'), {
    ssr: false,
});

export default function VerifyClientWrapper() {
    return <VerifyClient />;
}
