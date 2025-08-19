import { Star } from "lucide-react";
import bg from "../../assets/images/background.png"
export default function BrandSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Card with Background */}
        <div
          className="relative  shadow-lg px-6 py-18 text-center bg-[#3B2F2F] "
          style={{
            backgroundImage: `url(${bg})`, // replace with your bg image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for darker effect */}
          <div className="absolute inset-0 bg-[#3B2F2F]/80 rounded-xl"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Heading */}
            <h2
              className="text-lg sm:text-xl md:text-2xl font-outfit text-white mb-12"
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
        </div>
      </div>
    </section>
  );
}
