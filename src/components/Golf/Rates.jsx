// import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import { LiaGolfBallSolid } from "react-icons/lia";
import LeaveAMessage from "../../components/Home/LeaveAMessage";
import MapCourse from "../../assets/golf/mapcourse.png";
import Golfer from "../../assets/golf/rates-golfer.png";
import DrivingRange from "../../assets/golf/rates-drivingrange.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { Carousel } from "react-responsive-carousel";
import GolfBallPattern from "../../assets/golf/golfballpattern.png";

const Rates = () => {
  return (
    <>
      <MiniHeader heading={"Rates"} subHeading={""} />

      



      <div className="grid grid-cols-1  md:grid-cols-12 gap-6  pt-6 px-8">
       
         
          
      </div>

      <div className=" border-2 md:grid-cols-12 gap-6  pt-6 px-8 md:col-span-4 md:order-last mb-2 border-[#7da33f]" style={{}}>
            <h1 className="text-[#7da33f] font-bold text-2xl text-center">
              9 HOLE EXECUTIVE COURSE
            </h1>
            <div className="px-2">
              <p className="text-left  my-3">
              Enjoy a quick game of golf on-foot, or upgrade your golfing adventure to include a cart full of modern comforts to get you around.
              </p>

              <ul className="list-disc list-inside ">
                <li className="text-xl uppercase font-semibold">
                  Monday - Thursday
                  <br />
                  <span className="ml-7">7 Am - Sunset</span>
                  <ul className="list-disc list-inside pl-4">
                    <li className="lowercase font-thin text-lg">
                      course - $10/<span className="text-sm">person</span>
                    </li>
                    <li className="lowercase font-thin text-lg">
                      golf cart - $18/<span className="text-sm">person</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4">
                <li className="text-xl uppercase font-semibold">
                  Friday - Sunday
                  <br />
                  <span className="ml-7">7 Am - Sunset</span>
                  <ul className="list-disc list-inside pl-4">
                    <li className="lowercase font-thin text-lg">
                      course - $10/<span className="text-sm">person</span>
                    </li>
                    <li className="lowercase font-thin text-lg">
                      golf cart - $18/<span className="text-sm">person</span>
                    </li>
                  </ul>
                </li>
              </ul>

              <button className="uppercase outline  outline-1 px-2 text-[#7da33f] w-full text-xl my-3 tracking-wider outline-[#7da33f] ">
                Book Your Tee time
              </button>
            </div>

         

             
          </div>

          <img
            src={DrivingRange}
            alt="Golf Course"
            className="object-fill col-span-8"
            style={{ width: "100%", height: "auto" }}
          />

<img
            src={Golfer}
            alt="Golf Course"
            className="object-fill col-span-8"
            style={{ width: "100%", height: "auto" }}
          />

      <div className="text-center my-4 p-1">
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-4 gap-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
        <div className="col-span-2 lg:col-span-1 p-4">
          <div className="flex flex-col items-center"></div>
          <p className="tracking-wide text-xl font-primary font-semibold my-3 text-justify">
            <h1 className="text-maroon font-bold text-4xl font-DinCondensed text-center my-4">
            DRIVING RANGE
            </h1>
            <div className="px-2 text">
              <p className="text-center  my-4">
              Want to perfect your swing? Choose your bucket to practice anytime of day even after sunset with our lighted driving range.
              </p>

              <ul className="list-disc list-inside ">
                <li className="text-xl uppercase font-semibold">
                  Monday - Sunday
                  <br />
                  <span className="ml-7">7 Am - 9 Pm</span>
                  <ul className="list-disc list-inside pl-4">
                    <li className="lowercase font-thin text-lg">
                      small bucket - $10/<span className="text-sm">person</span>
                    </li>
                    <li className="lowercase font-thin text-lg">
                      medium bucket - $12/<span className="text-sm">person</span>
                    </li>
                    <li className="lowercase font-thin text-lg">
                      large bucket - $15/<span className="text-sm">person</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </p>
        </div>

        <div className="col-span-2 lg:col-span-1 p-4">
         
        </div>
        <button className="uppercase outline  outline-1 px-2 text-[#791214] w-full text-xl my-3 tracking-wider outline-[#791214] ">
                PLAY MORE SAVE MORE WITH A MEMBERSHIP!
              </button>
      </div>

      {/* <LeaveAMessage /> */}
      <Footer />
    </>
  );
};

export default Rates;