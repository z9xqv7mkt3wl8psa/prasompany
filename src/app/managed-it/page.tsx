"use client";
import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

const ManagedITServices = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/images/managed-it-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Managed IT Services</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Comprehensive IT support, monitoring, and management services for businesses.
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
        <h2 className="text-4xl font-bold text-gray-800">Our Managed IT Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Ensure your IT systems run smoothly with proactive monitoring, security updates, and expert support.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Secure and Optimize Your IT Infrastructure</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Partner with us for reliable IT management and support services tailored to your business needs.
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
};

const services = [
  {
    title: "24/7 IT Support",
    description: "Round-the-clock IT support and troubleshooting for businesses of all sizes.",
    image: "/it-support.jpg",
  },
  {
    title: "Network Monitoring",
    description: "Proactive network monitoring to ensure uptime and performance.",
    image: "/network-monitoring.jpg",
  },
  {
    title: "Cybersecurity Management",
    description: "Continuous security updates and risk assessments to protect your business.",
    image: "/cybersecurity-management.jpg",
  },
  {
    title: "Cloud Infrastructure Management",
    description: "Optimized cloud solutions for storage, computing, and scalability.",
    image: "/cloud-management.jpg",
  },
  {
    title: "Data Backup & Recovery",
    description: "Regular data backups and disaster recovery planning for business continuity.",
    image: "/data-backup.jpg",
  },
  {
    title: "Software Updates & Patch Management",
    description: "Keeping your software and systems up-to-date for security and performance.",
    image: "/software-updates.jpg",
  },
];

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ManagedITServices;
