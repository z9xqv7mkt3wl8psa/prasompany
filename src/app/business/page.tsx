"use client";
import React, { useState } from "react";
import Image from "next/image";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle text & textarea input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear errors on input
  };

  // Handle radio button changes separately
  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, projectType: e.target.value }));
    setErrors((prevErrors) => ({ ...prevErrors, projectType: "" }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Record<string, string> = {};

    if (!formData.firstName) validationErrors.firstName = "First Name is required.";
    if (!formData.lastName) validationErrors.lastName = "Last Name is required.";
    if (!formData.email) validationErrors.email = "Email is required.";
    if (!formData.company) validationErrors.company = "Company name is required.";
    if (!formData.projectType) validationErrors.projectType = "Please select a project type.";
    if (!formData.message) validationErrors.message = "Message field cannot be empty.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("/api/Register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          message: "",
        });
        setErrors({});
      } else {
        setErrors({ apiError: result.error || "Something went wrong!" });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrors({ apiError: "Failed to submit form. Try again later." });
    }
  };

  return (
    
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen p-6 lg:p-20 bg-blue-100">
      {/* Left Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 lg:w-1/2 w-full">
        <h2 className="text-4xl font-bold text-gray-900">{"Let's work together"}</h2>
        <p className="text-gray-600 mt-2">{"Fill out the form and let's discuss your project needs."}</p>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg"
                placeholder="John"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg"
                placeholder="Doe"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email & Company */}
          <div className="mt-4">
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="johndoe@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label className="text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Your Company Name"
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>

          {/* Phone */}
          <div className="mt-4">
            <label className="text-gray-700">Phone (Optional)</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="+123 456 7890"
            />
          </div>

          {/* Project Type Selection */}
          <div className="mt-6">
            <label className="text-gray-700 font-medium">Project Type</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {["Web App", "Android App", "Marketing", "UI/UX Design"].map((type) => (
                <label
                  key={type}
                  className={`flex items-center space-x-2 bg-gray-100 p-3 rounded-lg cursor-pointer ${
                    formData.projectType === type ? "bg-indigo-200" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={type}
                    checked={formData.projectType === type}
                    onChange={handleProjectTypeChange}
                    className="form-radio"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
            {errors.projectType && <p className="text-red-500 text-sm mt-2">{errors.projectType}</p>}
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="text-gray-700">How can we help you?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              rows={4}
              placeholder="Describe your project"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* API Error Message */}
          {errors.apiError && <p className="text-red-500 text-sm mt-4">{errors.apiError}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white font-semibold p-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Right Image Section */}
      <div className="hidden lg:block lg:w-1/2">
  <Image 
    src="/b1.jpg" 
    alt="Team working" 
    width={800} // Adjust width
    height={500} // Adjust height
    className="rounded-lg shadow-lg w-full h-auto" 
  />
</div>
    </div>
  );
};

export default ContactUs;
