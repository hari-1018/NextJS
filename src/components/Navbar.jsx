'use client'

import { useState } from "react";
import { MdKeyboardArrowRight, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold">LOGO</div>
      
      <ul className="hidden lg:flex gap-10 text-sm tracking-wide">
        <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer">Home</li>
        <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer">Portfolio</li>
        <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer">Benefits</li>
        <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer">Services</li>
        <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer">Pricing</li>
        <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer">FAQ</li>
      </ul>

      <button className="hidden lg:flex items-center gap-1 border border-[#ffbe0d] text-white px-5 py-2 rounded-full hover:bg-[#ffbe0d] hover:text-black transition-colors">
        Book a demo <MdKeyboardArrowRight className="text-[#ffbe0d]" size={25} />
      </button>

      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-black z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg tracking-wide">
          <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer" onClick={toggleMenu}>
            Home
          </li>
          <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer" onClick={toggleMenu}>
            Portfolio
          </li>
          <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer" onClick={toggleMenu}>
            Benefits
          </li>
          <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer" onClick={toggleMenu}>
            Services
          </li>
          <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer" onClick={toggleMenu}>
            Pricing
          </li>
          <li className="hover:text-[#ffbe0d] transition-colors cursor-pointer" onClick={toggleMenu}>
            FAQ
          </li>
        </ul>
        <button
          className="flex items-center gap-1 border border-[#ffbe0d] text-white px-6 py-3 rounded-full hover:bg-[#ffbe0d] hover:text-black transition-colors"
          onClick={toggleMenu}
        >
          Book a demo <MdKeyboardArrowRight className="text-[#ffbe0d]" size={25} />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;