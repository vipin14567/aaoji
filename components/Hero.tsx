import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="bg-[#d4bb6a] px-6 py-10 md:py-20 md:px-24 flex flex-col md:flex-row justify-between items-center gap-10"
      aria-labelledby="hero-heading"
    >
   
      <div className="max-w-xl text-center md:text-left">

        <div className="flex justify-center md:justify-start">
          <Image
            src="/logo.png"
            alt="Aaoji Logo"
            width={120}
            height={60}
            priority
          />
        </div>

        {/* Headings */}
        <div className="mt-6">
          <h4 className="text-red-700 font-semibold text-lg border-b-2 inline-block border-red-700 mb-2">
            Aaoji:
          </h4>
          <h1
            id="hero-heading"
            className="text-3xl md:text-4xl font-extrabold text-red-700 leading-tight mb-4"
          >
            Bold Flavors, Fun Vibes,
            <br />
            Authentic Taste
          </h1>
          <p className="text-gray-800 text-base mb-6">
            Aaoji is your perfect pit stop on the highway, serving up bold,
            authentic flavors that are fast, fun, and full of taste. Whether
            you&apos;re craving a quick bite or a satisfying meal, Aaoji blends
            tradition with excitement for a flavorful adventure – no detours
            needed!
          </p>

          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
            <a
              href="tel:+919999999999"
              className="bg-white text-red-700 font-semibold px-5 py-2 rounded-full shadow hover:bg-red-100 transition"
            >
              Call Us for Bookings
            </a>
            <Link
              href="/menu"
              className="text-red-700 font-medium underline underline-offset-4 hover:text-red-800"
            >
              Explore Menu
            </Link>
          </div>


          <div className="mt-4 text-red-700 text-xl">𓂀</div>
        </div>
      </div>

      {/* Right*/}
      <div className="relative w-[320px] md:w-[400px] aspect-[4/5] bg-white rounded-t-[9999px] overflow-hidden border-[12px] border-[#540000] shadow-lg">
        <Image
          src="/food-plate.jpg"
          alt="Delicious Indian meal served on a plate"
          fill
          quality={70}
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </div>
    </section>
  );
}
