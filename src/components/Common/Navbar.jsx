

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Globe } from "lucide-react";
import logo from "../../assets/images/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Tools", path: "/tools" },
    { name: "Learning Hub", path: "/learning-hub" },
    { name: "Verified Supplier", path: "/verified-supplier" },
    { name: "Logistics Solution", path: "/logistics-solution" },
  ];

  return (
    <nav className="absolute top-4 w-full flex justify-center font-outfit z-50">
      {/* Floating Navbar */}
      <div className="flex items-center justify-between w-[95%] lg:w-[92%] px-6 py-1 rounded-full bg-white/90 backdrop-blur shadow-md">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10 md:h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-900 text-md font-medium hover:text-[#E44F39] transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Icons */}
          <Search className="w-5 h-5 cursor-pointer hover:text-[#E44F39]" />
          <Globe className="w-5 h-5 cursor-pointer hover:text-[#E44F39]" />

          {/* Buttons */}
          <Link
            to="/login"
            className="px-6 py-2 border border-black rounded-full text-xs font-medium hover:bg-gray-100 transition"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-[#E44F39] text-white rounded-full text-xs font-medium hover:bg-[#c93f2d] transition"
          >
            SIGN UP
          </Link>
        </div>

        {/* Hamburger (Tablet + Mobile) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md text-gray-900 hover:bg-gray-100"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Sidebar + Overlay */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-900 text-base font-medium hover:text-[#E44F39] transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Icons */}
          <div className="flex space-x-4 pt-2">
            <Search className="w-5 h-5 cursor-pointer hover:text-[#E44F39]" />
            <Globe className="w-5 h-5 cursor-pointer hover:text-[#E44F39]" />
          </div>

          {/* Buttons */}
          <Link
            to="/login"
            className="px-5 py-2 border border-black rounded-full text-sm font-medium hover:bg-gray-100 transition"
            onClick={() => setIsOpen(false)}
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 bg-[#E44F39] text-white rounded-full text-sm font-medium hover:bg-[#c93f2d] transition"
            onClick={() => setIsOpen(false)}
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </nav>
  );
}
