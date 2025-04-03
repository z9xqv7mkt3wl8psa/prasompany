"use client";

import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ITComplianceRiskManagement() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/scompliance.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">IT Compliance & Risk Management</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Ensure regulatory compliance and manage IT risks effectively with our expert solutions.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our IT Compliance & Risk Management Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We help businesses stay compliant with industry regulations and mitigate risks through expert risk assessments and policy enforcement.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Regulatory Compliance", description: "Ensure compliance with GDPR, HIPAA, ISO, and other industry standards." },
            { title: "Risk Assessment & Mitigation", description: "Identify potential threats and develop strategies to mitigate IT risks." },
            { title: "IT Security Policies", description: "Implement policies and frameworks to protect your IT infrastructure." },
            { title: "Data Protection & Privacy", description: "Secure sensitive data and ensure privacy in line with legal requirements." },
            { title: "Incident Response Planning", description: "Develop plans to respond effectively to security breaches and threats." },
            { title: "Continuous Compliance Monitoring", description: "Regular audits and monitoring to maintain compliance over time." },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Stay Compliant and Secure</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let our experts help you navigate complex compliance regulations and manage IT risks efficiently.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
