import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 30) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }

  return (
    <div className={color ? 'sticky bg-[#40fe5caf] top-0 z-50 duration-300 shadow-md py-1' : 'pt-0 shadow-sm border-b border-[#40fe5c1f] navBg duration-300'}>
      <div className="max-w-[1620px] mx-auto xl:px-24 lg:px-16 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-5'}`}>

            <Link to="/">
              <img src={logo} alt="Logo" className="w-[50px] mr-3 ml-5 md:ml-0" />
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#57db6b]" /> : <IoMenu className="text-[#57db6b]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] px-4 ${open ? 'top-[75px] opacity-100 bg-[#40FE5B] z-10' : 'top-[-490px]'}`}>

              <li>
                <Link to="/" className="2xl:text-[18px] text-[#40FE5B] font-inter ml-5 md:ml-4 uppercase">Home</Link>
              </li>

              <li>
                <Link to="/" className="2xl:text-[18px] text-[#FFFFFF] hover:text-[#40FE5B] font-inter duration-300 uppercase">About</Link>
              </li>

              <li>
                <Link to="/" className="2xl:text-[18px] text-[#FFFFFF] hover:text-[#40FE5B] font-inter duration-300 uppercase">Tokenomics</Link>
              </li>

              <li>
                <Link to="/" className="2xl:text-[18px] text-[#FFFFFF] hover:text-[#40FE5B] font-inter duration-300 uppercase">How to buy</Link>
              </li>

              <li>
                <Link to="/" className="2xl:text-[18px] text-[#FFFFFF] hover:text-[#40FE5B] font-inter duration-300 uppercase">Roadmap</Link>
              </li>

              <div className="block md:hidden">
                <Button className="bg-[#02b81c4d] uppercase text-[16px] font-inter font-normal">Buy Now</Button>
              </div>
            </ul>

            <div className="md:block hidden">
              <Button className="bg-[#02b81c4d] uppercase text-[16px] font-inter font-normal">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;