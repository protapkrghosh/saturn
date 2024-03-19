import Banner from '@/components/sections/Banner/Banner';
import TheSatToken from '@/components/sections/TheSatToken/TheSatToken';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import React from 'react';

const Home = () => {
  return (
    <>
      <Banner />
      <TheSatToken />
      <Tokenomics />
    </>
  );
};

export default Home;