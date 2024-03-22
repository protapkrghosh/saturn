// import globe from '@/assets/aboutToken/globe.png';
import globe from '@/assets/aboutToken/aboutGlobe.png';
// import globe from '@/assets/aboutToken/Group1037.png';
import earth from '@/assets/aboutToken/image19.png';
import pathBg from '@/assets/aboutToken/group.png';
import { Button } from '@/components/ui/button';

const AboutToken = () => {
  return (
    <div className='relative -pt-20 md:-pt-44 lg:pt-40  mb-28' id='aboutToken'>
      {/* Top path shadow */}
      <div className='hidden lg:block'>
        <img src={pathBg} alt="Image" className='lg:w-[250px] xl:w-[300px] 2xl:w-[400px] absolute top-16 2xl:top-0 lg:left-[45%] xl:left-[45%] 2xl:left-[40%] opacity-[0.06]' />

        <div className='pathShadowTop blur-[250px] 2xl:blur-[300px] w-[150px] xl:w-[250px] 2xl:w-[250px] h-[150px] xl:h-[250px] 2xl:h-[250px] absolute top-16 2xl:top-0 lg:left-[45%] xl:left-[45%] 2xl:left-[44%]' />
      </div>

      <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
        {/* About Contents */}
        <div className='lg:w-1/2'>
          <div className="max-w-[1620px] mx-auto 2xl:pl-[250px] xl:pl-24 lg:pl-16 md:pl-10 sm:pl-2 pl-4">
            <h1 className='text-[#fff] text-[50px] md:text-[57px] lg:text-[44px] xl:text-[57px] 2xl:text-[58px] font-inter font-bold'>About <span className='text-[#40FE5B]'>$SAT</span> Token</h1>

            <div className=' text-[#F4F4F4] text-[18px] font-inter font-normal space-y-4 mt-2 mb-10 2xl:w-[90%] pr-3 lg:pr-0'>
              <p>Welcome to $SAT, where community is not just a concept, but the very heartbeat of our token's ecosystem. We believe in the power of collective wisdom and participation, which is why community involvement is at the core of everything we do. From decision-making to shaping the future direction of $SAT, every voice matters.</p>

              <p>But it's not just about governance – we love giving back to our community. That's why we host weekly raffles and giveaways.</p>

              <p>Our team is diligently working on creating a bridge and swap platform, which will provide seamless interoperability between different blockchain networks, unlocking new possibilities for $SAT holders.</p>

              <p>Exciting developments are on the horizon as well, with staking soon to be released. This not only incentivizes long-term commitment but also strengthens the security and stability of the $SAT ecosystem.</p>
            </div>

            <Button className="bg-[#02b81c4d] uppercase text-[16px] font-inter font-normal">Buy Now</Button>
          </div>
        </div>

        {/* Globe Image */}
        <div className='lg:w-1/2 flex justify-end 2xl:justify-center relative mt-24 lg:mt-0 mb-52 md:mb-72 lg:mb-0'>
          <img src={globe} alt="Image" className='w-[60%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] -mb-32 md:-mb-52 lg:mb-0 mr-[85px] md:mr-44 lg:mr-16 xl:mr-24 2xl:mr-0 animate-spin duration-3000' />

          <img src={earth} alt="Image" className='w-[100px] md:w-[175px] lg:w-[135px] xl:w-[165px] 2xl:w-[185px] absolute bottom-[-35px] md:bottom-[-30px] lg:bottom-[140px] xl:bottom-[155px] 2xl:bottom-[190px] right-[157px] md:right-[317px] lg:right-[175px] xl:right-[220px] 2xl:right-[380px]' />
        </div>
      </div>

      {/* bottom path shadow */}
      <div className='hidden lg:block'>
        <img src={pathBg} alt="Image" className='lg:w-[250px] xl:w-[300px] 2xl:w-[400px] absolute lg:bottom-14 xl:bottom-0 left-[32%] opacity-[0.06] 2xl:opacity-[0.05]' />

        <div className='pathShadowBottom blur-[250px] 2xl:blur-[300px] w-[150px] xl:w-[200px] 2xl:w-[300px] h-[150px] xl:h-[200px] 2xl:h-[300px] absolute bottom-16 xl:bottom-36 2xl:bottom-0 left-[38%] xl:left-[36%] 2xl:left-[34%]' />
      </div>
    </div>
  );
};

export default AboutToken;

