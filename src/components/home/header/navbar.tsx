"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../../dark-mode";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section - Logo & Brand Name */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/loggo.jpg" alt="Prasunet Logo" width={40} height={40} />
              <span className="text-2xl font-extrabold tracking-wide">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Prasu
                </span>
                <span className="text-foreground">Net</span>
              </span>
            </Link>
          </div>

          {/* Right Section - Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* About Page */}
            <Link
              href="/about"
              className="relative font-bold text-xl tracking-tight text-muted-foreground transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              About
            </Link>

            {/* Services Page */}
            <Link
              href="/#services"
              className="relative font-bold text-xl tracking-tight text-muted-foreground transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Services
            </Link>

            {/* Internship Page */}
            <Link
  href="https://docs.google.com/forms/d/e/1FAIpQLSd_IXUmj1XFUT8ydvWbqoWJ9ImZffOsc0rHwsMHICO_E5F5dA/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="relative font-bold text-xl tracking-tight text-muted-foreground transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
>
  Internship
</Link>

            {/* Career Page */}
            <Link
              href="/career"
              className="relative font-bold text-xl tracking-tight text-muted-foreground transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Career
            </Link>

            {/* Contact Page */}
            <Link
              href="/business"
              className="relative font-bold text-xl tracking-tight text-muted-foreground transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Contact
            </Link>

            <Link
              href="/team"
              className="relative font-bold text-xl tracking-tight text-muted-foreground transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Our Team
            </Link>
          </div>

          <div className="flex items-center gap-4">

            {/* Dark Mode Toggle */}
            <ModeToggle />

            {/* Mobile Menu Button */}
            <Button
            
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <div className="space-y-2 px-4">
              {/* About Page */}
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-semibold text-foreground tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Services Page */}
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-semibold text-foreground tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>

              {/* Internship Page */}
              <Link
                href="/internship"
                className="block px-3 py-2 text-base font-semibold text-foreground tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Internship
              </Link>

              {/* Career Page */}
              <Link
                href="/career"
                className="block px-3 py-2 text-base font-semibold text-foreground tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>

              {/* Contact Page */}
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-semibold text-foreground tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
              href="/team"
              className="relative font-bold text-xl tracking-tight text-muted-foreground transition-all duration-300 hover:text-blue-400 hover:underline underline-offset-8 decoration-2"
            >
              Our Team
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
