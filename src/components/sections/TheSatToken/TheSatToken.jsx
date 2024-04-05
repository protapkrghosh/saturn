import Container from '../Container/Container';
import TheSatTokenImg from '@/assets/theSatToken/Group 1000003510.png'
import { FaCheck } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const TheSatToken = () => {
  return (
    <div id='SatToken'>
      <Container>
        <div className='2xl:flex xl:flex lg:flex md:flex-none justify-center items-center 2xl:gap-20 xl:gap-20 lg:gap-16 relative 2xl:-ml-40'>
          {/*  THE SAT Token images  */}
          <div className='xl:-ml-16 xl:mr-20'>
            <img className='2xl:w-full lg:w-[85%]' src={TheSatTokenImg} alt="Image" />
          </div>

          {/* THE SAT Token discription  */}
          <div className='mt-20 lg:mt-0'>
            <p className='text-[#FFF] font-inter text-[51px] 2xl:text-[58px] font-bold leading-[75.4px] mb-[40px]'>The <span className='text-[#40FE5B]'>$SAT</span> Token</p>

            <div className='flex items-center gap-4 mb-[20px]'>
              <div className='bg-[#40FE5B] p-[3px] rounded-full'>
                <FaCheck className='text-white text-[14px]' />
              </div>
              <p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>Real utility-focused token</p>
            </div>

            <div className='flex items-center gap-4 mb-[20px]'>
              <div className='bg-[#40FE5B] p-[3px] rounded-full lg:-mt-6 xl:mt-0'>
                <FaCheck className='text-white text-[14px]' />
              </div>
              <p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>Holders decide everything via voting</p>
            </div>

            <div className='flex items-center gap-4 mb-[20px]'>
              <div className='bg-[#40FE5B] p-[3px] rounded-full'>
                <FaCheck className='text-white text-[14px]' />
              </div>
              <p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>Weekly raffles and giveaways</p>
            </div>

            <div className='flex items-center gap-4 mb-[50px]'>
              <div className='bg-[#40FE5B] p-[3px] rounded-full'>
                <FaCheck className='text-white text-[14px]' />
              </div>
              <p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>Launching staking very soon</p>
            </div>

            <Link to="home" smooth={true} offset={-30} duration={600}>
              <Button className="bg-[#02b81c4d] uppercase text-[16px] font-inter font-normal">Buy Now</Button>
            </Link>
          </div>

          {/* Shadow */}
          <div className='w-[300px] md:w-[500px] lg:w-[400px] xl:w-[700px] 2xl:w-[800px] h-[300px] 2xl:h-[400px] theSatShadow absolute left-10 bottom-[500px] md:bottom-96 lg:bottom-10 xl:bottom-0' />
        </div>
      </Container>
    </div>
  );
};

export default TheSatToken;