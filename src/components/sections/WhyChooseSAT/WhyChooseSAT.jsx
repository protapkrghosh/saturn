import React from 'react';
import Container from '../Container/Container';
import whyChooseImg from '@/assets/whyChooseSAT/Group_1000003467.png'
import whyChooseIcon1 from '@/assets/whyChooseSAT/image 205.png'
import whyChooseIcon2 from '@/assets/whyChooseSAT/Black.png'

const WhyChooseSAT = () => {
  return (
    <div>
      <Container>
        {/* chooes sat  */}
        <div>
          {/* why choose sat  */}
          <div>
            <p className='text-[#FFF] font-inter text-[60px] font-bold'>Why Choose <span className='text-[#40FE5B]'>SAT</span></p>
            <img src={whyChooseImg} alt="" />
          </div>
          {/* why choose two part  */}
          <div>
            <div>
              <img className='mb-6' src={whyChooseIcon1} alt="" />
              <p className='mb-4 text-[#FFF] font-inter text-[25px] font-bold'>Solana's Speed</p>
              <p className='text-[#FFF] font-inter text-[18px]'>Take advantage of Solana's rapid transaction speed as $BART ensures swift and seamless transactions.</p>
            </div>
          </div>
          <div>
            <div>
              <img className='mb-6' src={whyChooseIcon2} alt="" />
              <p className='mb-4 text-[#FFF] font-inter text-[25px] font-bold'>Community-Focused</p>
              <p className='text-[#FFF] font-inter text-[18px]'>More than a memecoin, $SAT thrives on community
                engagement. Join us as we create a dynamic space for
                $BART enthusiasts.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseSAT;