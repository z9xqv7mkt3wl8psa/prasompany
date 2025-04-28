'use client';

import dynamic from 'next/dynamic';

const FeedbackClient = dynamic(() => import('./FeedbackClient'), {
    ssr: false,
});
 
export default function FeedbackClientWrapper() {
    return <FeedbackClient />;
}
