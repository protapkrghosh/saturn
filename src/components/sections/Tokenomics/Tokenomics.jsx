import React from 'react';
import Container from '../Container/Container';
import tokenRound from '@/assets/Tokenomics/Group 1000003459.png';
import earth from '@/assets/Tokenomics/image_197-removebg-preview (1) 2.png';
import tokenIcon1 from '@/assets/Tokenomics/Group 1000003460.png';

const Tokenomics = () => {
  return (
    <>
      <Container>
        <div className='flex relative'>
          {/* imges section  */}
          <div className='w-[50%]'>
            <img src={tokenRound} alt="" />
            <img className='absolute 2xl:top-[302px] xl:top-[245px] lg:top-[180px] 2xl:left-[270px] xl:left-[215px] lg:left-[150px]' src={earth} alt="" />
          </div>
          {/* catagory section  */}
          <div className='w-[50%]'>
            <p className='text-[#FFF] font-inter text-[58px] font-bold uppercase'>Tokenomics</p>
            {/* all catagory section  */}
            {/* catagory 1  */}
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div>
                  <img src={tokenIcon1} alt="imges" />
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