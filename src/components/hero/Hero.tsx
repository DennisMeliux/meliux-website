const Hero = () => {
  return (
    <div className="bg-zinc-800 border border-1 border-zinc-700 rounded-lg py-10 px-8 flex flex-col xl:flex-row xl:items-center justify-between mt-[22px] w-full bg-[url('../public/background.svg')]">
      <div className="flex flex-col gap-[35px]">
        <div className="max-w-[336px] w-full h-12 px-4 py-2.5 bg-gradient-to-br from-zinc-600 to-zinc-900 rounded-[46px] border-white backdrop-blur-sm justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-[22.66px] font-bold font-['Syne'] leading-[27.19px] flex gap-[10px]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.1347 0.0399426V6.7903L27.5 1.9572V28H21.235V11.6633L14 19.6919L6.76497 11.6633V28H0.5V1.9572L4.86527 6.7903V0L13.9192 10.3852L23.1347 0.0399426ZM2.3997 26.1227H4.86527V9.58631L2.3997 6.83024V26.1227ZM6.76497 8.86733L14 16.8959L21.235 8.86733V4.99287L13.9192 13.2211L6.76497 5.03281V8.86733ZM23.1347 9.58631V26.1227H25.6407V6.83024L23.1347 9.58631Z"
                fill="white"
              />
            </svg>
            Welcome to Meliux
          </div>
        </div>
        <div>
          <h1 className="max-w-[648px] w-full">
            <span className="text-white text-[44px] md:text-[80px] font-bold font-['Syne'] md:leading-[88px]">
              We are <br />
              Beyond The
            </span>
            <span className="text-white text-[44px] md:text-7xl font-bold font-['Syne'] md:leading-[88px]">
              {" "}
            </span>
            <span className="text-lime-400 text-[44px] md:text-7xl font-bold font-['Syne'] md:leading-[88px]">
              Traditional{" "}
            </span>
            <span className="text-white text-[44px] md:text-7xl font-bold font-['Syne'] md:leading-[88px]">
              Banking
            </span>
          </h1>

          <p className="max-w-[585px] w-full text-slate-200 text-base font-normal font-['Sora'] leading-loose">
            Our platform blends traditional banking stability with crypto and
            NFT innovation to cater to your evolving financial needs.
          </p>
        </div>
      </div>
      <img src="/14 Mockup 1.png" alt="" width={600} height={"100%"} />
    </div>
  );
};

export default Hero;
