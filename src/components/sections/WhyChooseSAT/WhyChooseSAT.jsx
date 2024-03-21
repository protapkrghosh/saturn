import React from 'react';
import Container from '../Container/Container';
import whyChooseImg from '@/assets/whyChooseSAT/Group80.png'
import whyChooseIcon1 from '@/assets/whyChooseSAT/Group2.png'
import whyChooseIcon2 from '@/assets/whyChooseSAT/Black.png'

const WhyChooseSAT = () => {
  return (
    <div className='pt-[189px] pb-[216px] relative overflow-hidden'>
      <div className='whyChooseSAT w-[400px] h-[1000px] absolute -top-52 -left-52 ' />
      <Container>
        {/* chooes sat  */}
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-[50px]'>
          {/*  why choose sat  */}
          <div className='bg-[#06201b10] border border-[#074933] border-b-0 rounded-[15px] rounded-b-none'>
            <div className='relative'>
              <p className='text-[#FFF] font-inter text-[60px] font-bold mt-[81px] text-center lg:px-2 mb-20'>Why Choose <span className='text-[#40FE5B]'>$SAT</span></p>
              <img className='mx-auto lg:absolute 2xl:w-[650px] xl:w-[510px] lg:w-[375px] 2xl:top-[170px] xl:top-[265px] lg:top-[415px] 2xl:left-[15px] xl:left-[20px] lg:left-[20px]' src={whyChooseImg} alt="" />

            </div>
          </div>
          {/* why choose two part */}
          <div>
            <div className='bg-[#06201bab] border border-[#074933] rounded-[15px] mb-[30px]'>
              <div className='max-w-[518px] pl-[40px] pt-[40px] pb-[46px]'>
                <img className='mb-6' src={whyChooseIcon1} alt="" />
                <p className='mb-4 text-[#FFF] font-inter text-[25px] font-bold'>Solana's Speed</p>
                <p className='text-[#FFF] font-inter text-[18px]'>Take advantage of Solana's rapid transaction speed as $BART ensures swift and seamless transactions.</p>
              </div>
            </div>
            <div className='bg-[#06201bab] border border-[#074933] rounded-[15px]'>
              <div className='max-w-[488px] pl-[40px] pt-[40px] pb-[44px]'>
                <img className='mb-6' src={whyChooseIcon2} alt="" />
                <p className='mb-4 text-[#FFF] font-inter text-[25px] font-bold'>Community-Focused</p>
                <p className='text-[#FFF] font-inter text-[18px]'>More than a memecoin, $SAT thrives on community
                  engagement. Join us as we create a dynamic space for
                  $BART enthusiasts.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseSAT;