


import img from "../../assets/images/logistic.png"
import { Globe, Truck, CreditCard } from "lucide-react"; // clean vector icons

function Second() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-full mx-auto px-6 sm:px-8 lg:px-20 py-4 lg:py-22">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-2 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Tagline */}
            <div className="mb-6">
              <p className="flex items-center gap-2 md:text-sm text-xs  font-semibold tracking-wide uppercase text-[#E44F39]">
                <span className="h-[1px] w-8 bg-[#E44F39]"></span>
                Solving Your Biggest Trade Challenges
              </p>
            </div>

            {/* Main Headline */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Solve the Problems
                <br />
                That Stop Your{" "}
                <span className="text-[#E44F39]">Imports</span>
              </h1>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {/* Global Sourcing */}
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[#E44F39]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg  font-bold text-gray-800 mb-1">
                    Global Sourcing
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Find reliable suppliers from around the world with our
                    extensive network and verification process.
                  </p>
                </div>
              </div>

              {/* Efficient Logistics */}
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-[#E44F39]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg  font-bold text-gray-800 mb-1">
                    Efficient Logistics
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Streamline your shipping and customs clearance with our
                    integrated logistics solutions.
                  </p>
                </div>
              </div>

              {/* Secure Payments */}
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#E44F39]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg  font-bold text-gray-800 mb-1">
                    Secure Payments
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Ensure secure and transparent transactions with our trusted
                    payment gateway.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={img}
              alt="Professional logistics worker with delivery cart"
              className="w-full max-w-sm md:max-w-md lg:max-full xl:max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Second;
