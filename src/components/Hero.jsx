import { MdKeyboardArrowRight } from "react-icons/md";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-16">
      <div className="bg-[#141414] text-gray-400 text-sm px-4 py-1 rounded-full mb-4 border border-gray-600">
        5.0 &nbsp; ⭐⭐⭐⭐⭐ 11 reviews
      </div>
      <h1 className="text-4xl md:text-7xl tracking-wide leading-tight mb-4">
        Partner with a Full-Service <br />
        Design Team for All Your <br />
        Creative Needs
      </h1>
      <p className="text-gray-300 mb-8 font-light tracking-wide">
        Skip the hassle of finding the perfect full-time designer or studio
      </p>
      <button className="flex items-center gap-1 bg-[#ffbe0d] text-black font-medium px-5 py-3 rounded-full hover:bg-yellow-400 transition">
        Connect - us<MdKeyboardArrowRight size={25}/>
      </button>
    </div>
  );
};

export default Hero;
