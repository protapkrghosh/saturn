import { MdKeyboardArrowRight } from "react-icons/md"
import Container from '../Container/Container';
import icon1 from '@/assets/howToBuy/Black1.png'
import icon2 from '@/assets/howToBuy/Black2.png'
import icon3 from '@/assets/howToBuy/Black3.png'
import icon4 from '@/assets/howToBuy/image203.png'

const BuySat = () => {
  return (
    <div className="pt-20">
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
                <div className="flex justify-between items-center border-[2px] border-[#074933] rounded-[90px] py-5 2xl:py-7 px-12">
                  <p className="text-[#F4F4F4] font-normal w-[90%] 2xl:w-[68%]">Ready to invest in the next big thing? Head to our buy section now and grab your share of the $SAT coin revolution. Don't miss out on the moon ride!</p>

                  <img src={icon3} alt="image" className="w-[60px] 2xl:w-[70px]" />
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
