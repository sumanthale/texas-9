import React, { useEffect } from "react";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import TeeTimesHeader from "../assets/golf/teetime-header.png";
import ArrowDesktop from "../assets/golf/arrow-desktop.png";
import ArrowMobile from "../assets/golf/arrow-mobile.png";

const Tsheet = () => {
  //REMOVE TSHEET
  useEffect(() => {
    document.getElementById("t-sheet-widget").style.display = "block";

    return () => {
      document.getElementById("t-sheet-widget").style.display = "none";
    };
  }, []);
  //REMOVE TSHEET
  return (
    <div>
      <MiniHeader
        heading={"BOOK A TEE TIME"}
        subHeading={""}
        image={TeeTimesHeader}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 gap-x-10 pt-6 lg:pr-20 pb-6 font-primary font-semibold">
        <div className="md:col-span-12 md:flex justify-center items-center h-full">
          <div className="max-w-2xl mx-auto px-18">
            <div className="md:col-span-12 text-center my-4 p-1">
              <h2 className="text-green text-3xl lg:text-5xl font-DinCondensed font-semibold mb-2 uppercase">
                RESERVE YOUR RELAXATION
              </h2>
              <p className="text-center mt-4">
                Minimize the wait and schedule your next visit! Just click the
                green button below!
              </p>
            </div>

            {/* Align ArrowDesktop to center below the heading and paragraph */}
            <div className="hidden md:block text-center my-4">
              <img
                src={ArrowDesktop}
                alt="Arrow Desktop"
                className="mx-auto object-fill h-full"
                style={{ maxWidth: "100%", maxHeight: "450px" }}
              />
            </div>
            <div className="md:hidden">
              <img
                src={ArrowMobile}
                alt="Arrow Mobile"
                className="object-contain h-full"
                style={{ width: "100%", maxHeight: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tsheet;
