"use client";
import React from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function DigitalMarketingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative w-full bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/smarketing.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Digital Marketing & SEO Services</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Boost your online presence with expert SEO, content marketing, PPC, and social media strategies.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Service Details Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Digital Marketing Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We help businesses grow with cutting-edge digital marketing strategies tailored to their needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "SEO Optimization", desc: "Enhance your website ranking with advanced SEO techniques." },
            { title: "Content Marketing", desc: "Create high-quality content to engage and attract customers." },
            { title: "Social Media Marketing", desc: "Expand your reach through targeted social media campaigns." },
            { title: "PPC Advertising", desc: "Boost visibility with Google Ads, Facebook Ads, and more." },
            { title: "Email Marketing", desc: "Nurture leads and retain customers with automated campaigns." },
            { title: "Brand Strategy", desc: "Develop a strong brand identity and online presence." }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Ready to Elevate Your Online Presence?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let our digital marketing experts help your business thrive in the digital world.
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
