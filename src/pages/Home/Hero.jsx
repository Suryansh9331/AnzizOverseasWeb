


import { Search } from "lucide-react"

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
            </div>
            <div className="text-black font-semibold text-sm leading-tight">
              ANTIS
              <br />
              OVERSEAS
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Solutions
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Tools
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Learning Hub
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Verified Supplier
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Logistics Solution
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Ghost Icon Button */}
            <button className="p-2 rounded-md hover:bg-gray-100 lg:mr-4">
              <Search className="h-5 w-5" />
            </button>

            {/* Outline Button */}
            <button className="hidden sm:inline-flex items-center border border-gray-300 rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
              LOGIN
            </button>

            {/* Solid Button */}
            <button className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium">
              SIGN UP
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Heading */}
        <div className="text-center lg:text-left mb-12 lg:mb-16">
          <h1 className="font-outfit font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-xl 2xl:text-7xl leading-tight tracking-tight uppercase text-gray-900">
            SOLVE ANY GLOBE TRADE
            <br />
            PROBLEMS - <span className="text-orange-500">INSTANTLY.</span>
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="public/image (1).png"
                alt="Global trade network visualization showing world map with shipping routes"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>

            <div className="pt-4">
              <button className="flex items-center text-gray-900 hover:bg-gray-300 hover:text-black px-8 py-3 text-lg font-semibold bg-transparent rounded-md border border-gray-300">
                GET STARTED FREE
                <img src="/Group 1000008585.png" className="ml-2" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div className="lg:pt-8">
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-lg">
                Trusted by buyers worldwide to fix shipping delays, customs issues, fraud risks, and more.
              </p>
            </div>

            <div className="relative">
              <img
                src="/image (2).png"
                alt="Close-up view of shipping network connections"
                width={450}
                height={300}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />

              {/* Overlay Button */}
              <div className="absolute bottom-2 right-0.5">
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 font-medium rounded-full">
                  EXPLORE HOW IT WORKS
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
