import BankingServices from "./components/bankingServices/BankingServices";
import CallToAction from "./components/callToAction/CallToAction";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Support from "./components/support/Support";
import Logo from "./icons/Logo";

function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col max-w-[1280px] w-full">
        <div className="bg-zinc-800 border border-1 border-zinc-700 rounded-lg py-3 px-8 flex items-center justify-between mt-8 w-full">
          <Logo />
          <Menu
            menuItems={[
              { name: "Home", id: "home" },
              { name: "Features", id: "features" },
              {
                name: "FAQ",
                id: "faq",
              },
            ]}
          />
        </div>
        <div id="home">
          <Hero />
        </div>
        <BankingServices />
        <CallToAction />
        <div id="features">
          <Features />
        </div>
        <Support />
        <div id="faq">
          <Faq
            questions={[
              {
                question: "How to create an account?",
                answer:
                  "Enthusiastically implement B2C solutions after process-centric functionalities. Interactively visualize transparent architectures via backward-compatible customer service. Authoritatively monetize market positioning expertise without virtual users. ",
              },
              {
                question: "How to deposit funds?",
                answer:
                  "Enthusiastically implement B2C solutions after process-centric functionalities. Interactively visualize transparent architectures via backward-compatible customer service. Authoritatively monetize market positioning expertise without virtual users. ",
              },
              {
                question: "How to withdraw funds?",
                answer:
                  "Enthusiastically implement B2C solutions after process-centric functionalities. Interactively visualize transparent architectures via backward-compatible customer service. Authoritatively monetize market positioning expertise without virtual users. ",
              },
              {
                question: "Is my money safe?",
                answer:
                  "Enthusiastically implement B2C solutions after process-centric functionalities. Interactively visualize transparent architectures via backward-compatible customer service. Authoritatively monetize market positioning expertise without virtual users. ",
              },
            ]}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
