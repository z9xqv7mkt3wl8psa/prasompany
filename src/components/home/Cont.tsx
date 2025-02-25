"use client";
import { useState } from "react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setAlertMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setAlertMessage(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setAlertMessage("❌ Failed to send message. Try again!");
    }

    setLoading(false);
  };

  return (
    <section className="bg-blue-100 dark:bg-gray-900 transition-all duration-300">
      <div className="py-12 lg:py-16 px-6 mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side Content */}
        <div className="text-center lg:text-left">
          <h2 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Have questions? We’d love to hear from you! Reach out for inquiries, feedback, or just to say hello.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <a href="https://www.facebook.com/prasunet" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-2xl">
              <Facebook />
            </a>
            <a href="https://twitter.com/prasunet" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-2xl">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/company/prasunet-company/"  target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-2xl">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/prasunet_company/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-2xl">
              <Instagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block p-3 w-full text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block p-3 w-full text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@example.com"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block p-3 w-full text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="+1 234 567 890"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="block p-3 w-full text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a comment..."
                required
              />
            </div>

            {/* Alert Message */}
            {alertMessage && (
              <div className={`p-3 text-center text-sm rounded-lg ${alertMessage.includes("✅") ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>
                {alertMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg transition-all disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
