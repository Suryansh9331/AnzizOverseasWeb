import { Star } from "lucide-react";
import Bg from "../../assets/images/background.png"
export default function BrandSection() {
  return (
    <section className="relative w-full bg-[#3B2F2F] text-white py-16 px-6">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: Bg, // replace with your bg image
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-lg sm:text-xl font-outfit text-white mb-12"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Popular brands use Anjis Overseas
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {/* Example logos - replace with your own */}
          <div className="flex items-center space-x-2 justify-center">
            <img src="/logos/waverio.png" alt="Waverio" className="h-6 w-6" />
            <span className="text-white font-semibold">Waverio</span>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <img src="/logos/logipsum.png" alt="Logipsum" className="h-6 w-6" />
            <span className="text-white font-semibold">Logipsum</span>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <img src="/logos/alterbone.png" alt="Alterbone" className="h-6 w-6" />
            <span className="text-white font-semibold">Alterbone</span>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <img src="/logos/tinygone.png" alt="Tinygone" className="h-6 w-6" />
            <span className="text-white font-semibold">Tinygone</span>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <img src="/logos/preso.png" alt="Preso" className="h-6 w-6" />
            <span className="text-white font-semibold">Preso</span>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <img src="/logos/ridoria.png" alt="Ridoria" className="h-6 w-6" />
            <span className="text-white font-semibold">Ridoria</span>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <img src="/logos/carbonia.png" alt="Carbonia" className="h-6 w-6" />
            <span className="text-white font-semibold">Carbonia</span>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <img src="/logos/incanto.png" alt="Incanto" className="h-6 w-6" />
            <span className="text-white font-semibold">Incanto</span>
          </div>
        </div>

        {/* Bottom Section: Logo + Rating */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Company Logo */}
          <img
            src="/logos/anjis-logo.png"
            alt="Anjis Overseas"
            className="h-14 w-auto"
          />

          {/* Stars & Review */}
          <div className="flex items-center gap-2">
            <div className="flex text-[#E44F39]">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
            </div>
            <p className="text-sm text-gray-200">
              4.4/5 <span className="text-gray-400">(14,590 Reviews)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
