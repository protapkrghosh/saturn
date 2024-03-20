import symbols from '@/assets/banner/symbols.png'
import globe from '@/assets/hodI/Group.png'
import line from '@/assets/hodI/Rectangle9.png'
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';

const Hodi = () => {
  return (
    <div>
      <Container>
        <img src={line} alt="Image" className='mb-9' />

        <div style={{ backgroundImage: `url(${globe})` }} className='bg-no-repeat bg-center relative'>
          {/* Shadow */}
          <div className='w-[280px] lg:w-[500px] h-[180px] lg:h-[250px] globeShadow absolute left-[30%] md:bottom-16 lg:bottom-auto'/>

          <div className='text-center font-inter'>
            <h1 className='text-[#fff] text-[60px] font-bold capitalize'>Hodl</h1>
            <p className='text-[#FCFCFC] text-[18px] font-normal py-10 md:w-[90%] xl:w-[70%] 2xl:w-[57%] mx-auto'>With $SAT, the market is not just bullish; it's downright howlish. Forget traditional charts; we're trading in memes and laughs. Join us as we transform the financial landscape into a comic strip, and let's howl all.</p>

            <div className='flex justify-center'>
              <Button className="text-[#fff] bg-[#02B81C] rounded-[8px] group cursor-pointer px-12 py-[27px]">
                <span className="flex justify-center items-center">
                  <p className='text-[18px] 2xl:text-[19px] font-inter font-normal uppercase mr-2'>Buy now</p>
                  <img src={symbols} alt="Image" className='w-[27px] 2xl:w-[28px] group-hover:-mt-2  duration-300' />
                </span>
              </Button>
            </div>
          </div>

          <img src={line} alt="Image" className='pt-14' />
        </div>
      </Container>
    </div>
  );
};

export default Hodi;
