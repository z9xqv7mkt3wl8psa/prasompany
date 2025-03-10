const express = require('express');
const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const serviceAccount = require('./firebase-service-key.json');

// Initialize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const SECRET_KEY = process.env.SECRET_KEY || 'your-very-secure-key';

// ✅ Verify Certificate Using Token from Firestore
app.get('/verify', async (req, res) => {
    const { token } = req.query;

    if (!token) {
        return res.status(400).json({ message: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log('Decoded token:', decoded); // ✅ Debug log

        const doc = await db.collection('certificates').doc(decoded.userId).get();

        if (!doc.exists) {
            return res.status(404).json({ message: 'Certificate not found' });
        }

        const certificate = doc.data();

        if (certificate.token !== token) {
            return res.status(401).json({ message: 'Invalid certificate' });
        }

        res.status(200).json({
            status: 'Verified ✅',
            userId: decoded.userId,
            certificateType: certificate.certificateType,
            issuedAt: certificate.issuedAt,
            expiryDate: certificate.expiryDate
        });
    } catch (error) {
        console.error('Verification error:', error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
});

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
