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
    title: "24/7 Help Desk Support", 
    image: "/help-desk.jpg", 
    description: "Round-the-clock technical support to resolve issues quickly and efficiently."
  },
  { 
    title: "Remote IT Support", 
    image: "/remote-support.jpg", 
    description: "Quick and secure remote troubleshooting for seamless operations."
  },
  { 
    title: "Server Maintenance & Monitoring", 
    image: "/server-maintenance.jpg", 
    description: "Ensure optimal server performance with regular maintenance and real-time monitoring."
  },
  { 
    title: "Network Management", 
    image: "/network-management.jpg", 
    description: "Secure and optimize your IT infrastructure with professional network management services."
  },
  { 
    title: "Software Updates & Patch Management", 
    image: "/software-updates.jpg", 
    description: "Keep your systems secure and up-to-date with regular software patches and updates."
  },
  { 
    title: "On-Site IT Support", 
    image: "/onsite-support.jpg", 
    description: "Reliable on-site technical support for hardware and software issues."
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

export default function ITSupportMaintenancePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/it-support-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">IT Support & Maintenance</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Keep your IT systems running smoothly with our comprehensive support and maintenance solutions.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get Support Now
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our IT Support Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Reliable IT support and maintenance services to ensure your business operates smoothly without disruptions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Need Reliable IT Support?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Get in touch with us for expert IT support and maintenance services tailored to your needs.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

