import progressImg1 from '@/assets/banner/Group4.png'
import progressImg2 from '@/assets/banner/Group3.png'
import progressImg3 from '@/assets/banner/Group2.png'
import progressImg4 from '@/assets/banner/Group1.png'
import walletImg from '@/assets/banner/solarwallet.png'
import ellipse from '@/assets/banner/Ellipse 2.png'
import arrowImg from "@/assets/banner/Group 10.png"
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
import { Progress } from "@/components/ui/progress"
import { Link } from 'react-scroll'

const Banner = () => {
  // Input logo change 
  const [open, setOpen] = useState(true);

  // Dynamic timer
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-08") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    // Pad numbers with leading zeros
    Object.keys(timeLeft).forEach(interval => {
      timeLeft[interval] = timeLeft[interval].toString().padStart(2, '0');
    });

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
      <span key={interval} className="relative md:ml-2 mt-6 md:mt-9 mb-8 md:mb-9">
        <span className="border border-[#3a6d4d] bg-[#094820] px-4 py-3 mx-3 font-bold text-lg md:text-[32px] rounded-[8px]">
          {timeLeft[interval]}
        </span>{" "}

        {/* <span className="text-white text-[13px] md:text-[16px] uppercase absolute top-10 left-[16px] md:left-[22px] mt-[10px] md:mt-[15px]">
          {interval.slice(0, interval.length - 1)}
        </span>{" "} */}
      </span>
    );
  });


  // // Condition value for SOL input fields
  // useEffect(() => {
  //   const solInput = document.getElementById('myInput');
  //   const satInput = document.getElementById('satInput');

  //   const handleChange = () => {
  //     let solValue = parseFloat(solInput.value);

  //     if (isNaN(solValue) || solValue < 0.5) {
  //       // solInput.value = '0.5';
  //       solValue = 0.5;
  //     }

  //     // Calculate SAT value and update SAT input field
  //     let satValue = solValue / 100;
  //     satInput.value = isNaN(satValue) ? '0' : satValue.toFixed(2);
  //   };

  //   if (solInput) {
  //     solInput.addEventListener('input', handleChange); // Change event replaced with input event
  //   }

  //   return () => {
  //     if (solInput) {
  //       solInput.removeEventListener('input', handleChange); // Change event replaced with input event
  //     }
  //   };
  // }, []);


  useEffect(() => {
    const solInput = document.getElementById('myInput');
    const satInput = document.getElementById('satInput');

    const handleChange = () => {
      let solValue = parseFloat(solInput.value);

      if (isNaN(solValue) || solValue < 0.5) {
        solValue = 0.5;
      }

      // Calculate SAT value and update SAT input field
      let satValue = solValue / 0.0001;
      satInput.value = isNaN(satValue) ? '0' : satValue.toFixed(0);
    };

    const handleBlur = () => {
      let solValue = parseFloat(solInput.value);

      if (isNaN(solValue) || solValue < 0.5) {
        solInput.value = '0.5';
      }
    };

    if (solInput) {
      solInput.addEventListener('input', handleChange);
      solInput.addEventListener('blur', handleBlur);
    }

    return () => {
      if (solInput) {
        solInput.removeEventListener('input', handleChange);
        solInput.removeEventListener('blur', handleBlur);
      }
    };
  }, []);


  return (
    <div className='relative overflow-hidden' id='home'>
      {/* Shadow and background */}
      <div className='h-[175vh] md:h-[265vh] lg:h-[185vh] xl:h-[160vh] 2xl:h-[130vh]'>
        {/* <img src={moonImg} alt="Image" className='absolute top-0 -mt-20 w-full' /> */}
        <div className='pathShadow xl:w-[400px] 2xl:w-[450px] xl:h-[400px] 2xl:h-[450px] absolute blur-[250px] 2xl:blur-[300px]' />
        <img src={shapeImg} alt="Image" className='absolute top-0 left-0 w-full' />
        <img src={pathImg} alt="Image" className='opacity-[0.06] absolute top-0 left-0' />
      </div>

      <div className='absolute top-12 md:top-32 lg:top-16 w-full'>
        <Container>
          <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
            <div className='lg:w-1/2 mt-24 lg:mt-0'>
              <h1 className='text-[76px] md:text-[86px] lg:text-[90px] xl:text-[117px] 2xl:text-[130px] text-white text-center lg:text-start font-bebasNeue font-normal tracking-wider leading-[95px] md:leading-[130px] lg:leading-[95px] xl:leading-[130px] 2xl:leading-[130px] uppercase'>BETTER THAN <span className='text-[#40FE5B]'>JUPITER</span></h1>

              <p className='md:text-[18px] text-white font-inter text-center lg:text-start lg:w-[90%] xl:w-[80%] 2xl:w-[85%] mt-7 mb-12'>In the digital realm of innovation and efficiency, $SAT lights the path to a brighter future. It fuels progress in the world of utility tokens.</p>

              <div className='flex justify-center lg:justify-start'>
                <Link to="home" smooth={true} offset={-30} duration={600}>
                  <Button className="text-[#fff] bg-[#02B81C] rounded-[8px] group cursor-pointer px-12 py-[27px]">
                    <span className="flex justify-center items-center">
                      <p className='text-[18px] 2xl:text-[19px] font-inter font-normal uppercase mr-2'>Buy now</p>
                      <img src={symbols} alt="Image" className='w-[27px] 2xl:w-[28px] group-hover:-mt-2  duration-300' />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Presale ends in card section */}
            <div className='w-full lg:w-1/2 xl:-mr-5 2xl:-mr-24'>
              {/* Progress card */}
              <div className='max-w-[528px] mx-auto'>

                {/* Counter timer */}
                {
                  timerComponents.length ? (
                    <div className='bg-[#0b3d22] border border-[#3c654e] rounded-[15px] backdrop-blur-[18px] pt-4 pb-6'>
                      <p className='text-[34px] text-center text-white font-normal font-bebasNeue uppercase tracking-widest'>PRESALE ENDS IN</p>

                      {/* Dynamic Timer */}
                      <div className='relative'>
                        <div className='text-[#F5F6F7] flex justify-center'>
                          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                        </div>

                        {/* <div className='flex justify-center gap-x-2 md:gap-x-8 mt-5'>
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
                    </div> */}

                        <div className='relative'>
                          <div className='text-white uppercase text-[12px] md:text-[15px] flex justify-center gap-x-7 md:gap-x-[45px] absolute -top-2 left-[82px] md:left-[139px] lg:left-[100px] xl:left-[139px]'>
                            <p>Hours</p>
                            <p>Minutes</p>
                            <p>seconds</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : ('')
                }



                {/* Content Card */}
                <div className='mt-5'>
                  <div className='bg-gradient-to-b from-[#0a3c21] to-[#0d3825] border border-[#3c654e] rounded-[15px] backdrop-blur-[18px] px-6 py-5'>
                    <div className='space-y-2'>
                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Token Name:</p>
                        <p className='text-[#4AE260] font-semibold uppercase'>SAT</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Presale Price:</p>
                        <p className='text-[#4AE260] font-semibold uppercase'>$0.0001</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Launch Price:</p>
                        <p className='text-[#4AE260] font-semibold uppercase'>$0.0003</p>
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
                          <p className='text-[#4AE260] font-semibold' >87%</p>
                        </div>

                        {/* <Slider defaultValue={[50]} max={100} step={5} className="my-3 cursor-pointer" /> */}
                        <Progress value={87} className="mt-1" />
                      </div>
                    </div>

                    <div className='flex justify-between mt-6 mb-3'>
                      <p className='text-white font-normal'>Amount in SOL you pay:</p>
                      {/* <div className='flex items-center'>
                        <img src={walletImg} alt="Image" />
                        <p className='text-white font-normal ml-1'>0.00 SOL</p>
                      </div> */}
                    </div>

                    {/* SOL Input */}
                    <div className='relative'>
                      {
                        open ? (
                          <div className='flex items-center absolute mt-[3px] border border-[#3e755152] bg-[#0e5326] px-4 py-1 ml-2 rounded-[8px]'>
                            <img src={ellipse} alt="Image" className='w-[32px]' />
                            <p className='text-white font-normal ml-2 uppercase'>SOL</p>
                          </div>
                        ) : (
                          <div className='flex items-center absolute mt-[3px] border border-[#3e755152] bg-[#0e5326] px-4 py-1 ml-2 rounded-[8px]'>
                            <img src={logoImg} alt="Image" className='w-[32px]' />
                            <p className='text-white font-normal ml-2 uppercase'>Sat</p>
                          </div>
                        )
                      }

                      {/* SOL input filed */}
                      <div className='border border-[#3a6c4d] rounded-[8px]'>
                        <Input id="myInput" placeholder="0.00" className="text-white placeholder:text-white placeholder:text-opacity-65 text-end border-none bg-[#094720] rounded-[8px]" />
                      </div>
                    </div>

                    {/* custom range button */}
                    <div className='relative mt-7 mb-2'>
                      <div className='h-[3px] bg-[#49AB8D] rounded-[70px] mt-[6px]' />

                      <div>
                        <button className='cursor-default'>
                          <img src={arrowImg} alt="Image" className='w-[35px] absolute top-[-16px] left-[45%] md:left-[47%]' />
                        </button>
                      </div>
                    </div>

                    {/* SAT Input filed */}
                    <div>
                      <p className='text-white font-normal mb-2'>Amount in SAT you receive:</p>

                      <div className='relative'>
                        {
                          open ? (
                            <div className='flex items-center absolute mt-[4.4px] border border-[#3e755152] bg-[#0e5326] px-4 py-1 ml-2 rounded-[8px]'>
                              <img src={logoImg} alt="Image" className='w-[32px]' />
                              <p className='text-white font-normal ml-2 uppercase'>Sat</p>
                            </div>
                          ) : (
                            <div className='flex items-center absolute mt-[4.4px] border border-[#3e755152] bg-[#0e5326] px-4 py-1 ml-2 rounded-[8px]'>
                              <img src={ellipse} alt="Image" className='w-[32px]' />
                              <p className='text-white font-normal ml-2 uppercase'>SOL</p>
                            </div>
                          )
                        }

                        {/* SAT input filed */}
                        <div className='border border-[#3c674d] rounded-[8px]'>
                          <Input id="satInput" readOnly className="text-white placeholder:text-white text-end border-none bg-[#0a4221] rounded-[8px]" />
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
