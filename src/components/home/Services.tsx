"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Software Development", image: "/ssoftware.jpeg", description: "Custom software development, web and mobile application development, enterprise solutions, and SaaS platforms." },
  { title: "IT Consulting & Strategy", image: "/sITconsulting.jpeg", description: "Expert consulting for IT infrastructure, digital transformation, automation, and project management." },
  { title: "E-commerce Solutions", image: "/secommerce.jpg", description: "Build powerful online stores with secure payments, inventory management, and more." },
  { title: "IT Support & Maintenance", image: "/sitsupport.jpeg", description: "Reliable IT support, including help desk services, remote troubleshooting, server maintenance, and hardware support." },
  { title: "Business Intelligence & Analytics", image: "/sbi.jpg", description: "Turn data into insights with BI tools, dashboards, and predictive analytics." },
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


const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 8);

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Services</h2>
        <h3 className="text-2xl font-semibold mb-12">Transform your business with advanced technologies</h3>

        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gray-800"
            >
              <div
                className="shadow-xl absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out"></div>
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-left text-white">
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 px-6 py-3 text-lg font-semibold bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-300 transition"
        >
          {showAll ? "Show less ↑" : "View all Services ↓"}
        </button>
      </div>
    </section>
  );
};

export default Services;
