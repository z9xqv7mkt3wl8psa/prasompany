'use client';

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyCertificate() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [result, setResult] = useState("Verifying...");

  useEffect(() => {
    if (!token) {
      setResult("❌ No token provided");
      return;
    }

    const verifyCertificate = async () => {
      try {
        const res = await fetch(`/api/verify?token=${token}`);
        const data = await res.json();

        if (res.ok) {
          setResult(
            `✅ Verified! 
            UserId: ${data.userId} 
            Internship Domain: ${data.certificateType} 
            Issued At: ${new Date(data.issuedAt).toLocaleDateString()} 
            Expiry Date: ${new Date(data.expiryDate).toLocaleDateString()}`
          );
        } else {
          setResult(`❌ ${data.message}`);
        }
      } catch {
        setResult('❌ Error verifying certificate');
      }
    };

    verifyCertificate();
  }, [token]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">Certificate Verification</h1>
        <p className="mt-3 text-lg">{result}</p>
      </div>
    </Suspense>
  );
}
