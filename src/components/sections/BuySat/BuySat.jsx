import { MdKeyboardArrowRight } from "react-icons/md"
import Container from '../Container/Container';
import icon1 from '@/assets/howToBuy/Black1.png'
import icon2 from '@/assets/howToBuy/Black2.png'
import icon3 from '@/assets/howToBuy/Black3.png'
import icon4 from '@/assets/howToBuy/image203.png'

const BuySat = () => {
  return (
    <div className="pt-20 pb-28 relative overflow-hidden">
      {/* Shadow */}
      <div className="w-[800px] h-[300px] tokenShadow absolute right-0" />

      <Container>
        <div>
          <h1 className='text-[#fff] text-[50px] md:text-[57px] lg:text-[44px] xl:text-[57px] 2xl:text-[58px] text-center font-inter font-bold capitalize'>How To Buy <span className='text-[#40FE5B] uppercase'>$sat</span> token</h1>

          <div className="mt-10">
            {/* Buy button */}
            <div className='md:flex justify-between items-center'>
              {/* Left side button */}
              <div className='md:w-1/2 font-inter'>
                <div className="flex items-center">
                  <p className='text-white text-[20px] 2xl:text-[25px] text-center font-semibold px-12 2xl:px-20 py-[38px] 2xl:py-[45px] border border-[#074933] rounded-[100px] bg-[#06291B]'>Click on Buy Button</p>

                  <div className="flex items-center ml-[45px] 2xl:ml-[55px]">
                    <div className="w-[200px] h-[2px] bg-[#074933] -mr-[12px] rounded-md" />
                    <MdKeyboardArrowRight className="text-[#074933] text-[22px]" />
                  </div>
                </div>
              </div>

              {/* Right side button with icon */}
              <div className="md:w-1/2">
                <div className="flex justify-between items-center border-[2px] border-[#074933] rounded-[90px] py-5 2xl:py-6 px-12">
                  <p className="text-[#F4F4F4] 2xl:text-[18px] font-normal w-[90%] 2xl:w-[77%]">Ready to invest in the next big thing? Head to our buy section now and grab your share of the $SAT coin revolution. Don't miss out on the moon ride!</p>

                  <img src={icon3} alt="image" className="w-[60px] 2xl:w-[70px]" />
                </div>
              </div>
            </div>

            {/* Phantom wallet */}
            <div className='md:flex justify-between items-center my-10'>
              {/* Left side button */}
              <div className='md:w-1/2 font-inter'>
                <div className="flex items-center">
                  <p className='text-white text-[20px] 2xl:text-[25px] text-center font-semibold px-12 2xl:px-10 py-[38px] 2xl:py-[26px] border border-[#074933] rounded-[100px] bg-[#06291B] 2xl:w-[56%]'>Connect your Phantom wallet</p>

                  <div className="flex items-center ml-[45px] 2xl:ml-[55px]">
                    <div className="w-[200px] h-[2px] bg-[#074933] -mr-[12px] rounded-md" />
                    <MdKeyboardArrowRight className="text-[#074933] text-[22px]" />
                  </div>
                </div>
              </div>

              {/* Right side button with icon */}
              <div className="md:w-1/2">
                <div className="flex justify-between items-center border-[2px] border-[#074933] rounded-[90px] py-5 2xl:py-6 px-12">
                  <p className="text-[#F4F4F4] text-[18px] font-normal w-[90%] 2xl:w-[77%]">Connect your wallet to join the meme coin revolution! Seamlessly participate in the fun and wild ride of our community-driven token. Don't miss out!</p>

                  <img src={icon1} alt="image" className="w-[60px] 2xl:w-[70px]" />
                </div>
              </div>
            </div>

            {/* Choose amount to buy */}
            <div className='md:flex justify-between items-center mb-10'>
              {/* Left side button */}
              <div className='md:w-1/2 font-inter'>
                <div className="flex items-center">
                  <p className='text-white text-[20px] 2xl:text-[25px] text-center font-semibold px-12 2xl:px-[60px] py-[38px] 2xl:py-[45px] border border-[#074933] rounded-[100px] bg-[#06291B]'>Choose Amount to Buy</p>

                  <div className="flex items-center ml-[45px] 2xl:ml-[55px]">
                    <div className="w-[200px] h-[2px] bg-[#074933] -mr-[12px] rounded-md" />
                    <MdKeyboardArrowRight className="text-[#074933] text-[22px]" />
                  </div>
                </div>
              </div>

              {/* Right side button with icon */}
              <div className="md:w-1/2">
                <div className="flex justify-between items-center border-[2px] border-[#074933] rounded-[90px] py-5 2xl:py-9 px-12">
                  <p className="text-[#F4F4F4] text-[18px] font-normal w-[90%] 2xl:w-[65%]">Choose the amount to buy and join the meme coin frenzy!</p>

                  <img src={icon2} alt="image" className="w-[60px] h-[45px] 2xl:w-[70px]" />
                </div>
              </div>
            </div>

            {/* Buy sat token */}
            <div className='md:flex justify-between items-center'>
              {/* Left side button */}
              <div className='md:w-1/2 font-inter'>
                <div className="flex items-center">
                  <p className='text-white text-[20px] 2xl:text-[25px] text-center font-semibold px-12 2xl:px-28 py-[38px] 2xl:py-[45px] border border-[#074933] rounded-[100px] bg-[#06291B]'>Buy  SAT token</p>

                  <div className="flex items-center ml-[45px] 2xl:ml-[55px]">
                    <div className="w-[200px] h-[2px] bg-[#074933] -mr-[12px] rounded-md" />
                    <MdKeyboardArrowRight className="text-[#074933] text-[22px]" />
                  </div>
                </div>
              </div>

              {/* Right side button with icon */}
              <div className="md:w-1/2">
                <div className="flex justify-between items-center border-[2px] border-[#074933] rounded-[90px] py-5 2xl:py-6 px-12">
                  <p className="text-[#F4F4F4] 2xl:text-[18px] font-normal w-[90%] 2xl:w-[77%]">Buy $SAT token and join the meme revolution! Embrace the laughter, fun and potential gains. Secure your spot in the meme coin world. Hurry up!</p>

                  <img src={icon4} alt="image" className="w-[60px] 2xl:w-[70px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuySat;
