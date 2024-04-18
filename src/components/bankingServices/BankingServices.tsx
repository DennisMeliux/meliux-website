import CreditCards from "../../icons/CreditCards";
import CreditCardsMobile from "../../icons/CreditCardsMobile";

const BankingServices = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row py-[100px] px-5 xl:justify-between items-center gap-10">
      <div className="w-fit hidden xl:block">
        <CreditCards />
      </div>
      <div className="w-fit  xl:hidden">
        <CreditCardsMobile />
      </div>

      <div className="flex flex-col items-center h-full justify-center gap-4">
        <h2 className="max-w-[624px] w-full text-white text-5xl font-normal font-['Sora'] leading-[60px]">
          Traditional Banking Services
        </h2>
        <p className="max-w-[624px] w-full text-slate-200 text-base font-normal font-['Sora'] leading-normal">
          In addition to our innovative offerings, we are proud to provide a
          comprehensive suite of traditional banking services tailored to meet
          your everyday needs. Our platform offers a range of services designed
          to ensure convenience, security, and reliability in managing your
          finances.
        </p>

        <div className="flex md:flex-row flex-col gap-4 w-full">
          <div className="max-w-[300px] w-full">
            <h3 className=" text-white text-xl font-bold font-['Sora'] leading-7">
              Real-time
            </h3>
            <p className=" text-slate-200 text-sm font-light font-['Sora'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius in eros.
            </p>
          </div>

          <div className="max-w-[300px] w-full">
            <h3 className=" text-white text-xl font-bold font-['Sora'] leading-7">
              Low fees
            </h3>
            <p className=" text-slate-200 text-sm font-light font-['Sora'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius in eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingServices;
