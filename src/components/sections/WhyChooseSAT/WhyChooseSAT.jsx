import React from 'react';
import Container from '../Container/Container';
import whyChooseImg from '@/assets/whyChooseSAT/Group480.png'
import whyChooseGlobeImg from '@/assets/whyChooseSAT/image197.png'
import whyChooseIcon1 from '@/assets/whyChooseSAT/Group2.png'
import whyChooseIcon2 from '@/assets/whyChooseSAT/Black.png'
import symbols from '@/assets/banner/symbols.png'
import globe from '@/assets/hodI/Group.png'
import line from '@/assets/hodI/Rectangle9.png'
import { Button } from '@/components/ui/button';

const WhyChooseSAT = () => {
  return (
    <div className='pt-[189px] relative overflow-hidden'>
      <div className='whyChooseSAT w-[400px] h-[1000px] absolute -top-52 -left-52 ' />
      <Container>
        {/* chooes sat  */}
        <div className='lg:flex gap-[50px]'>
          {/*  why choose sat  */}
          <div className='p-[1px] bg-gradient-to-b from-[#074933] to-[#03131010] rounded-[15px] lg:w-1/2 mb-16 lg:mb-0'>
            <div className='bg-gradient-to-b from-[#091618] to-[#030e0a11] rounded-[15px] pt-[70px]'>
              <div className='relative'>
                <p className='text-[#FFF] font-inter text-[60px] lg:text-[44px] xl:text-[55px] 2xl:text-[60px] font-bold text-center'>Why Choose <span className='text-[#40FE5B]'>$SAT</span></p>
                <img className='mt-[130px] 2xl:w-[70%] xl:w-[475px] lg:w-[380px] md:w-[70%] w-[85%] mx-auto 2xl:scale-125' src={whyChooseImg} alt="Image" />

                <img className='absolute 2xl:w-auto xl:w-[220px] lg:w-[155px] md:w-[200px] w-[150px] 2xl:top-[320px] xl:top-[330px] lg:top-[300px] md:top-[340px] top-[390px] 2xl:left-[215px] xl:left-[163px] lg:left-[135px] md:left-[240px] left-[115px] animate-spin duration-2000' src={whyChooseGlobeImg} alt="Image" />
              </div>
            </div>
          </div>

          {/* why choose two part  */}
          <div className='lg:w-1/2'>
            <div className='bg-[#06201bab] border border-[#074933] rounded-[15px] mb-[50px]'>
              <div className='max-w-[518px] pl-[40px] pt-[40px] pb-[46px]'>
                <img className='mb-6' src={whyChooseIcon1} alt="" />
                <p className='mb-4 text-[#FFF] font-inter text-[25px] font-bold'>Solana's Speed</p>
                <p className='text-[#FFF] font-inter text-[18px]'>Take advantage of Solana's rapid transaction speed as $SAT ensures swift and seamless transactions.</p>
              </div>
            </div>

            <div className='bg-[#06201b70] border border-[#074933] rounded-[15px] mt-16 lg:mt-0'>
              <div className='max-w-[516px] pl-[40px] pt-[40px] pb-[44px]'>
                <img className='mb-6' src={whyChooseIcon2} alt="" />
                <p className='mb-4 text-[#FFF] font-inter text-[25px] font-bold'>Community-Focused</p>
                <p className='text-[#FFF] font-inter text-[18px]'>More than a simple coin, $SAT thrives on community engagement. Join us as we create a dynamic space for $SAT enthusiasts.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Shadow */}
      <div className='w-40 h-[350px] md:h-[450px] lg:h-[650px] chooseShadow absolute bottom-72 right-0' />

      {/* Hodl Section */}
      <div className='overflow-hidden mt-44'>
        <Container>
          <img src={line} alt="Image" className='mb-9 w-full mx-auto' />
        </Container>

        <div style={{ backgroundImage: `url(${globe})` }} className='bg-no-repeat bg-center relative'>
          {/* Shadow */}
          <div className='w-[280px] lg:w-[500px] h-[180px] lg:h-[250px]  absolute left-[30%] md:bottom-16 lg:bottom-auto' />

          <div className='text-center font-inter'>
            <h1 className='text-[#fff] text-[60px] font-bold uppercase'>Hodl</h1>
            <p className='text-[#FCFCFC] text-[18px] font-normal py-10 md:w-[90%] xl:w-[70%] 2xl:w-[57%] mx-auto'>With $SAT, the market is not just bullish; it's downright howlish. Forget traditional charts; we're trading in memes and laughs. Join us as we transform the financial landscape into a comic strip, and let's howl all.</p>

            <div className='flex justify-center'>
              <Button className="text-[#fff] bg-[#02B81C] rounded-[8px] group cursor-pointer px-12 py-[27px]">
                <span className="flex justify-center items-center">
                  <p className='text-[18px] 2xl:text-[19px] font-inter font-normal uppercase mr-2'>Buy now</p>
                  <img src={symbols} alt="Image" className='w-[27px] 2xl:w-[28px] group-hover:-mt-2  duration-300' />
                </span>
              </Button>
            </div>
          </div>

          <Container>
            <img src={line} alt="Image" className='pt-14 w-full mx-auto' />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSAT;