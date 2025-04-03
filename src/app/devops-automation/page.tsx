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
    title: "CI/CD Pipeline Automation", 
    image: "/cicd-pipeline.jpg", 
    description: "Implement continuous integration and deployment for faster software releases." 
  },
  { 
    title: "Infrastructure as Code (IaC)", 
    image: "/iac.jpg", 
    description: "Manage and provision infrastructure efficiently using Terraform, Ansible, and more." 
  },
  { 
    title: "Containerization & Orchestration", 
    image: "/containers.jpg", 
    description: "Utilize Docker and Kubernetes for scalable and portable applications." 
  },
  { 
    title: "Cloud DevOps Solutions", 
    image: "/cloud-devops.jpg", 
    description: "Optimize cloud environments on AWS, Azure, and Google Cloud for efficiency." 
  },
  { 
    title: "Monitoring & Logging", 
    image: "/monitoring.jpg", 
    description: "Enhance observability with tools like Prometheus, Grafana, and ELK stack." 
  },
  { 
    title: "Security & Compliance Automation", 
    image: "/security-devops.jpg", 
    description: "Automate security policies and compliance checks for DevSecOps implementation." 
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

export default function DevOpsAutomationPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/devops-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">DevOps & Automation Services</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Streamline development pipelines, automate deployments, and enhance collaboration with our DevOps solutions.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our DevOps & Automation Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From CI/CD pipelines to cloud infrastructure, we help businesses accelerate software delivery with DevOps automation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Automate & Scale Your IT Operations</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Enhance efficiency, reduce downtime, and accelerate deployments with our DevOps services.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
