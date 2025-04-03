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
    title: "Database Management", 
    image: "/database-management.jpg", 
    description: "Optimize database performance, security, and scalability with expert management solutions."
  },
  { 
    title: "Data Analytics", 
    image: "/data-analytics.jpg", 
    description: "Unlock valuable insights from structured and unstructured data with advanced analytics techniques."
  },
  { 
    title: "Data Migration", 
    image: "/data-migration.jpg", 
    description: "Seamlessly migrate your data across platforms while maintaining integrity and security."
  },
  { 
    title: "Big Data Solutions", 
    image: "/big-data.jpg", 
    description: "Leverage big data technologies to process, analyze, and visualize complex data sets."
  },
  { 
    title: "Data Warehousing", 
    image: "/data-warehousing.jpg", 
    description: "Centralize and streamline data storage for efficient querying and reporting."
  },
  { 
    title: "Data Governance & Security", 
    image: "/data-security.jpg", 
    description: "Ensure compliance and protect sensitive data with robust security policies."
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

export default function DataServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/data-services-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Data Services</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Database management, data analytics, migration, and big data solutions for intelligent decision-making.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Data Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your data into actionable insights with our comprehensive data solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Optimize Your Data Strategy</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Unlock the full potential of your data with our expert solutions.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

