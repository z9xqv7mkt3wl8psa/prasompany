"use client";

import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ITProjectManagementPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/sprojectmgmt.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">IT Project Management</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Ensure projects are delivered on time and on budget with expert IT management services.
          </p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Get a Consultation
          </a>
        </div>
      </header>
      
      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our IT Project Management Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From strategic planning to execution, we provide end-to-end IT project management solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Agile & Scrum Methodologies", description: "Implement efficient agile workflows for faster project delivery." },
            { title: "Risk Management", description: "Identify, assess, and mitigate project risks proactively." },
            { title: "Budget & Resource Allocation", description: "Optimize resources and control project costs effectively." },
            { title: "Stakeholder Communication", description: "Ensure clear communication and collaboration across teams." },
            { title: "Quality Assurance", description: "Maintain high-quality standards through continuous monitoring." },
            { title: "Project Performance Analytics", description: "Track and analyze project performance using data-driven insights." },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
      
      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Need Expert IT Project Management?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Let us manage your IT projects efficiently, ensuring timely and successful completion.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
