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
    title: "Blockchain Development", 
    image: "/blockchain-development.jpg", 
    description: "Custom blockchain solutions for secure and decentralized applications." 
  },
  { 
    title: "Smart Contract Development", 
    image: "/smart-contracts.jpg", 
    description: "Automate transactions and enforce agreements with self-executing smart contracts." 
  },
  { 
    title: "NFT Development & Marketplace", 
    image: "/nft-marketplace.jpg", 
    description: "Build NFT platforms for digital assets, gaming, and collectibles." 
  },
  { 
    title: "Cryptocurrency Solutions", 
    image: "/crypto-solutions.jpg", 
    description: "Develop crypto wallets, payment gateways, and token ecosystems." 
  },
  { 
    title: "Decentralized Applications (DApps)", 
    image: "/dapps.jpg", 
    description: "Create Web3 applications with seamless blockchain integration." 
  },
  { 
    title: "DeFi (Decentralized Finance) Solutions", 
    image: "/defi.jpg", 
    description: "Revolutionize finance with DeFi lending, staking, and yield farming platforms." 
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

export default function BlockchainWeb3Page() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/blockchain-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">Blockchain & Web3 Solutions</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Build secure, transparent, and decentralized solutions with blockchain and Web3 technologies.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Blockchain & Web3 Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From smart contracts to DeFi solutions, we empower businesses with blockchain and Web3 innovations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Transform Your Business with Blockchain</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Secure, decentralized, and future-proof solutions to accelerate your Web3 journey.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
