import React from 'react';
import Container from '../Container/Container';
import tokenRound from '@/assets/Tokenomics/Group 1000003459.png';
import earth from '@/assets/Tokenomics/image_197-removebg-preview (1) 2.png';
import tokenIcon1 from '@/assets/Tokenomics/Group 1000003460.png';
import tokenIcon2 from '@/assets/Tokenomics/Group 1000003461.png';
import tokenIcon3 from '@/assets/Tokenomics/Group 1000003462.png';
import tokenIcon4 from '@/assets/Tokenomics/Group 1000003463.png';
import tokenIcon5 from '@/assets/Tokenomics/Group 1000003464.png';

const Tokenomics = () => {
  return (
    <div className='overflow-hidden py-[130px]'>
      <Container>
        <div className='lg:flex relative'>
          {/* Shadow */}
          <div className="w-[300px] xl:w-[500px] 2xl:w-[800px] h-[300px] tokenomicsShoadow absolute top-[-400px] left-32" />
          {/* imges section  */}
          <div className='lg:w-[50%] md:w-[80%]'>
            <img className='lg:-ml-24 md:ml-20 animate-spin duration-2000' src={tokenRound} alt="image" />
            <img className='absolute animate-spin duration-2000 2xl:top-[300px] xl:top-[245px] lg:top-[192px] md:top-[235px] top-[168px] 2xl:left-[175px] xl:left-[120px] lg:left-[80px] md:left-[290px] left-[150px] xl:w-auto lg:w-24 md:w-32 w-[98px]' src={earth} alt="" />
          </div>
          {/* catagory section  */}
          <div className='lg:w-[50%]'>
            <p className='text-[#FFF] font-inter text-[58px] font-bold uppercase'>Tokenomics</p>
            {/* all catagory section  */}
            {/* catagory 1  */}
            <div className='flex justify-between items-center mb-8'>
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
            <div className='flex justify-between items-center mb-8'>
              <div className='flex items-center gap-2'>
                <div>
                  <img src={tokenIcon2} alt="imges" />
                </div>
                <div>
                  <p className='text-[#FFF] font-inter text-[25px] font-bold'>Presale</p>
                  <p className='text-[#FFF] font-inter text-[15px]'>30 billion $BART</p>
                </div>
              </div>
              <div>
                <p className='text-[#FFF] font-inter text-[25px] '>30 %</p>
              </div>
            </div>
            <div className='flex justify-between items-center mb-8'>
              <div className='flex items-center gap-2'>
                <div>
                  <img src={tokenIcon3} alt="imges" />
                </div>
                <div>
                  <p className='text-[#FFF] font-inter text-[25px] font-bold'>Future development</p>
                  <p className='text-[#FFF] font-inter text-[15px]'>20 billion $BART</p>
                </div>
              </div>
              <div>
                <p className='text-[#FFF] font-inter text-[25px] '>20 %</p>
              </div>
            </div>
            <div className='flex justify-between items-center mb-8'>
              <div className='flex items-center gap-2'>
                <div>
                  <img src={tokenIcon4} alt="imges" />
                </div>
                <div>
                  <p className='text-[#FFF] font-inter text-[25px] font-bold'>Staking  rewards</p>
                  <p className='text-[#FFF] font-inter text-[15px]'>10 billion $BART</p>
                </div>
              </div>
              <div>
                <p className='text-[#FFF] font-inter text-[25px] '>10 %</p>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div>
                  <img src={tokenIcon5} alt="imges" />
                </div>
                <div>
                  <p className='text-[#FFF] font-inter text-[25px] font-bold'>Team</p>
                  <p className='text-[#FFF] font-inter text-[15px]'>5 billion $BART</p>
                </div>
              </div>
              <div>
                <p className='text-[#FFF] font-inter text-[25px] '>5 %</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;