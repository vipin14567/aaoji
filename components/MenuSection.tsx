"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuImages = ["/menu-1.png", "/menu-2.png"];

export default function MenuSection() {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % menuImages.length);

  return (
    <section
      className="bg-[#fdf4dc] px-6 py-16 text-center"
      aria-labelledby="menu-heading"
    >
   
      <h4 className="text-red-700 font-medium uppercase border-b-2 border-red-700 inline-block mb-2">
        Explore Our Menu
      </h4>
      <h2
        id="menu-heading"
        className="text-2xl md:text-3xl text-red-700 font-bold mb-10"
      >
        EXPLORE THE MAGIC OF OUR <i>/SAVORY CREATIONS/</i>
      </h2>

   
      <div className="relative max-w-4xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous menu image"
          className="absolute top-1/2 -left-6 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-red-100 transition"
        >
          <ChevronLeft size={24} className="text-red-700" />
        </button>

        {/* Image */}
        <div className="overflow-hidden rounded-lg shadow-lg flex justify-center bg-white">
          <Image
            src={menuImages[index]}
            alt={`Menu Page ${index + 1}`}
            width={600}
            height={450}
            quality={75}
            priority
            className="object-contain rounded-lg transition-transform duration-300"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next menu image"
          className="absolute top-1/2 -right-6 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-red-100 transition"
        >
          <ChevronRight size={24} className="text-red-700" />
        </button>
      </div>


      <div className="flex justify-center mt-4 gap-2">
        {menuImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to menu image ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === index ? "bg-red-700" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <a
        href="/menu-download.pdf"
        download
        className="text-sm text-red-700 underline mt-6 inline-block hover:text-red-800"
      >
        Download Menu
      </a>
    </section>
  );
}
