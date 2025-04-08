"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="bg-[#dfc574] px-4 sm:px-6 py-2 flex justify-between items-center"
      aria-label="Main Navigation"
    >
      {/* Logo */}
      <Link href="/" aria-label="Go to homepage">
        <div className="border-2 border-red-600 p-1">
          <Image
            src="/logo.png"
            alt="Aaoji Logo"
            width={90}
            height={40}
            priority
            quality={80}
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-sm md:text-base text-gray-800 font-medium">
        {["About Us", "Menu", "Testimonials", "Gallery"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-red-600 transition-colors duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="flex space-x-3">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-red-600 hover:text-red-800 text-lg transition" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-red-600 hover:text-red-800 text-lg transition" />
        </a>
      </div>
    </nav>
  );
}
