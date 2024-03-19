import pathImg from '@/assets/banner/group.png'
import shapeImg from '@/assets/banner/vector.png'
import moonImg from '@/assets/banner/ellipse464.png'
import symbols from '@/assets/banner/symbols.png'
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div className='relative overflow-hidden'>
      {/* Shadow and background */}
      <div className='h-[120vh] 2xl:h-[145vh]'>
        <img src={moonImg} alt="Image" className='absolute top-0 -mt-20 w-full' />
        <div className='pathShadow xl:w-[400px] 2xl:w-[450px] xl:h-[400px] 2xl:h-[450px] absolute blur-[250px] 2xl:blur-[300px]' />
        <img src={shapeImg} alt="Image" className='absolute top-0 left-0 w-full' />
        <img src={pathImg} alt="Image" className='opacity-[0.06] absolute top-0 left-0' />
      </div>

      <div className='absolute top-40 2xl:top-52 w-full'>
        <Container>
          <div>
            <h1 className='text-[100px] 2xl:text-[120px] text-white text-center font-bebasNeue font-normal tracking-wider uppercase'>SPRINGFIELD AND <span className='text-[#40FE5B]'>$SAT</span></h1>

            <p className='text-[18px] text-white font-inter text-center w-full xl:w-[71%] 2xl:w-[58%] mx-auto mb-12'>In the bustling city of Springfield, life pulses with energy and vibrancy. From the quaint streets lined with charming boutiques to the bustling squares filled with the laughter of families.</p>

            <div className='flex justify-center'>
              <Button className="text-[#fff] bg-[#02B81C] rounded-[8px] group cursor-pointer px-12 py-[27px]">
                <span className="flex justify-center items-center">
                  <p className='text-[18px] 2xl:text-[19px] font-inter font-normal uppercase mr-2'>Buy now</p>
                  <img src={symbols} alt="Image" className='w-[27px] 2xl:w-[28px] group-hover:-mt-2  duration-300' />
                </span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
