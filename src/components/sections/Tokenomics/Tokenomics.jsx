import React from 'react';
import Container from '../Container/Container';
import tokenomicsImg from '@/assets/Tokenomics/Group 1000003459.png';
import tokenomicsImg1 from '@/assets/Tokenomics/image_197-removebg-preview (1) 2.png';
import tokenomicsIcon1 from '@/assets/Tokenomics/Group 1000003460.png';

const Tokenomics = () => {
  return (
    <>
      <Container>
        <div className='flex relative'>
          {/* imges section  */}
          <div className='w-[50%]'>
            <img src={tokenomicsImg} alt="" />
            <img className='absolute top-[302px] left-[270px]' src={tokenomicsImg1} alt="" />
          </div>
          {/* catagory section  */}
          <div className='w-[50%]'>
            <p className='text-[#FFF] font-inter text-[58px] font-bold uppercase'>Tokenomics</p>
            {/* all catagory section  */}
            {/* catagory 1  */}
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div>
                  <img src={tokenomicsIcon1} alt="imges" />
                </div>
                <div>
                  <p className='text-[#FFF] font-inter text-[25px] font-bold'>Liquidity  Pool</p>
                  <p className='text-[#FFF] font-inter text-[15px]'>35 billion $BART</p>
                </div>
              </div>
              <div>
                <p className='text-[#FFF] font-inter text-[25px] '>35 %</p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
};

export default Tokenomics;