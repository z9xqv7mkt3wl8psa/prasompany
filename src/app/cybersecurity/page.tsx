"use client";
import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    image: "/network-security.jpg",
    title: "Network Security",
    description: "Protect your infrastructure with advanced firewall and intrusion detection systems.",
  },
  {
    image: "/data-encryption.jpg",
    title: "Data Encryption",
    description: "Secure sensitive data with industry-leading encryption standards.",
  },
  {
    image: "/risk-management.jpg",
    title: "Risk Management",
    description: "Identify vulnerabilities and mitigate security risks efficiently.",
  },
  {
    image: "/security-audit.jpg",
    title: "Security Audits",
    description: "Comprehensive assessments to ensure compliance and security.",
  },
  {
    image: "/cyber-threat.jpg",
    title: "Cyber Threat Monitoring",
    description: "Continuous monitoring for potential threats and breaches.",
  },
];

function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default function CyberSecurityPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Cyber Security Banner */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/cybersecurity-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Cybersecurity Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Safeguard your business with our cutting-edge cybersecurity services, ensuring data protection and risk management.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Cybersecurity Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From risk management to security audits, we provide a full spectrum of cybersecurity solutions to protect your enterprise.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Ready to Secure Your Business?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Partner with us for reliable cybersecurity solutions tailored to your needs.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
