import { useEffect } from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import BGImg from "../../assets/golf/GrassWithLake.jpeg";
import RatesHeader from "../../assets/golf/golf-rates-header.jpg";
import AllCards from "../Reusable/AllCards";

const Rates = () => {
  return (
    <div>
      <MiniHeader heading={"Rates"} subHeading={""} image={RatesHeader} />

      <div className="p-5 md:p-16 bg-[#162649]">
        <div
          className="text-slate-100 pb-10 bg-cover bg-center font-primary"
          style={{
            backgroundImage: `url(${BGImg})`,
          }}
        >
          {/* <h1 className="uppercase tracking-wide text-4xl  sm:text-5xl text-black font-bold   font-primary text-center py-8">
          BOOK YOUR TEE TIME ONLINE
        </h1>
        <h1 className="uppercase tracking-wide text-4xl text-black font-bold   font-primary text-center py-4">
          RATES
        </h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 p-6 justify-items-center gap-y-8 gap-x-10 max-w-6xl mx-auto ">
            <div className="card">
              <div className="content">
                <div className="font-bold text-3xl">MONDAY - THURSDAY</div>
                <div className="flex justify-around">
                  <div>
                    <div className="title">9 HOLES</div>
                    <div className="price text-green-800">$10</div>
                  </div>
                  <div>
                    <div className="title">9 HOLES + CART </div>
                    <div className="price text-green-800">$20</div>
                  </div>
                </div>
                <div className="text-md">
                  Enjoy a quick and affordable golfing experience on-foot, or
                  upgrade your golfing adventure to include a cart full of
                  modern comforts.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="font-bold text-3xl">FRIDAY - SUNDAY</div>
                <div className="flex justify-around">
                  <div>
                    <div className="title">9 HOLES</div>
                    <div className="price text-green-800">$10</div>
                  </div>
                  <div>
                    <div className="title">9 HOLES + CART</div>
                    <div className="price text-green-800">$28</div>
                  </div>
                </div>
                <div className="text-md">
                  Enjoy a quick and affordable golfing experience on-foot, or
                  upgrade your golfing adventure to include a cart full of
                  modern comforts.
                </div>
              </div>
            </div>
          </div>
        </div>
        <AllCards />
      </div>

      <Footer />
    </div>
  );
};

export default Rates;
