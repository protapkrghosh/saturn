import Container from '@/components/sections/Container/Container';
import circleImg from '@/assets/footer/Group21.png';
import pathImg from '@/assets/aboutToken/group.png';

const Footer = () => {
  return (
    <div>
      <div className='relative'>
        {/* <div style={{ backgroundImage: `url(${pathImg})` }} className='w-[429px] h-[260px] absolute bottom-36' /> */}

        <img src={circleImg} alt="Image" className='mx-auto' />
        <p className='text-[#FFF] text-[50px] 2xl:text-[55px] font-inter font-semibold uppercase -mt-[500px] 2xl:-mt-[550px] text-center xl:w-[64%] 2xl:w-[50%] mx-auto'>JOIN SAT AND LETS BARK OUR  WAY TO CRYPTO STARDOM  TOGETHER!</p>
      </div>
    </div>
  );
};

export default Footer;
