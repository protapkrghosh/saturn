import Container from "../Container/Container";
// import globe from "@/assets/unlitesAwait/Group479.png"
import globe from "@/assets/unlitesAwait/Group41.png"
import earthImg from "@/assets/unlitesAwait/image1.png"

const NewUnlites = () => {
  return (
    <div className="mt-32">
      <Container>
        <h1 className='text-[#fff] text-[58px] text-center font-inter font-bold'>Beyond memes new <span className="text-[#40FE5B]">unlites</span> await</h1>
      </Container>

      {/* Content area */}
      <div className="lg:flex justify-between mt-20">
        {/* Globe Image */}
        <div className='lg:w-1/2 flex justify-start relative'>
          <img src={globe} alt="Image" className='xl:w-auto 2xl:w-[480px] xl:h-[510px] 2xl:h-auto -mb-32 md:-mb-52 lg:mb-0 mix-blend-screen' />
          <img src={earthImg} alt="Image" className='w-[110px] md:w-[200px] lg:w-[140px] xl:w-[190px] 2xl:w-[240px] absolute bottom-[200px] md:bottom-[378px] lg:bottom-[387px] xl:bottom-[508px] 2xl:bottom-[640px] left-4 md:left-7 lg:left-3 xl:left-3 2xl:left-5' />
        </div>

        {/* Sat wear */}
        <div className="w-3/3 2xl:w-3/3">
          <div className="max-w-[1620px] mx-auto 2xl:pr-[250px] xl:pr-24 lg:pr-16 md:pr-10 sm:pr-2 pr-4">
            {/* Section one */}
            <div className="border-y border-[#074933] py-10">
              <div className="flex justify-between gap-x-10 2xl:gap-x-64 ml-16">
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
              <div className="flex justify-between gap-x-64 ml-16">
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
            <div className="border-y border-[#074933] py-10">
              <div className="flex justify-between gap-x-64 ml-16">
                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">SAT Bridge</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Effortlessly trade $SAT tokens on our decentralized exchange.</p>
                </div>

                <div className="font-inter">
                  <h3 className="text-[#FFF] text-[25px] mb-6">Mini Games</h3>
                  <p className="text-[#a6aaae] text-[17.5px]">Effortlessly trade $SAT tokens on our decentralized exchange.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUnlites;
