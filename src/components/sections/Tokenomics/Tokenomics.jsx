import React from 'react';
import Container from '../Container/Container';
import tokenomicsImg from '@/assets/Tokenomics/Group 1000003458.png';
import tokenomicsImg1 from '@/assets/Tokenomics/image 198.png';
import tokenomicsImg2 from '@/assets/Tokenomics/image_197-removebg-preview (1) 2.png';

const Tokenomics = () => {
  return (
    <>
      <Container>
        <div>
          <div className='relative'>
            <img src={tokenomicsImg} alt="" />
            <img className='w-[15.5%] absolute top-[238px] left-[237px]' src={tokenomicsImg1} alt="" />
            <img className='absolute top-[302px] left-[270px]' src={tokenomicsImg2} alt="" />
          </div>
          <div></div>
        </div>

      </Container>
    </>
  );
};

export default Tokenomics;