"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google"; // Import Google Font

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" }); // Load Font

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section - Logo & Brand Name */}
          <div className="flex items-center gap-9">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/loggo.jpg" alt="Prasunet Logo" width={40} height={40} />
              <span className={`${dancingScript.className} text-lg font-bold tracking-widest text-gray-900 drop-shadow-lg scale-x-125`}>
                PRASUNET
              </span>
            </Link>
          </div>

          {/* Right Section - Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="relative font-bold text-xl tracking-tight text-gray-700 transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="relative font-bold text-xl tracking-tight text-gray-700 transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Services
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd_IXUmj1XFUT8ydvWbqoWJ9ImZffOsc0rHwsMHICO_E5F5dA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-bold text-xl tracking-tight text-gray-700 transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Internship
            </Link>
            <Link
              href="/career"
              className="relative font-bold text-xl tracking-tight text-gray-700 transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Career
            </Link>
            <Link
              href="/business"
              className="relative font-bold text-xl tracking-tight text-gray-700 transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Business
            </Link>
            <Link
              href="/program"
              className="relative font-bold text-xl tracking-tight text-gray-700 transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Program
            </Link>
            <Link
              href="/contact"
              className="relative font-bold text-xl tracking-tight text-gray-700 transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 hover:text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <div className="space-y-2 px-4">
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-semibold text-gray-700 tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#services"
                className="block px-3 py-2 text-base font-semibold text-gray-700 tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_IXUmj1XFUT8ydvWbqoWJ9ImZffOsc0rHwsMHICO_E5F5dA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-semibold text-gray-700 tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Internship
              </Link>
              <Link
                href="/career"
                className="block px-3 py-2 text-base font-semibold text-gray-700 tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>
              <Link
                href="/business"
                className="block px-3 py-2 text-base font-semibold text-gray-700 tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Business
              </Link>
              <Link
                href="/program"
                className="block px-3 py-2 text-base font-semibold text-gray-700 tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Program
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-semibold text-gray-700 tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
