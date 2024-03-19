import React from 'react';
import Container from '../Container/Container';
import TheSatTokenImg from '@/assets/theSatToken/Group 1000003510.png'
import { IoCheckmarkCircle } from "react-icons/io5";

const TheSatToken = () => {
  return (
    <>
      <Container>
        <div>
          {/* THE SAT Token images  */}
          <div>
            <img src={TheSatTokenImg} alt="" />
          </div>
          {/* THE SAT Token discription  */}
          <div>
            <p className='text-[#FFF] font-inter text-[58px] font-bold leading-[75.4px] '>THE <span className='text-[#40FE5B]'>SAT</span> Token</p>
            <div className='flex items-center gap-4'>
              <div><IoCheckmarkCircle className='text-[#40FE5B]' /></div>
              <div><p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>In the heart of Springfield, where Lisa's wisdom met Homer's folly,</p></div>
            </div>
            <div className='flex items-center gap-4'>
              <div><IoCheckmarkCircle className='text-[#40FE5B]' /></div>
              <div><p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>$SAT token emerged, a crypto saga so jolly.</p></div>
            </div>
            <div className='flex items-center gap-4'>
              <div><IoCheckmarkCircle className='text-[#40FE5B]' /></div>
              <div><p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>A nod to Sat Simpson's mischief, it was born with a grin,</p></div>
            </div>
            <div className='flex items-center gap-4'>
              <div><IoCheckmarkCircle className='text-[#40FE5B]' /></div>
              <div><p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>For a playful, decentralized world, where the fun would begin</p></div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TheSatToken;