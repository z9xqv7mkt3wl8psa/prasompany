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
    title: "Data Visualization", 
    image: "/data-visualization.jpg", 
    description: "Transform raw data into actionable insights with interactive dashboards and reports."
  },
  { 
    title: "Predictive Analytics", 
    image: "/predictive-analytics.jpg", 
    description: "Use machine learning and AI to forecast trends and optimize decision-making."
  },
  { 
    title: "Big Data Processing", 
    image: "/big-data.jpg", 
    description: "Process and analyze large volumes of structured and unstructured data efficiently."
  },
  { 
    title: "Business Performance Monitoring", 
    image: "/performance-monitoring.jpg", 
    description: "Track key performance indicators (KPIs) in real-time to enhance business operations."
  },
  { 
    title: "Data Warehousing", 
    image: "/data-warehousing.jpg", 
    description: "Store and manage business-critical data securely for seamless access and analysis."
  },
  { 
    title: "Self-Service BI Tools", 
    image: "/self-service-bi.jpg", 
    description: "Empower teams with intuitive BI tools for ad-hoc analysis and data exploration."
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

export default function BusinessIntelligencePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/business-intelligence-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Business Intelligence & Analytics</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Unlock the power of data-driven decision-making with our advanced BI & analytics solutions.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our BI & Analytics Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Leverage data to gain deep insights, predict future trends, and make informed business decisions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Need Advanced Business Insights?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Get in touch with us for expert Business Intelligence & Analytics services.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

