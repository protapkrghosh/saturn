import Container from "../Container/Container";
// import globe from "@/assets/unlitesAwait/Group479.png"
import globe from "@/assets/unlitesAwait/Group41.png"
import earthImg from "@/assets/unlitesAwait/image1.png"
import pathBg from "@/assets/aboutToken/group.png"

const NewUnlites = () => {
  return (
    <div className="mt-32">
      <Container>
        <h1 className='text-[#fff] text-[58px] text-center font-inter font-bold'>Beyond memes new <span className="text-[#40FE5B]">unlites</span> await</h1>
      </Container>

      {/* Content area */}
      <div className="lg:flex justify-between  items-center mt-20">
        {/* Globe Image */}
        <div className='lg:w-1/2 flex justify-start relative'>
          <img src={globe} alt="Image" className='w-[300px] lg:w-[280px] xl:w-auto 2xl:w-[480px] h-[400px] xl:h-[510px] 2xl:h-auto -mb-32 md:-mb-52 lg:mb-0 mix-blend-screen' />

          <img src={earthImg} alt="Image" className='w-[150px] md:w-[150px] lg:w-[140px] xl:w-[190px] 2xl:w-[240px] absolute bottom-[23px] md:-bottom-[55px] lg:bottom-[155px] xl:bottom-[195px] 2xl:bottom-[265px] left-5 md:left-7 lg:left-5 xl:left-5 2xl:left-9' />
        </div>

        {/* Sat wear */}
        <div className="lg:2/3 xl:w-3/3 2xl:w-3/3 mt-52 md:mt-72 lg:mt-0">
          <div className="max-w-[1620px] mx-auto 2xl:pr-[250px] xl:pr-24 lg:pr-16 md:pr-10 sm:pr-2 pr-4">
            {/* Section one */}
            <div className="border-y border-[#074933] py-10">
              <div className="flex justify-between gap-x-8 xl:gap-x-32 2xl:gap-x-64 ml-10 xl:ml-16">
                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">SAT Wear</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Effortlessly trade $SAT tokens on our decentralized exchange.</p>
                </div>

                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">SAT Wear</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Effortlessly trade $SAT tokens on our decentralized exchange.</p>
                </div>
              </div>
            </div>

            {/* Section Two */}
            <div className="border-y border-[#074933] py-10 my-12">
              <div className="flex justify-between gap-x-8 xl:gap-x-32 2xl:gap-x-64 ml-10 xl:ml-16">
                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">Voting</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Effortlessly trade $SAT tokens on our decentralized exchange.</p>
                </div>

                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">Staking Pool Wear</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Effortlessly trade $SAT tokens on our decentralized exchange.</p>
                </div>
              </div>
            </div>

            {/* Section Three */}
            <div className="border-y border-[#074933] py-10 relative">
              <div className="flex justify-between gap-x-8 xl:gap-x-32 2xl:gap-x-64 ml-10 xl:ml-16 z-30">
                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">SAT Bridge</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Effortlessly trade $SAT tokens on our decentralized exchange.</p>
                </div>

                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">Mini Games</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Effortlessly trade $SAT tokens on our decentralized exchange.</p>
                </div>
              </div>

              {/* Path */}
              <img src={pathBg} alt="image" className="w-[250px] 2xl:w-[300px] absolute -bottom-14 -right-20 opacity-[0.06] z-0 hidden xl:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUnlites;
