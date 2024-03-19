import globe from '@/assets/aboutToken/globe.png';
import pathBg from '@/assets/aboutToken/group.png';
import { Button } from '@/components/ui/button';

const AboutToken = () => {
  return (
    <div className='relative -mt-20 md:-mt-44 lg:mt-0 mb-28 lg:mb-0'>
      {/* Top path shadow */}
      <div className='hidden lg:block'>
        <img src={pathBg} alt="Image" className='lg:w-[250px] xl:w-[300px] 2xl:w-[400px] absolute top-16 2xl:top-60 lg:left-[50%] xl:left-[45%] 2xl:left-[40%] opacity-[0.06]' />

        <div className='pathShadowTop  blur-[250px] 2xl:blur-[300px] w-[150px] xl:w-[250px] 2xl:w-[300px] h-[150px] xl:h-[250px] 2xl:h-[300px] absolute top-16 2xl:top-52 lg:left-[55%] xl:left-[45%] 2xl:left-[43%]' />
      </div>

      <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
        {/* About Contents */}
        <div className='lg:w-1/2'>
          <div className="max-w-[1620px] mx-auto xl:pl-24 lg:pl-16 md:pl-10 sm:pl-2 pl-4">
            <h1 className='text-[#fff] text-[50px] md:text-[57px] lg:text-[44px] xl:text-[57px] 2xl:text-[58px] font-inter font-bold uppercase'>About <span className='text-[#40FE5B]'>$sat</span> token</h1>

            <div className=' text-[#F4F4F4] text-[18px] font-inter font-normal space-y-4 mt-2 mb-10 2xl:w-[70%]'>
              <p>Introducing $SAT, the memecoin inspired by the legendary Sat Simpson! Known for his prowess in navigating the complexities of De-Fi with unparalleled coolness, Sat Simpson serves as the muse behind this innovative cryptocurrency.</p>

              <p>$SAT isn't just another digital currency; it's a meme-worthy investment opportunity that's quickly gaining traction in the crypto arena. </p>

              <p>$SAT is howling its way to the moon, capturing the attention of investors worldwide. Don't miss out on the chance to be part of this meme-orable journey! </p>
            </div>

            <Button className="bg-[#02b81c4d] uppercase text-[16px] font-inter font-normal">Buy Now</Button>
          </div>
        </div>

        {/* Globe Image */}
        <div className='lg:w-1/2 flex justify-end'>
          <img src={globe} alt="Image" className='w-full 2xl:w-[850px] -mb-32 md:-mb-52 lg:mb-0' />
        </div>
      </div>

      {/* bottom path shadow */}
      <div className='hidden lg:block'>
        <img src={pathBg} alt="Image" className='lg:w-[250px] xl:w-[300px] 2xl:w-[400px] absolute lg:bottom-14 xl:bottom-44 2xl:bottom-72 left-[32%] opacity-[0.06] 2xl:opacity-[0.05]' />

        <div className='pathShadowBottom blur-[250px] 2xl:blur-[300px] w-[150px] xl:w-[200px] 2xl:w-[300px] h-[150px] xl:h-[200px] 2xl:h-[300px] absolute bottom-16 xl:bottom-36 2xl:bottom-52 left-[38%] xl:left-[36%] 2xl:left-[34%]' />
      </div>
    </div>
  );
};

export default AboutToken;
