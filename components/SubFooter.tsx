import Image from "next/image";
import Link from "next/link";
import { Instagram, X, Facebook } from "lucide-react";

export default function SubFooter() {
  return (
    <footer className="bg-[#dbb85e] text-[#3b2612] px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Tagline */}
        <div className="space-y-4">
          <Image
            src="/logo-red.png"
            alt="Aaoji Logo"
            width={120}
            height={60}
            priority
          />
          <p className="text-sm leading-relaxed">
            Bold Flavors, Fun Vibes, <br /> Authentic Taste
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="#" aria-label="Instagram">
              <Instagram className="text-red-700 hover:text-red-800 transition" />
            </Link>
            <Link href="#" aria-label="X">
              <X className="text-red-700 hover:text-red-800 transition" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="text-red-700 hover:text-red-800 transition" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-red-700 font-bold uppercase mb-3">Quick Links⧸</h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Menu", "Testimonials", "Gallery"].map((link, idx) => (
              <li key={idx}>
                <Link href="#" className="hover:underline transition">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-red-700 font-bold uppercase mb-3">Get in Touch</h4>
          <address className="not-italic text-sm leading-relaxed">
            123 Flavor Street<br />
            Highway City, India<br />
            +91 12461234567899
          </address>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-red-700 font-bold uppercase mb-3">Opening Hours⧸</h4>
          <p className="text-sm">Mon to Sun: 12PM – 12AM</p>
        </div>
      </div>
    </footer>
  );
}
