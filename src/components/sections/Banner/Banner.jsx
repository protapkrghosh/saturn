import progressImg1 from '@/assets/banner/Group4.png'
import progressImg2 from '@/assets/banner/Group3.png'
import progressImg3 from '@/assets/banner/Group2.png'
import progressImg4 from '@/assets/banner/Group1.png'
import walletImg from '@/assets/banner/solarwallet.png'
import ellipse from '@/assets/banner/Ellipse 2.png'
import arrowImg from "@/assets/banner/arrow.png"
import logoImg from "@/assets/banner/image 197.png"
import pathImg from '@/assets/banner/group.png'
import shapeImg from '@/assets/banner/vector.png'
import moonImg from '@/assets/banner/ellipse464.png'
import symbols from '@/assets/banner/symbols.png'
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'

const Banner = () => {

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-24") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} className="px-[35px] md:px-[49.6px] lg:px-[49.5px] xl:px-[48px] 2xl:px-[48px]">
        <span className="font-bold text-[21px] md:text-[22px]">
          {timeLeft[interval]}
        </span>{" "}
      </span>
    );
  });

  return (
    <div className='relative overflow-hidden' id='home'>
      {/* Shadow and background */}
      <div className='h-[70vh] md:h-[145vh] 2xl:h-[130vh]'>
        {/* <img src={moonImg} alt="Image" className='absolute top-0 -mt-20 w-full' /> */}
        <div className='pathShadow xl:w-[400px] 2xl:w-[450px] xl:h-[400px] 2xl:h-[450px] absolute blur-[250px] 2xl:blur-[300px]' />
        <img src={shapeImg} alt="Image" className='absolute top-0 left-0 w-full' />
        <img src={pathImg} alt="Image" className='opacity-[0.06] absolute top-0 left-0' />
      </div>

      <div className='absolute top-20 md:top-32 lg:top-16 w-full'>
        <Container>
          <div className='lg:flex justify-between items-center'>
            <div className='lg:w-1/2'>
              <h1 className='text-[80px] md:text-[86px] lg:text-[90px] xl:text-[117px] 2xl:text-[130px] text-white text-start font-bebasNeue font-normal tracking-wider lg:leading-[95px] xl:leading-[130px] 2xl:leading-[130px] uppercase'>BETTER THAN <span className='text-[#40FE5B]'>JUPITER</span></h1>

              <p className='text-[18px] text-white font-inter text-start lg:w-[90%] xl:w-[80%] 2xl:w-[85%] lg:mt-7 mb-12'>In the digital realm of innovation and efficiency, $SAT lights the path to a brighter future. It fuels progress in the world of utility tokens.</p>

              <div className='flex justify-start'>
                <a href="https://solanapad.io/launchpad-list/CWpPGn2KU7DJmHrh4kJtwVDWTfPAYmAm4PG3Zmd6uroc" target="_blank">
                  <Button className="text-[#fff] bg-[#02B81C] rounded-[8px] group cursor-pointer px-12 py-[27px]">
                    <span className="flex justify-center items-center">
                      <p className='text-[18px] 2xl:text-[19px] font-inter font-normal uppercase mr-2'>Buy now</p>
                      <img src={symbols} alt="Image" className='w-[27px] 2xl:w-[28px] group-hover:-mt-2  duration-300' />
                    </span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Presale ends in card section */}
            <div className='lg:w-1/2 xl:-mr-5 2xl:-mr-24'>
              {/* Progress card */}
              <div className='max-w-[528px] mx-auto'>
                <div className='bg-[#0b3d22] border border-[#3c654e] rounded-[15px] backdrop-blur-[18px] pt-4 pb-6'>
                  <p className='text-[34px] text-center text-white font-normal font-bebasNeue uppercase tracking-widest'>PRESALE ENDS IN</p>

                  {/* Dynamic Timer */}
                  <div className='relative'>
                    <div className='text-[#F5F6F7] flex justify-center absolute top-4 left-[-5px] md:left-5 lg:left-[-20px] xl:left-5'>
                      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                    </div>

                    <div className='flex justify-center gap-x-2 md:gap-x-8 mt-5'>
                      <div className='relative'>
                        <img src={progressImg1} alt="Image" className='w-[87px]' />
                        <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-7 leading-5'>
                          <p className='text-[14px] mt-5'>Days</p>
                        </div>
                      </div>

                      <div className='relative'>
                        <img src={progressImg2} alt="Image" className='w-[87px]' />
                        <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-[25px] leading-5'>
                          <p className='text-[14px] mt-5'>Hours</p>
                        </div>
                      </div>

                      <div className='relative'>
                        <img src={progressImg3} alt="Image" className='w-[87px]' />
                        <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-7 leading-5'>
                          <p className='text-[14px] mt-[21px] md:ml-1'>Min</p>
                        </div>
                      </div>

                      <div className='relative'>
                        <img src={progressImg4} alt="Image" className='w-[87px]' />
                        <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-7 leading-5'>
                          <p className='text-[14px] mt-5 md:ml-[5px]'>Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className='mt-5'>
                  <div className='bg-[#0b3d22] border border-[#3c654e] rounded-[15px] backdrop-blur-[18px] px-6 py-5'>
                    <div className='space-y-2'>
                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Token Name:</p>
                        <p className='text-[#4AE260] font-semibold uppercase'>SAT</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Presale Price:</p>
                        <p className='text-[#4AE260] font-semibold uppercase'>0.00001</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Launch Price:</p>
                        <p className='text-[#4AE260] font-semibold uppercase'>0.00003</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Presale Bonus:</p>
                        <p className='text-[#4AE260] font-semibold uppercase'>15%</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Max Buy:</p>
                        <p className='text-[#4AE260] font-semibold uppercase'>25 SOL</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Min Buy:</p>
                        <p className='text-[#4AE260] font-semibold uppercase'>0.5 SOL</p>
                      </div>
                    </div>

                    {/* Presale sold */}
                    <div className='border border-[#3a6c4d] rounded-[8px] mt-3'>
                      <div className='bg-[#094720] rounded-[8px] px-3 pt-1 pb-2'>
                        <div className='flex justify-between items-center'>
                          <p className='text-white'>Presale sold</p>
                          <p className='text-[#4AE260]' >0%</p>
                        </div>

                        <Slider defaultValue={[50]} max={100} step={5} className="my-3 cursor-pointer" />
                        {/* <div className='h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-[70px] mt-[6px]' /> */}
                      </div>
                    </div>

                    <div className='flex justify-between mt-6 mb-3'>
                      <p className='text-white font-normal'>Amount in SOL you pay:</p>
                      <div className='flex items-center'>
                        <img src={walletImg} alt="Image" />
                        <p className='text-white font-normal ml-1'>0.00 SOL</p>
                      </div>
                    </div>

                    {/* SOL Input */}
                    <div className='relative'>
                      <div className='flex items-center absolute mt-[4.6px] border border-[#3e755152] bg-[#0e5326] px-5 py-1 ml-2 rounded-[8px]'>
                        <img src={ellipse} alt="Image" className='w-[32px]' />
                        <p className='text-white font-normal ml-2 uppercase'>SOL</p>
                      </div>

                      <div className='border border-[#3a6c4d] rounded-[8px]'>
                        <Input placeholder="0" className="text-white placeholder:text-white text-end border-none bg-[#094720] rounded-[8px]" />
                      </div>
                    </div>

                    {/* custom range button */}
                    <div className='relative my-7'>
                      <div className='h-[3px] bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-[70px] mt-[6px]' />

                      <div>
                        <button className="bg-gradient-to-l from-[#48aa8d] to-[#48aa8d] rounded-full w-[34px] h-[34px] absolute -top-[16px] left-[47%]"></button>
                        <img src={arrowImg} alt="Image" className='absolute top-[-7px] left-[50.4%] md:left-[49.3%] cursor-pointer' />
                      </div>
                    </div>

                    {/* kebapp Input */}
                    <div>
                      <p className='text-white font-normal mb-2'>Amount in SAT you receive:</p>

                      <div className='relative'>
                        <div className='flex items-center absolute mt-[4.4px] bg-[#154438] px-5 py-1 ml-2 rounded-[8px]'>
                          <img src={logoImg} alt="Image" className='w-[32px]' />
                          <p className='text-white font-normal ml-2 uppercase'>Sat</p>
                        </div>

                        <div className='border border-[#3a6c4d] rounded-[8px]'>
                          <Input placeholder="0" className="text-white placeholder:text-white text-end border-none bg-[#094720] rounded-[8px]" />
                        </div>
                      </div>
                    </div>

                    {/* Connect Wallet */}
                    <Button className="w-full bg-[#02B81C] ] border border-[#40FE5B] text-[18px] rounded-[10px] px-12 py-6 mt-6">Connect Wallet</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
