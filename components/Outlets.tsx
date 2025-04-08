import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const outlets = [
  {
    name: "Gianis Red Icecream",
    image: "/red-icecream.jpg",
  },
  {
    name: "Gianis Blue Icecream",
    image: "/blue-icecream.jpg",
  },
];

export default function Outlets() {
  const [index, setIndex] = useState(0);
  const total = outlets.length;

  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  return (
    <section className="bg-[#d4bb6a] min-h-screen flex flex-col items-center py-12 px-4 sm:px-6">
   
      <div className="text-center mb-10 max-w-xl">
        <h2 className="text-red-700 uppercase tracking-wide text-sm sm:text-base font-bold border-b-2 border-red-700 inline-block mb-2">
          Outlets
        </h2>
        <p className="text-2xl sm:text-3xl font-semibold text-red-700">
          Relish Every{" "}
          <span className="italic font-serif text-4xl">S</span>weet Bite with
          Giani&apos;s
        </p>
      </div>

      <div className="relative w-full max-w-md">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          aria-label="Previous outlet"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="bg-white rounded-xl overflow-hidden w-full h-[340px] shadow-lg mx-auto">
          <div className="relative h-4/5 w-full">
            <Image
              src={outlets[index].image}
              alt={outlets[index].name}
              fill
              className="object-cover"
              priority
              quality={75}
            />
          </div>
          <div className="p-4 text-center font-semibold text-lg text-gray-800">
            {outlets[index].name}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          aria-label="Next outlet"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-6 flex gap-2">
        {outlets.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-4 rounded-full transition-all duration-300 ${
              i === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
