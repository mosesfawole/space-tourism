const Home = () => {
  return (
    <div>
      <div className="flex p-4 flex-col sm:flex-col md:flex-row justify-around items-center gap-20 md:gap-0 md:mt-[200px]  ">
        <div className="flex flex-col  justify-center items-center md:items-start gap-4 md:gap-6 basis-2/4 text-center md:text-start ">
          <p className="text-base font-barlow uppercase md:text-3xl text-[#D0D6F9]">
            So, you want to travel to
          </p>
          <h1 className="font-bellefair uppercase text-white text-[80px] leading-[100px] md:text-[150px] md:leading-[171px]">
            Space
          </h1>
          <p className="font-barlow text-base md:text-lg md:leading-8 text-[#D0D6F9] sm:w-[444px] sm:m-auto md:w-auto ">
            {" "}
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex ">
          <button className="bg-white w-36 h-36 md:w-64 md:h-64 rounded-full">
            <p className="font-bellefair uppercase text-[#0B0D17] text-xl md:text-3xl leading-5">
              Explore
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
