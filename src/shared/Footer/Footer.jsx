import Container from '@/components/sections/Container/Container';
import circleImg from '@/assets/footer/Group21.png';
import pathImg from '@/assets/footer/path.png';

const Footer = () => {
  return (
    <div>
      <div className=''>
        <div style={{ backgroundImage: `url(${circleImg})` }} className='bg-center bg-no-repeat bg-contain min-h-[1055px]'>
          <img src={pathImg} alt="Image" className='w-[250px] md:w-[350px] lg:w-[430px] xl:w-[650px] 2xl:w-[700px] pt-[465px] md:pt-[450px] lg:pt-[420px] xl:pt-[350px] mx-auto' />

          <p className='text-[#FFF] text-[19px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[55px] font-inter font-semibold uppercase text-center w-[75%] md:w-[64%] xl:w-[64%] 2xl:w-[50%] mx-auto -mt-24 md:-mt-40 lg:-mt-52 xl:-mt-72 2xl:-mt-[320px]'>JOIN SAT AND LETS BARK OUR  WAY TO CRYPTO STARDOM  TOGETHER!</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
