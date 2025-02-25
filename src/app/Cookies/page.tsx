"use client";
export default function TermsAndConditions() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Terms & Conditions</h1>
      <p className="text-muted-foreground mb-4">
        Welcome to PRASUNET! These Terms & Conditions govern your use of our services, including web and Android application development, and any related interactions with our company. By engaging with us, you agree to these terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Services Provided</h2>
      <p className="text-muted-foreground mb-4">
        PRASUNET IT SERVICES specializes in developing custom web and Android applications to help businesses grow. Our services include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Custom application development.</li>
        <li>UI/UX design and prototyping.</li>
        <li>Project consultation and support.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Client Responsibilities</h2>
      <p className="text-muted-foreground mb-4">
        As a client, you agree to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Provide accurate and complete information required for project development.</li>
        <li>Adhere to agreed timelines for feedback and approvals.</li>
        <li>Respect intellectual property rights and confidentiality agreements.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Payment Terms</h2>
      <p className="text-muted-foreground mb-4">
        Payment terms will be outlined in the project agreement. Typically, we require:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>An initial deposit to commence work.</li>
        <li>Milestone payments based on project progress.</li>
        <li>Final payment upon project completion and delivery.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="text-muted-foreground mb-4">
        Upon full payment, all intellectual property rights for the developed application will be transferred to you. However, PRASUNET IT SERVICES retains the right to use the project for portfolio and promotional purposes unless otherwise agreed.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <p className="text-muted-foreground mb-4">
        PRASUNET shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid by you for the specific project.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Governing Law</h2>
      <p className="text-muted-foreground mb-4">
        These Terms & Conditions are governed by the laws of India. Any disputes will be resolved through arbitration or in a court of competent jurisdiction.
      </p>

      <p className="text-muted-foreground mt-6">
        For any questions or concerns, please contact us at <a href="mailto:prasunetcompany@gmail.com" className="text-indigo-500">prasunetcompany@gmail.com</a>.
      </p>
    </div>
  );
}