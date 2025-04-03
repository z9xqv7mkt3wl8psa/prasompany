"use client";
import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

const services: ServiceCardProps[] = [
  { 
    title: "Cloud Migration", 
    image: "/cloud-migration.jpg", 
    description: "Seamlessly migrate your applications and data to the cloud with minimal downtime."
  },
  { 
    title: "Cloud Computing", 
    image: "/cloud-computing.jpg", 
    description: "Leverage scalable and cost-effective cloud computing solutions for your business."
  },
  { 
    title: "Multi-Cloud Strategy", 
    image: "/multi-cloud.jpg", 
    description: "Optimize your infrastructure with AWS, Azure, Google Cloud, and hybrid cloud solutions."
  },
  { 
    title: "Cloud Storage & Backup", 
    image: "/cloud-storage.jpg", 
    description: "Secure your data with reliable cloud storage, automated backups, and disaster recovery."
  },
  { 
    title: "Serverless Computing", 
    image: "/serverless.jpg", 
    description: "Deploy and run applications without managing servers, improving efficiency and scalability."
  },
  { 
    title: "Cloud Security & Compliance", 
    image: "/cloud-security.jpg", 
    description: "Ensure data protection, compliance, and security in cloud environments."
  },
];

function ServiceCard({ title, image, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default function CloudServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/cloud-services-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Cloud Services</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Empower your business with cutting-edge cloud solutions, ensuring scalability, security, and efficiency.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Cloud Solutions</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From cloud migration to security and compliance, our services help you leverage the power of the cloud.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Ready to Move to the Cloud?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let us help you transition to the cloud with ease and confidence.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

