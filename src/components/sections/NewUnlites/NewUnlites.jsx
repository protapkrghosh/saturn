import Container from "../Container/Container";
// import globe from "@/assets/unlitesAwait/Group479.png"
import globe from "@/assets/unlitesAwait/Group79.png"
// import globe from "@/assets/unlitesAwait/Group41.png"
import earthImg from "@/assets/unlitesAwait/image1.png"
import pathBg from "@/assets/aboutToken/group.png"

const NewUnlites = () => {
  return (
    <div className="mt-40 pb-32 relative">
      <Container>
        <h1 className='text-[#fff] text-[58px] text-center font-inter font-bold'>New <span className="text-[#40FE5B]">utilities</span> await</h1>
      </Container>

      {/* Content area */}
      <div className="lg:flex justify-between  items-center mt-20">
        {/* Globe Image */}
        <div className='lg:w-1/2 flex justify-start relative'>
          <img src={globe} alt="Image" className='w-[75%] md:w-[65%] lg:w-full xl:w-[90%] 2xl:w-[85%] lg:-ml-10 xl:ml-0 -mb-32 md:-mb-52 lg:mb-0 mix-blend-screen' />

          {/* <img src={earthImg} alt="Image" className='w-[150px] md:w-[150px] lg:w-[140px] xl:w-[190px] 2xl:w-[240px] absolute bottom-[23px] md:-bottom-[55px] lg:bottom-[155px] xl:bottom-[195px] 2xl:bottom-[265px] left-5 md:left-7 lg:left-5 xl:left-5 2xl:left-9' /> */}
        </div>

        {/* Sat wear */}
        <div className="lg:2/3 xl:w-3/3 2xl:w-3/3 mt-52 md:mt-72 lg:mt-0">
          <div className="max-w-[1620px] mx-auto 2xl:pr-[250px] xl:pr-24 lg:pr-16 md:pr-10 sm:pr-2 pr-4">
            {/* Section one */}
            <div className="border-y border-[#074933] sm:ml-2 ml-4 md:ml-10 lg:ml-0 py-10">
              <div className="flex justify-between gap-x-8 xl:gap-x-32 2xl:gap-x-64 ml-10 xl:ml-16">
                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">SAT Wear</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Effortlessly trade $SAT tokens on our decentralized exchange.</p>
                </div>

                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">SAT Raffle</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Engage in thrilling raffle events with your $SAT tokens.</p>
                </div>
              </div>
            </div>

            {/* Section Two */}
            <div className="border-y border-[#074933] sm:ml-2 ml-4 md:ml-10 lg:ml-0 py-10 my-12">
              <div className="flex justify-between gap-x-8 xl:gap-x-32 2xl:gap-x-[208px] ml-10 xl:ml-16">
                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">Voting</h3>
                  <p className="text-[#a6aaae] text-[17.5px] 2xl:w-[87%]">Shape the community's future by participating in important decisions using your $SAT.</p>
                </div>

                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">Staking</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Multiply your holdings by staking $SAT tokens and earning rewards.</p>
                </div>
              </div>
            </div>

            {/* Section Three */}
            <div className="border-y border-[#074933] sm:ml-2 ml-4 md:ml-10 lg:ml-0 py-10 relative">
              <div className="flex justify-between gap-x-8 xl:gap-x-32 2xl:gap-x-64 ml-10 xl:ml-16 z-30">
                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">SAT Bridge</h3>
                  <p className="text-[#a6aaae] text-[17.5px] 2xl:w-[94%]">Connect $SAT with various blockchains for expanded possibilities.</p>
                </div>

                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">Mini Games</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Enjoy entertaining mini-games while earning $SAT rewards.</p>
                </div>
              </div>

              {/* Path */}
              <img src={pathBg} alt="image" className="w-[250px] 2xl:w-[300px] absolute -bottom-14 -right-20 opacity-[0.06] z-0 hidden xl:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Shadow */}
      <div className="w-[300px] lg:w-[260px] xl:w-[400px] 2xl:w-[450px] h-[450px] md:h-[550px] 2xl:h-[600px] unlitShadow absolute left-0 top-96 md:top-52 lg:top-auto lg:bottom-40" />
    </div>
  );
};

export default NewUnlites;
