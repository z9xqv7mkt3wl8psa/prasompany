import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyCertificate() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code"); // Get code from URL
  const [result, setResult] = useState("Verifying...");

  useEffect(() => {
    if (!code) {
      setResult("Invalid request. No certificate code found.");
      return;
    }

    // Simulate API call to check the certificate
    fetch(`/api/verify?code=${code}`)
      .then(res => res.json())
      .then(data => {
        setResult(data.valid ? "✅ Valid Certificate" : "❌ Invalid Certificate");
      })
      .catch(() => setResult("❌ Error verifying certificate"));
  }, [code]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">Certificate Verification</h1>
      <p className="mt-3 text-lg">{result}</p>
    </div>
  );
}
