import CreditCard from "../../icons/CreditCard";

const Support = () => {
  return (
    <div className="pb-[100px] flex gap-[35px] px-5 flex-col-reverse xl:flex-row">
      <div className="xl:max-w-[649px] w-full h-[706px] relative rounded-[32px] border-2 border-white border-opacity-10 overflow-hidden flex justify-center pt-[100px]">
        <img
          src="/iPhone 15 Pro Black Titanium Mockup Portrait label.png"
          alt=""
          width={434.86}
          height={"100%"}
        />
        <div className="absolute bottom-0 right-0">
          <CreditCard />
        </div>
      </div>

      <div className="flex flex-col gap-[32px]">
        <div className="xl:max-w-[599px] w-full h-full px-10 pt-10 pb-[41px] bg-gradient-to-br from-[#1C1917] to-[#292524] rounded-2xl shadow border-white backdrop-blur-[251px] flex-col justify-center items-start gap-6 inline-flex">
          <h3 className="self-stretch text-white text-3xl font-bold font-['Sora'] leading-[42px]">
            Support
          </h3>
          <p className="self-stretch text-white text-base font-normal font-['Roboto'] leading-normal">
            Globally pontificate quality alignments for frictionless
            manufactured products. Credibly harness value-added models vis-a-vis
            leading-edge communities. Proactively optimize extensive channels
            and fully tested customer service. Appropriately evisculate premium
            e-commerce with extensive materials. Dynamically pursue
            clicks-and-mortar benefits for empowered e-commerce. Appropriately
            maximize seamless.
          </p>
        </div>

        <div className="xl:max-w-[599px] w-full  h-full px-10 pt-10 pb-[41px] bg-gradient-to-br from-[#1C1917] to-[#292524] rounded-2xl shadow border-white backdrop-blur-[251px] flex-col justify-center items-start gap-6 inline-flex">
          <h3 className="self-stretch text-white text-3xl font-bold font-['Sora'] leading-[42px]">
            Community
          </h3>
          <p className="self-stretch text-white text-base font-normal font-['Roboto'] leading-normal">
            Globally pontificate quality alignments for frictionless
            manufactured products. Credibly harness value-added models vis-a-vis
            leading-edge communities. Proactively optimize extensive channels
            and fully tested customer service. Appropriately evisculate premium
            e-commerce with extensive materials. Dynamically pursue
            clicks-and-mortar benefits for empowered e-commerce. Appropriately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
