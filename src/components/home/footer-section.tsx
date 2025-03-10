"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        setEmail(""); // Reset the input field after successful subscription
      }
    } catch (error) {
      console.error("Error occurred:", error); // Log the actual error
      setMessage("Something went wrong.");
    }
     finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Branding and Subscription Section */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Image src="/loggo.jpg" alt="Prasunet Logo" width={50} height={50} />
              <div>
                <h2 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    PRASUNET COMPANY
                  </span>
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Empowering businesses with innovative IT solutions. We provide cutting-edge services to help your business grow and thrive in the digital world.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground text-center">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="pl-10 pr-4 py-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Mail className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
                <Button type="submit" className="w-full hover:bg-indigo-600 transition-all" disabled={loading}>
                  {loading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              {message && <p className="text-center text-sm text-muted-foreground">{message}</p>}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Useful Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About", path: "/about" },
                { name: "Services", path: "/#services" },
                { name: "Projects", path: "/#projects" },
                { name: "Our Team", path: "/team" },
                { name: "Careers", path: "/career" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-muted-foreground hover:text-indigo-500 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", path: "/PrivacyPolicy" },
                { name: "Terms & Conditions", path: "/tandc" },
                { name: "Cookies Policy", path: "/Cookies" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-muted-foreground hover:text-indigo-500 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-indigo-500 transition-colors">
                <MapPin className="h-5 w-5" />
                <span>Chandigarh, India</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-indigo-500 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="text-sm">prasunetcompany@gmail.com</span>
              </li>
              
            </ul>

            {/* Social Media Links */}
            <div className="flex gap-2 mt-4">
              {[
                { href: "https://twitter.com/prasunet", icon: <Twitter className="h-5 w-5" />, color: "hover:text-blue-400" },
                { href: "https://www.facebook.com/prasunet", icon: <Facebook className="h-5 w-5" />, color: "hover:text-blue-600" },
                { href: "https://www.linkedin.com/company/prasunet-company/", icon: <Linkedin className="h-5 w-5" />, color: "hover:text-blue-500" },
                { href: "https://www.instagram.com/prasunet_company/", icon: <Instagram className="h-5 w-5" />, color: "hover:text-pink-500" },
              ].map(({ href, icon, color }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className={color}>
                    {icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()} Prasunet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
