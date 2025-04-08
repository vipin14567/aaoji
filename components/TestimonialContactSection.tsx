import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Aaoji is my new favorite stop on the highway! The flavors here are very refreshing. Will definitely be stopping here on every trip!",
    author: "Suresh Naithani",
  },
  {
    quote:
      "I’ve tried a lot of places while traveling to Delhi, but Aaoji really stands out! The flavors are amazing and hygienic!",
    author: "Rekha Dixit",
  },
  {
    quote:
      "Stopped by Aaoji, and felt wow! The food was hot, tasty, and full of flavor. This is my go-to on every trip now!",
    author: "Sarthak Singh",
  },
];

export default function TestimonialContactSection() {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-[#fdf4dc] px-6 py-16 text-center">
      {/* Section Header */}
      <header>
        <h4 className="text-red-700 font-medium uppercase border-b-2 border-red-700 inline-block mb-2">
          Testimonials
        </h4>
        <h2 className="text-2xl md:text-3xl text-red-700 font-bold mb-10">
          RAVING REVIEW⧸: HEAR FROM OUR HAPPY FOODIES!
        </h2>
      </header>

      {/* Testimonials Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 transition-all">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>

          <div className="border border-red-300 bg-white rounded-lg px-6 py-4 text-left max-w-xl">
            <p className="text-4xl text-gray-300 font-serif leading-none mb-2">“</p>
            <p className="text-sm text-gray-800">{testimonials[index].quote}</p>
            <p className="font-bold mt-4">{testimonials[index].author}</p>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-red-700" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto text-left">
        {/* Map Placeholder */}
        <div className="border border-red-500 rounded-lg min-h-[300px] flex items-center justify-center text-red-700 font-bold text-lg">
          MAP HERE
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form logic here
          }}
          className="bg-white p-6 rounded-lg shadow-md w-full"
        >
          <h3 className="text-red-700 font-bold uppercase text-lg mb-4">
            Book a Private Party⧸
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your full name*"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            <div className="flex gap-2">
              <select
                className="border border-gray-300 rounded-md px-2 py-2 text-sm"
                defaultValue="+91 IND"
              >
                <option>+91 IND</option>
                <option>+1 USA</option>
              </select>
              <input
                type="tel"
                required
                placeholder="Mobile number*"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Email ID*"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            <textarea
              rows={4}
              placeholder="Tell us something about your enquiry!"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
