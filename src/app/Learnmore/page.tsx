"use client";
import { useState, useEffect } from "react";

const services = [
 { title: "Software Development", image: "/ssoftware.jpeg", description: "Custom software development, web and mobile application development, enterprise solutions, and SaaS platforms." },
  { title: "IT Consulting & Strategy", image: "/sITconsulting.jpeg", description: "Expert consulting for IT infrastructure, digital transformation, automation, and project management." },
  { title: "E-commerce Solutions", image: "/secommerce.jpg", description: "Build powerful online stores with secure payments, inventory management, and more." },
  { title: "IT Support & Maintenance", image: "/sitsupport.jpeg", description: "Reliable IT support, including help desk services, remote troubleshooting, server maintenance, and hardware support." },
  { title: "Business Intelligence & Analytics", image: "/sbi.jpg", description: "Turn data into insights with BI tools, dashboards, and predictive analytics." },
  { title: "Cloud Services", image: "/scloudservices.jpeg", description: "Cloud migration, computing solutions on AWS, Azure, and Google Cloud, along with storage and backup solutions." },
  { title: "Cybersecurity Services", image: "/scybersecurity.jpeg", description: "Protect your business with network security, data encryption, vulnerability assessments, and risk management." },
  { title: "Data Services", image: "/sdataservices.jpeg", description: "Database management, data analytics, migration, and big data solutions for intelligent decision-making." },
  { title: "Networking & Infrastructure", image: "/snetwork.jpeg", description: "Efficient network setup and management, VPN configurations, VoIP services, and wireless networking." },
  { title: "AI & Machine Learning", image: "/sai.jpeg", description: "Harness AI for automation, chatbot development, and machine learning models tailored to your business needs." },
  { title: "Internet of Things (IoT)", image: "/siot.jpeg", description: "Smart device integration, IoT analytics, and industrial IoT solutions to drive innovation." },
  { title: "ERP & CRM Solutions", image: "/serp.jpeg", description: "Optimize business processes with Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) solutions." },
  { title: "Blockchain & Web3 Solutions", image: "/sblockchain.jpeg", description: "Leading-edge blockchain development, smart contracts, NFT platforms, and cryptocurrency solutions." },
  { title: "DevOps & Automation Services", image: "/sdevops.jpg", description: "Streamline development pipelines, automate deployments, and enhance collaboration." },
  { title: "Custom Software Integration", image: "/scustoionmintegrat.jpg", description: "Seamlessly integrate third-party software into your existing systems for enhanced functionality." },
  { title: "Mobile App Development (iOS & Android)", image: "/smobileapp.jpg", description: "Build powerful, user-friendly apps tailored for iOS and Android platforms." },
  { title: "Web Development & Design", image: "/swebDesign.jpeg", description: "Comprehensive website development, UI/UX design, e-commerce solutions, and CMS platforms like WordPress and Shopify." },
  { title: "SaaS (Software as a Service) Development", image: "/ssaas.jpg", description: "Create scalable, cloud-based SaaS applications for businesses of all sizes." },
  { title: "Big Data Solutions", image: "/sbigdata.jpg", description: "Leverage big data frameworks to process, analyze, and visualize complex data sets." },
  { title: "UI/UX Design & Prototyping", image: "/suiux.jpg", description: "Craft intuitive interfaces and interactive prototypes for web and mobile applications." },
  { title: "Digital Marketing & SEO Services", image: "/smarketing.jpg", description: "Boost your online presence with SEO, content marketing, PPC, and social media strategies." },
  { title: "IT Project Management", image: "/sprojectmgmt.jpg", description: "Ensure projects are delivered on time and on budget with expert IT management services." },
  { title: "Robotic Process Automation (RPA)", image: "/srpa.jpg", description: "Automate repetitive business tasks using advanced RPA technologies." },
  { title: "IT Training & Skill Development", image: "/straining.jpg", description: "Empower your workforce with IT skill development and professional training programs." },
  { title: "Virtual & Augmented Reality (VR/AR) Solutions", image: "/svrar.jpg", description: "Create immersive VR/AR experiences for training, marketing, and interactive solutions." },
  { title: "Game Development", image: "/sgamedev.jpg", description: "Develop engaging, high-performance games for mobile, console, and web platforms." },
  { title: "Embedded Systems Development", image: "/sembedded.jpg", description: "Design and program embedded software for smart devices and IoT hardware." },
  { title: "Quality Assurance & Testing Services", image: "/sqa.jpg", description: "Ensure software reliability with manual and automated testing solutions." },
  { title: "API Development & Integration", image: "/sapi.jpg", description: "Build robust APIs and integrate third-party services seamlessly into your applications." },
  { title: "Legacy System Modernization", image: "/slegacy.jpg", description: "Upgrade and modernize outdated software to improve performance and usability." },
  { title: "IT Compliance & Risk Management", image: "/scompliance.jpg", description: "Ensure regulatory compliance and manage IT risks effectively." },
  { title: "Managed IT Services", image: "/smanagedit.jpg", description: "Comprehensive IT support, monitoring, and management services for businesses." }
  ];

export default function LearnMorePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + (isMobile ? 1 : 3)) % services.length);
    }, 1000); // Auto-scroll every 1 second

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
  <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
  {/* Hero Section */}
  <section
    className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: "url('/home4.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <h1 className="text-5xl md:text-6xl font-bold text-white text-center relative z-10">
      Your Trusted Partner in Innovation, Technology, and Success
    </h1>
  </section>



      {/* About Us */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
        <p className="mt-4 text-lg text-gray-600">
          Prasunet IT Services is a leading technology company providing cutting-edge solutions in software development, 
          AI, cybersecurity, and full-stack development. Our goal is to empower businesses with innovative digital solutions.
        </p>
      </section>

      {/* Services Section (Sliding) */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <div className="overflow-hidden w-full mt-8">
            <div className={`grid transition-transform duration-500 gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
              {services.slice(currentIndex, currentIndex + (isMobile ? 1 : 3)).map((service, index) => (
                <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center transform transition-all duration-500 hover:scale-105">
                  <h3 className="text-2xl font-semibold text-blue-600">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Prasunet?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Expert Team</h3>
              <p className="mt-2 text-gray-600">A team of highly skilled professionals with vast industry experience.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Innovative Solutions</h3>
              <p className="mt-2 text-gray-600">We stay ahead of the curve by integrating the latest technologies.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Customer-Centric</h3>
              <p className="mt-2 text-gray-600">Dedicated to delivering solutions that meet your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">What Our Clients Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <p className="italic">&ldquo;Prasunet transformed our business with an outstanding AI-driven application.&rdquo;</p>
              <h4 className="mt-4 font-bold">- John Doe, CEO of TechCorp</h4>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <p className="italic">&ldquo;Their cybersecurity services have made our data more secure than ever before.&rdquo;</p>
              <h4 className="mt-4 font-bold">- Sarah Smith, CTO of SecureNet</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600">
          Ready to take your business to the next level? Contact Prasunet IT Services today!
        </p>
        <a
          href="/business"
          className="mt-6 inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
