import React from 'react';
import Container from '../Container/Container';
import whyChooseImg from '@/assets/whyChooseSAT/Group 1000003475.png'

const WhyChooseSAT = () => {
  return (
    <div>
      <Container>
        {/* chooes sat  */}
        <div>
          {/* why choose sat  */}
          <div>
            <p className='text-[#FFF] font-inter text-[60px] font-bold'>Why Choose <span className='text-[#40FE5B]'>SAT</span></p>
            <img className='mix-blend-screen w-60' src={whyChooseImg} alt="" />
          </div>
          {/* why choose two part  */}
          <div></div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseSAT;