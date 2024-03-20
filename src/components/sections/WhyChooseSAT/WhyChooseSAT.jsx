import React from 'react';
import Container from '../Container/Container';
import whyChooseImg from '@/assets/whyChooseSAT/Group_1000003467.png'
import whyChooseIcon from '@/assets/whyChooseSAT/image_197-removebg-preview (1) 1.png'
import whyChooseIcon1 from '@/assets/whyChooseSAT/image 205.png'
import whyChooseIcon2 from '@/assets/whyChooseSAT/Black.png'

const WhyChooseSAT = () => {
  return (
    <div className='pt-[189px] pb-[216px]'>
      <Container>
        {/* chooes sat  */}
        <div className='flex gap-[50px]'>
          {/* why choose sat  */}
          <div className='bg-[#06201bab] border border-[#074933] rounded-[15px] w-1/2'>
            <div className='relative'>
              <p className='text-[#FFF] font-inter text-[60px] font-bold mt-[80px] ml-20'>Why Choose <span className='text-[#40FE5B]'>SAT</span></p>
              <img className='mt-[114px] ml-10' src={whyChooseImg} alt="" />
              <img className='absolute 2xl:top-[345px] 2xl:left-[205px]' src={whyChooseIcon} alt="" />
            </div>
          </div>
          {/* why choose two part  */}
          <div className='w-1/2'>
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