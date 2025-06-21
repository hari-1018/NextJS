import { MdKeyboardArrowRight } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-8">
      <div className="text-4xl font-semibold">LOGO</div>
      <ul className="flex gap-10 text-sm tracking-wide">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Benefits</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>
      <button className="flex items-center gap-1 border border-[#ffbe0d] text-white px-5 py-2 rounded-full">
        Book a demo<MdKeyboardArrowRight className="text-[#ffbe0d]" size={25}/>
      </button>
    </nav>
  );
};

export default Navbar;
