import Container from '@/components/sections/Container/Container';
import circleImg from '@/assets/footer/Group21.png';
import circleImg2 from '@/assets/footer/Group1.png';
import pathImg from '@/assets/footer/path.png';
import logo from '@/assets/logo.png';
import { Link } from "react-scroll";
import { PiTelegramLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=''>
      {/* sm & md footer */}
      <div className='block lg:hidden'>
        <div className='-mt-96 md:-mt-72 relative'>
          <div style={{ backgroundImage: `url(${circleImg})` }} className='bg-center bg-no-repeat bg-contain 2xl:bg-cover min-h-[1055px] 2xl:min-h-[1350px]'>

            {/* Shadow */}
            <div className='w-full h-[150px] md:h-[200px] absolute top-[300px] md:top-56 footerShadow' />

            <img src={pathImg} alt="Image" className='w-[250px] md:w-[350px] lg:w-[430px] xl:w-[650px] 2xl:w-[900px] pt-[465px] md:pt-[450px] lg:pt-[420px] xl:pt-[350px] 2xl:pt-[430px] mx-auto' />

            <p className='text-[#FFF] text-[19px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-inter font-semibold uppercase text-center w-[75%] md:w-[64%] xl:w-[64%] 2xl:w-[50%] mx-auto -mt-24 md:-mt-40 lg:-mt-52 xl:-mt-72 2xl:-mt-[350px]'>JOIN $SAT AND LETS BARK OUR  WAY TO CRYPTO STARDOM  TOGETHER!</p>
          </div>

          {/* Footer menu */}
          <div className='bg-[#07360F] -mt-[430px] md:-mt-[354px] lg:-mt-[295px] xl:-mt-[230px]'>
            <div className="max-w-[1670px] mx-auto 2xl:px-0 xl:px-24 lg:px-[70px] md:px-10 sm:px-2 px-4">
              <div className='lg:flex justify-between items-center py-6'>
                <Link to="home" smooth={true} offset={-30} duration={600} className='cursor-pointer'>
                  <img src={logo} alt="Image" className='w-[50px]' />
                </Link>

                {/* Menu */}
                <div>
                  <ul className='lg:flex items-center space-y-3 lg:space-y-0 lg:space-x-10 my-5 lg:my-0'>
                    <li>
                      <Link to="home" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#40FE5B] font-inter uppercase cursor-pointer">Home</Link>
                    </li>

                    <li>
                      <Link to="aboutToken" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#A5A8B9] hover:text-[#40FE5B] font-inter duration-300 uppercase cursor-pointer">About</Link>
                    </li>

                    <li>
                      <Link to="tokenomics" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#A5A8B9] hover:text-[#40FE5B] font-inter duration-300 uppercase cursor-pointer">Tokenomics</Link>
                    </li>

                    <li>
                      <Link to="buy" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#A5A8B9] hover:text-[#40FE5B] font-inter duration-300 uppercase cursor-pointer">How to buy</Link>
                    </li>

                    <li>
                      <Link to="roadmap" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#A5A8B9] hover:text-[#40FE5B] font-inter duration-300 uppercase cursor-pointer">Roadmap</Link>
                    </li>
                  </ul>
                </div>

                {/* Action button */}
                <div className='flex items-center'>
                  <a href="" className='text-white mr-4'>
                    <div className='bg-[#02B81C] hover:bg-[#349e44] p-4 rounded-[8px] duration-300'>
                      <PiTelegramLogoThin className='text-[25px]' />
                    </div>
                  </a>

                  <a href="" className='text-white'>
                    <div className='bg-[#02B81C] hover:bg-[#349e44] p-4 rounded-[8px] duration-300'>
                      <FaXTwitter className='text-[25px]' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className='bg-[#02B81C]'>
            <p className='text-[#fff] text-center font-inter py-6'>©{new Date().getFullYear()} All Rights reserved to $SAT Token</p>
          </div>
        </div>
      </div>

      {/* 2xl footer */}
      <div className='hidden lg:block lg:-mt-32 xl:mt-0'>
        <div className='relative'>
          {/* Shadow */}
          <div className='w-full h-[500px] absolute footerShadow' />

          <div style={{ backgroundImage: `url(${circleImg2})` }} className='bg-center bg-no-repeat bg-contain 2xl:bg-cover min-h-[935px] 2xl:min-h-[1350px]'>
            <img src={pathImg} alt="Image" className='w-[250px] md:w-[350px] lg:w-[430px] xl:w-[650px] 2xl:w-[900px] mx-auto pt-[380px] xl:pt-[300px] 2xl:pt-[400px]' />

            <p className='text-[#FFF] text-[19px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-inter font-semibold uppercase text-center w-[75%] md:w-[64%] xl:w-[64%] 2xl:w-[50%] mx-auto -mt-24 md:-mt-40 lg:-mt-52 xl:-mt-72 2xl:-mt-[350px]'>JOIN $SAT AND LETS BARK OUR  WAY TO CRYPTO STARDOM  TOGETHER!</p>

          </div>

          {/* Footer menu */}
          <div className='lg:-mt-[245px] xl:-mt-[165px] 2xl:-mt-[217px]'>
            <div className="max-w-[1670px] mx-auto 2xl:px-0 xl:px-24 lg:px-[70px] md:px-10 sm:px-2 px-4">
              <div className='lg:flex justify-between items-center py-6'>
                <Link to="home" smooth={true} offset={-30} duration={600} className='cursor-pointer'>
                  <img src={logo} alt="Image" className='w-[45px] xl:w-[50px]' />
                </Link>

                {/* Menu */}
                <div>
                  <ul className='lg:flex items-center space-y-3 lg:space-y-0 lg:space-x-10 my-5 lg:my-0'>
                    <li>
                      <Link to="home" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#40FE5B] font-inter uppercase cursor-pointer">Home</Link>
                    </li>

                    <li>
                      <Link to="aboutToken" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#A5A8B9] hover:text-[#40FE5B] font-inter duration-300 uppercase cursor-pointer">About</Link>
                    </li>

                    <li>
                      <Link to="tokenomics" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#A5A8B9] hover:text-[#40FE5B] font-inter duration-300 uppercase cursor-pointer">Tokenomics</Link>
                    </li>

                    <li>
                      <Link to="buy" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#A5A8B9] hover:text-[#40FE5B] font-inter duration-300 uppercase cursor-pointer">How to buy</Link>
                    </li>

                    <li>
                      <Link to="roadmap" smooth={true} offset={-30} duration={600} className="2xl:text-[18px] text-[#A5A8B9] hover:text-[#40FE5B] font-inter duration-300 uppercase cursor-pointer">Roadmap</Link>
                    </li>
                  </ul>
                </div>

                {/* Action button */}
                <div className='flex items-center'>
                  <a href="" className='text-white mr-4'>
                    <div className='bg-[#02B81C] hover:bg-[#349e44] p-2 xl:p-4 rounded-[8px] duration-300'>
                      <PiTelegramLogoThin className='text-[25px]' />
                    </div>
                  </a>

                  <a href="" className='text-white'>
                    <div className='bg-[#02B81C] hover:bg-[#349e44] p-2 xl:p-4 rounded-[8px] duration-300'>
                      <FaXTwitter className='text-[25px]' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className='mt-[3px] xl:mt-[17px] 2xl:mt-[54px]'>
            <p className='text-[#fff] text-center font-inter'>©{new Date().getFullYear()} All Rights reserved to $SAT Token</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
