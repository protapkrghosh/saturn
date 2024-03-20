import Container from "../Container/Container";
import globe from "@/assets/unlitesAwait/Group479.png"
import earthImg from "@/assets/unlitesAwait/image1.png"

const NewUnlites = () => {
  return (
    <div>
      <Container>
        <h1 className='text-[#fff] text-[58px] text-center font-inter font-bold'>Beyond memes new <span className="text-[#40FE5B]">unlites</span> await</h1>
      </Container>

      {/* Content area */}
      <div className="lg:flex justify-between">
        {/* Globe Image */}
        <div className='lg:w-1/2 flex justify-start relative'>
          <img src={globe} alt="Image" className='w-full 2xl:w-[850px] -mb-32 md:-mb-52 lg:mb-0' />
          <img src={earthImg} alt="Image" className='w-[110px] md:w-[200px] lg:w-[140px] xl:w-[190px] 2xl:w-[240px] absolute bottom-[200px] md:bottom-[378px] lg:bottom-[387px] xl:bottom-[508px] 2xl:bottom-[640px] left-4 md:left-7 lg:left-3 xl:left-3 2xl:left-5 animate-spin duration-2000' />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default NewUnlites;
