import globe from '@/assets/aboutToken/globe.png';
import pathBg from '@/assets/aboutToken/group.png';
import { Button } from '@/components/ui/button';

const AboutToken = () => {
  return (
    <div>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
        {/* About Contents */}
        <div className='lg:w-1/2'>
          <div className="max-w-[1620px] mx-auto xl:pl-24 lg:pl-16 md:pl-10 sm:pl-2 pl-4">
            <h1 className='text-[#fff] text-[57px] lg:text-[44px] xl:text-[57px] 2xl:text-[58px] font-inter font-bold uppercase'>About <span className='text-[#40FE5B]'>$sat</span> token</h1>

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
          <img src={globe} alt="Image" className='w-full 2xl:w-[850px]' />
        </div>
      </div>
    </div>
  );
};

export default AboutToken;
