'use client'; // Important: Use client-side rendering

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    
  "type": "service_account",
  "project_id": "cert-final-c1409",
  "private_key_id": "61f5b0322272e73651dba7bad552169f325c3f1d",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDTA5BLmYCJyMmS\nXbuEaTqsxnfYvEN2wObe9IP3XCtgtR/GeNVzYvgjNzZJ0QHlc+TbiddWCCrFfYHW\n3XT/7A7foZBIdQigrteONfskKDqEnXXzfRy46BvT4/dsLE54b3kVzBq2cLa1fcp3\nvny8x5us7aNl2Ez+vTXBeefx9HO/+Tqf4Rocg7JO6jortwdG8UKLOXtlYHY5lf4J\nTjDeH/MoLUfEFvNq8q+mFpRBuaIJBOQCa8lE+xwMrXEU2bVUDWhZ+xmSt/U6Etaw\n5kGt5+AewExBA9auj06mZQMTppIZxPPYLuYskIgFGTNmKm1DTLu6ER8PuhbeJ4tS\nKGEPLokZAgMBAAECggEABGWHHKQiovxNguC0FwKwR8hM1/W4PCGxzcRveXhwqO+t\nLU/4NpLB084DMg+KSBMdmhtpoq/B4GKIkYcEuI5dEvjFTlUt7FcoQ5zJUkwKSBgV\nzJB3SD0B02zlC1py+hxse/FIPzPjAq4PyWXtKGvKSRScenNCy2360ECvfgGXZdEM\nV8Ox0BptyaadpIfve9pcO8BNwT3DJADgLsLeQhaj/BKP3VDaDhOM+YklkKTqFbMY\nvR76/lhiqCmrQu2D/TgV7wMcsI5vv9K+9yQJNZp1SoHmXvnF/AF97P2ft9qpPNDU\nPbBdFXBhIzZUMkm37DseX7PoVnDDdbdKdQvPQCEMhwKBgQD+LCIGQNi+T1GPOwE2\nbAikWNr90jR1+p/Q9/3BfCAC90Zaxq+0YXOOf/0VFezWxJ0SDYQb7dCxsG64bjjG\nXJHyMhSc6Td4/B0wl+AeperchYsNv+5LAQe9nxPQwyvIvuAeGKxrPKRLcW9hLcRU\nWgTV3pp8PGeHo9bSUoThMidlCwKBgQDUh/ymOMxwL+PKgK2QZxO4tDCmt7oJeeuM\nd8LK4TjS55b6gtixsVzPxH63LBXF/xlHXsnYxizCLzB8u9r5I+Z7ewmx38C7j4NT\n0QhSJ9P58ylEttzvXQM4cutzd39cz2X+/VuHEQT4IWcAsVZnSULo+/AdFsuYOwSr\nD+YvintY6wKBgCn0mwExPxXa/fmIoeCb4KlQSYXQZvx6jFrwNKD1nksfCiv91A8Q\nbwS8t8f9QIULG2pZdM8vaF2MZBpph1GnAihaf/COxqtf4mmdCE/Gz4frO1LftbQH\nzYFNevXg4Z9XcqNFK2DgN7aEWQBPj7Lk0RuEjTeouOY480LwgCK0JrCVAoGASAMj\nyjaonsK7Tlw3cxxaBFWZvoO2V4umElxp9lBF7sBl2dAIGH1eU0/jF7GqVwJO0G3/\nuqG7fLh8l2cXlR9i8ygHauvD5EmGWBoV1bCFFMYdj5jeV4SOmMvnl6I/13S2vKWg\nI63SnzjCK+vquOiL8WGcRF768UPeGxAyEJ29ma0CgYA0HUuTzatE+WOBnZ9UYBXK\navBDtLdfAmS8+ItWmNThzMvplx4AXw0ZHj55yZFjHTQ/ZBZK68U+gl7TSpfwvToQ\nO3jIN3CFEe1G7r68wpbsngr1ingSIcmsPN0/XceZMVWoNxhJbhNeTHx6Nsb+GeZ2\nnYpFFSMNzO5TjRhLI0wvEA==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@cert-final-c1409.iam.gserviceaccount.com",
  "client_id": "111910212877360688074",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40cert-final-c1409.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"

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
