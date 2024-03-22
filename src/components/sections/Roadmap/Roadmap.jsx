import React from 'react';
import Container from '../Container/Container';

const Roadmap = () => {
  return (
    <div className='pt-20 pb-28 relative overflow-hidden' id='roadmap'>
      <Container>
        <div>
          <h1 className='text-[#fff] text-[58px] text-center font-inter font-bold capitalize'>Roadmap</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 2xl:gap-x-24 gap-y-20 md:gap-y-0 mt-14 md:mt-20'>
            {/* Phase one */}
            <div>
              <div className='flex items-center -ml-9'>
                <div className='w-20 h-[6px] bg-[#02B81C] rotate-90 rounded-md blur-[1.6px]' />
                <p className='text-white text-[35px] font-inter font-semibold uppercase -ml-3'>phase 1</p>
              </div>

              {/* Card */}
              <div className='text-white xl:text-[17px] 2xl:text-[18px] bg-[#06201bab] border border-[#074933] rounded-[15px] pl-8 py-10 mt-8'>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#82D173] rounded-full mr-3' />
                  <p>Launch on Solana</p>
                </div>
                <div className='flex items-center my-4'>
                  <div className='w-3 h-3 bg-[#82D173] rounded-full mr-3' />
                  <p>Website Landing Page</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#82D173] rounded-full mr-3' />
                  <p>Presale</p>
                </div>
              </div>
            </div>

            {/* Phase Two */}
            <div className='lg:mt-24'>
              <div className='flex items-center -ml-9'>
                <div className='w-20 h-[6px] bg-[#02B81C] rotate-90 rounded-md blur-[1.6px]' />
                <p className='text-white text-[35px] font-inter font-semibold uppercase -ml-3'>phase 2</p>
              </div>

              {/* Card */}
              <div className='text-white xl:text-[17px] 2xl:text-[18px] font-inter bg-[#06201b7c] border border-[#074933] rounded-[15px] pl-8 py-10 mt-8'>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#82D173] rounded-full mr-3' />
                  <p>Public Presale</p>
                </div>
                <div className='flex items-center my-4'>
                  <div className='w-3 h-3 bg-[#82D173] rounded-full mr-3 lg:-mt-5 xl:mt-0' />
                  <p>Dexscreener and Birdseye Update</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#82D173] rounded-full mr-3' />
                  <p>Build Community</p>
                </div>
              </div>
            </div>

            {/* Phase Three */}
            <div className='md:mt-16 lg:mt-0'>
              <div className='flex items-center -ml-9'>
                <div className='w-20 h-[6px] bg-[#02B81C] rotate-90 rounded-md blur-[1.6px]' />
                <p className='text-white text-[35px] font-inter font-semibold uppercase -ml-3'>phase 3</p>
              </div>

              {/* Card */}
              <div className='text-white xl:text-[17px] 2xl:text-[18px] bg-[#06201bab] border border-[#074933] rounded-[15px] pl-8 py-10 mt-8'>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#82D173] rounded-full mr-3' />
                  <p>Trending on X</p>
                </div>
                <div className='flex items-center my-4'>
                  <div className='w-3 h-3 bg-[#82D173] rounded-full mr-3' />
                  <p>CG CMC Listing</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-3 h-3 bg-[#82D173] rounded-full mr-3' />
                  <p>NFT Airdrop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Shadow */}
      <div className='w-[400px] lg:w-[500px] xl:w-[700px] 2xl:w-[1326px] h-[300px] lg:h-[200px] xl:h-[176px] mapShadow absolute md:left-64 xl:left-72 bottom-96 md:bottom-52 lg:bottom-0' />
    </div>
  );
};

export default Roadmap;
