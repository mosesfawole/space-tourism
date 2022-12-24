const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 ">
        <div className="flex flex-col  justify-center items-center gap-4">
          <p className="text-base font-barlow uppercase text-[#D0D6F9]">
            So, you want to travel to
          </p>
          <h1 className="font-bellefair uppercase text-white text-[80px] leading-[100px]">
            Space
          </h1>
          <p className="font-barlow text-base text-[#D0D6F9]">
            {" "}
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="">
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
