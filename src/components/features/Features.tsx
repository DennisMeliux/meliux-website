const Features = () => {
  return (
    <div className="px-5 pb-[100px]">
      <div className="flex gap-5 py-[100px] flex-col xl:flex-row xl:items-center">
        <div className="max-w-[583px] w-full">
          <h2 className="text-white text-3xl xl:text-[64px] font-semibold font-['Sora'] xl:leading-[82px]">
            Cryptocurrency Trading
          </h2>
        </div>
        <p className="max-w-[624px] w-full text-neutral-200 text-base font-light font-['Sora'] leading-normal">
          Explore an extensive range of investment opportunities with the
          ability to buy, sell, and transfer cryptocurrencies directly within
          our platform. Whether you're trading digital currencies or investing
          in unique digital assets.
        </p>
      </div>

      <div className="w-full h-[3px] bg-zinc-300 rounded-sm mb-[93px]" />

      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div className="max-w-[410.67px] ">
          <h3 className="text-white text-xl  xl:text-[32px] font-bold font-['Roboto'] xl:leading-[41.60px]">
            Cryptocurrency Lending
          </h3>

          <p className="text-white text-base font-light font-['Sora'] leading-normal">
            Maximize the potential of your digital assets with our
            cryptocurrency lending platform. Our innovative lending feature
            enables you to earn interest on your idle crypto holdings,
            effectively turning dormant
          </p>
        </div>
        <div className="max-w-[410.67px] ">
          <h3 className="text-white text-xl  xl:text-[32px] font-bold font-['Roboto'] xl:leading-[41.60px]">
            Staking
          </h3>

          <p className="text-white text-base font-light font-['Sora'] leading-normal">
            Leverage the potential of your crypto assets with our staking
            functionality. Our platform offers a robust staking feature that
            enables you to earn rewards or support your preferred blockchain
            networks effortlessly
          </p>
        </div>
        <div className="max-w-[410.67px] ">
          <h3 className="text-white text-xl  xl:text-[32px] font-bold font-['Roboto'] xl:leading-[41.60px]">
            Cryptocurrency Trading
          </h3>

          <p className="text-white text-base font-light font-['Sora'] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
