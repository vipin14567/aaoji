import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/pizza.jpg", alt: "Pizza", style: "rounded-tl-[80px]" },
  { src: "/noodles.jpg", alt: "Noodles", style: "rounded-tr-[80px]" },
  { src: "/skewers.jpg", alt: "Skewers", style: "rounded-bl-[80px]" },
  { src: "/mojito.jpg", alt: "Mojito", style: "rounded-br-[80px]" },
];

export default function AaojiAbout() {
  return (
    <section className="bg-[#fef7e5] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left - Image Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-[500px] w-full">
        {images.map((img, i) => (
          <div key={i} className={`${img.style} overflow-hidden`}>
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={300}
              quality={70}
              className="object-cover w-full h-full"
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Right - Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h4 className="uppercase text-red-600 font-bold text-md border-b-2 inline-block border-red-600 mb-2">
          The Story
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          What Aaoji is all about!
        </h2>
        <p className="text-gray-800 mb-6">
          Founded in 2020, Aaoji was born from a love of bold, authentic street flavors with a fun, modern twist.
          We&apos;re a go-to for locals and travelers alike—serving up more than meals, but unforgettable experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <a
            href="tel:+919999999999"
            className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Call Us for Bookings
          </a>
          <Link
            href="/menu"
            className="text-red-600 font-medium underline underline-offset-4 hover:text-red-700"
          >
            Explore Menu
          </Link>
        </div>

        {/* Decorative Line */}
        <div className="mt-4 text-red-600 text-xl">𓂀</div>
      </div>
    </section>
  );
}
