import { Globe, Truck, CreditCard } from 'lucide-react';

function Second() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            {/* Tagline */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-gray-600 text-sm font-medium tracking-wide uppercase">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <span>Solving Your Biggest Trade Challenges</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                We Solve The Problems
                <br />
                That Stop Your{' '}
                <span className="text-red-500">Imports</span>
              </h1>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {/* Global Sourcing */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <img src='public/Group 1321315081.png' className="w-20 h-12"/>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Global Sourcing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Find reliable suppliers from around the world with our
                    extensive network and verification process.
                  </p>
                </div>
              </div>

              {/* Efficient Logistics */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Efficient Logistics
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Streamline your shipping and customs clearance with our
                    integrated logistics solutions.
                  </p>
                </div>
              </div>

              {/* Secure Payments */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Secure Payments
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensure secure and transparent transactions with our trusted
                    payment gateway.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Using a placeholder image from Pexels that matches the concept */}
              <img
                src="/imgi_15_person-their-job-posi 2.png"
                alt="Professional logistics worker with delivery cart"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-2xl"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-yellow-500 rounded-full opacity-30 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Second;
