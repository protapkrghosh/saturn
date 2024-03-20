import AboutToken from '@/components/sections/AboutToken/AboutToken';
import Banner from '@/components/sections/Banner/Banner';
import BuySat from '@/components/sections/BuySat/BuySat';
import Hodi from '@/components/sections/Hodi/Hodi';
import NewUnlites from '@/components/sections/NewUnlites/NewUnlites';
import Roadmap from '@/components/sections/Roadmap/Roadmap';
import TheSatToken from '@/components/sections/TheSatToken/TheSatToken';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import WhyChooseSAT from '@/components/sections/WhyChooseSAT/WhyChooseSAT';
import React from 'react';

const Home = () => {
  return (
    <>
      <Banner />
      <TheSatToken />
      <AboutToken />
      <Tokenomics />
      <BuySat />
      <Roadmap />
      <WhyChooseSAT />
      <Hodi />
      <NewUnlites />
    </>
  );
};

export default Home;