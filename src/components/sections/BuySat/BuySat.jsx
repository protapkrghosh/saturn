import { MdKeyboardArrowRight } from "react-icons/md"
import Container from '../Container/Container';
import icon1 from '@/assets/howToBuy/Black1.png'
import icon2 from '@/assets/howToBuy/Black2.png'
import icon3 from '@/assets/howToBuy/Black3.png'
import icon4 from '@/assets/howToBuy/image203.png'

const BuySat = () => {
  return (
    <div>
      <Container>
        <div>
          <h1 className='text-[#fff] text-[50px] md:text-[57px] lg:text-[44px] xl:text-[57px] 2xl:text-[58px] text-center font-inter font-bold capitalize'>How To Buy <span className='text-[#40FE5B] uppercase'>$sat</span> token</h1>

          <div className='md:flex items-center'>
            <div className='md:w-1/2 font-inter'>
              <div className="flex items-center">
                <p className='text-white text-[18px] font-semibold px-12 py-5 border border-[#074933] rounded-[100px] bg-[#06291B]'>Click on Buy Button</p>

                <div className="flex items-center mx-4">
                  <div className="w-[164px] h-[2px] bg-[#074933] -mr-[12px] rounded-md"/>
                  <MdKeyboardArrowRight className="text-[#074933] text-[22px]"/>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div>
                <p className="text-[#F4F4F4] font-normal">Ready to invest in the next big thing? Head to our buy section now and grab your share of the $SAT coin revolution. Don't miss out on the moon ride!</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuySat;
