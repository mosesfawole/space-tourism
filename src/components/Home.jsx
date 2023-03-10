import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="flex p-6 flex-col mt-14 sm:flex-col md:flex-row justify-around items-center gap-20 md:gap-0 md:mt-[200px]  ">
        <div className="flex flex-col  justify-center items-center md:items-start gap-4 md:gap-6 basis-2/4 text-center md:text-start ">
          <p className="text-base font-barlow uppercase md:text-3xl text-[#D0D6F9]">
            So, you want to travel to
          </p>
          <h1 className="font-bellefair uppercase text-white text-[80px] leading-[100px] md:text-[150px] md:leading-[171px]">
            Space
          </h1>
          <p className="font-barlow text-[15px] leading-6 md:text-lg md:leading-8 text-[#D0D6F9] sm:w-[444px] sm:m-auto md:w-auto ">
            {" "}
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex ">
          <Link to="/destination">
            <button className=" transition-all delay-150 ease-in-out bg-white w-36 h-36 md:w-64 md:h-64 rounded-full outline  hover:outline-[40px] outline-[#ffffff19]    ">
              <p className="font-bellefair uppercase text-[#0B0D17] text-xl md:text-3xl leading-5">
                Explore
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
