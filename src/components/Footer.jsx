'use client';

import { FaLinkedinIn, FaInstagram, FaBehance, FaDribbble, FaCreativeCommons } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden pt-24 pb-12 text-center">
      <div className="absolute inset-x-0 bottom-0 h-[250px] bg-[url('/footer-bg.jpg')] bg-cover bg-center opacity-70 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-light mb-8">
          Need more clarity?<br />
          Get in touch!
        </h2>

        <button className="bg-[#ffbe0d] text-black font-medium px-6 py-3 rounded-full text-sm hover:bg-yellow-500 transition duration-300">
          Book a demo →
        </button>

        <div className="mt-16 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:items-end">
            <p className="text-white text-sm md:ml-20">© 2024 All Rights Reserved</p>
            <div className="flex gap-4 md:mr-20">
                {[FaLinkedinIn, FaInstagram, FaBehance, FaDribbble, FaCreativeCommons].map((Icon, i) => (
                <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
                >
                    <Icon size={18} />
                </div>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;