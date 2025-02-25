"use client";
import { useState } from "react";
import { Linkedin, Github } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  resumeUrl: string; // Changed from File | null to string
  jobTitle: string;
  experience: string;
  coverLetter: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

const jobTitles = [
  "Software Engineer",
  "Android Developer",
  "UI/UX Designer",
  "Software Testing",
  "Marketing Specialist"
];

const countryCodes = [
  { code: "+1", name: "USA" },
  { code: "+44", name: "UK" },
  { code: "+91", name: "India" },
  { code: "+61", name: "Australia" },
  { code: "+49", name: "Germany" },
];

const CareerApplicationForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    resumeUrl: "", // Changed from null to empty string
    jobTitle: "",
    experience: "",
    coverLetter: "",
    linkedin: "",
    github: "",
    portfolio: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("+1");

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.phone) newErrors.phone = "Phone number is required";
      else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
        newErrors.phone = "Invalid phone number";
      }
    }

    if (currentStep === 2) {
      if (!formData.resumeUrl) newErrors.resumeUrl = "Resume URL is required";
      else if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(formData.resumeUrl)) {
        newErrors.resumeUrl = "Invalid URL format";
      }
      if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
      if (!formData.experience) newErrors.experience = "Years of experience is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      setIsSubmitting(true);

      try {
        // Prepare data for API request
        const requestData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: selectedCountryCode + formData.phone,
          email: formData.email,
          resumeUrl: formData.resumeUrl, // Directly use the URL provided by the user
          jobTitle: formData.jobTitle,
          experience: formData.experience,
          coverLetter: formData.coverLetter,
          linkedin: formData.linkedin,
          github: formData.github,
          portfolio: formData.portfolio,
        };

        // Send data to Next.js API
        const response = await fetch("/api/CareerApplication", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          alert("Application submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            resumeUrl: "",
            jobTitle: "",
            experience: "",
            coverLetter: "",
            linkedin: "",
            github: "",
            portfolio: "",
          });
          setStep(1);
        } else {
          alert("Error submitting application. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting application. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden relative">
            <img
              src="/img3.jpg"
              alt="Company Logo"
              className="w-full h-96 object-cover rounded-none shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <h1 className="text-4xl font-serif font-bold text-white">Home / Career</h1>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Career Application</h1>
            <div className="flex justify-center space-x-4 mb-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    step >= item
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Phone Number</label>
                      <div className="flex">
                        <select
                          value={selectedCountryCode}
                          onChange={(e) => setSelectedCountryCode(e.target.value)}
                          className="w-1/4 px-4 py-2 border rounded-l-lg focus:ring-2 focus:ring-blue-500"
                        >
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.code}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-3/4 px-4 py-2 border rounded-r-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Professional Details</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2 font-medium">Resume/CV URL</label>
                      <input
                        type="url"
                        name="resumeUrl"
                        value={formData.resumeUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="https://example.com/resume.pdf"
                      />
                      {errors.resumeUrl && (
                        <p className="text-red-500 text-sm mt-1">{errors.resumeUrl}</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Job Title</label>
                      <select
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Job Title</option>
                        {jobTitles.map((title) => (
                          <option key={title} value={title}>
                            {title}
                          </option>
                        ))}
                      </select>
                      {errors.jobTitle && (
                        <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Years of Experience</label>
                      <input
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.experience && (
                        <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Additional Information</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2 font-medium">Cover Letter</label>
                      <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        maxLength={1000}
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Optional - Max 1000 characters"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">LinkedIn Profile</label>
                      <div className="relative">
                        <Linkedin className="absolute left-3 top-3 text-gray-500" />
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">GitHub Profile</label>
                      <div className="relative">
                        <Github className="absolute left-3 top-3 text-gray-500" />
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Portfolio Website</label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all"
                  >
                    Previous
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto transition-all"
                  >
                    Next
                  </button>
                ) : (
                  <div className="w-full text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerApplicationForm;