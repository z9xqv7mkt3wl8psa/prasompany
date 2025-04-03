
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
    title: "Custom E-commerce Development", 
    image: "/custom-ecommerce.jpg", 
    description: "Tailored online store solutions built to meet your business requirements."
  },
  { 
    title: "Payment Gateway Integration", 
    image: "/payment-integration.jpg", 
    description: "Secure and seamless payment processing with multiple payment options."
  },
  { 
    title: "Shopping Cart & Checkout Optimization", 
    image: "/shopping-cart.jpg", 
    description: "Improve conversion rates with a smooth and user-friendly checkout experience."
  },
  { 
    title: "Inventory & Order Management", 
    image: "/inventory-management.jpg", 
    description: "Automated inventory tracking and efficient order processing."
  },
  { 
    title: "Multi-Vendor Marketplace", 
    image: "/multi-vendor.jpg", 
    description: "Develop scalable e-commerce platforms for multiple sellers and vendors."
  },
  { 
    title: "E-commerce SEO & Digital Marketing", 
    image: "/seo-marketing.jpg", 
    description: "Increase visibility and drive sales with SEO, PPC, and social media marketing."
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

export default function EcommerceSolutionsPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/ecommerce-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">E-commerce Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Build, scale, and optimize your online store with our cutting-edge e-commerce solutions.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our E-commerce Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From custom development to digital marketing, we provide everything you need to succeed in e-commerce.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Launch Your E-commerce Business Today</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let us help you create a high-performing online store that drives sales and growth.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
