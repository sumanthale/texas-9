import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import ABOUTHEADER from "../assets/golf/about-header.png";
import Ingrid from "../assets/golf/about-ingrid.png";
import Josh from "../assets/golf/about-josh.png";
import Chris from "../assets/golf/about-chris.png";
import LeaveAMessage from "../components/Home/LeaveAMessageShort";
const AboutView = () => {
  return (
    <>
      <MiniHeader heading={"About Us"} subHeading={""} image={ABOUTHEADER} />
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6 gap-x-10  pt-6  lg:pr-20 pb-6">
        <div className="md:col-span-12">
          <div className="hidden md:block pl-4 lg:pl-20">
            <p className="text-justify ">
              Hailed as one of the best executive golf courses in DFW, our
              course was designed by Steven D. Plumber, ASGCA, and opened in
              1999. The course was created to be a public course, filling a
              niche in DFW so the greater community can have better access to
              the benefits of golf. Formerly known as Texas Golf Center, the
              course came under new management in 2023 with an explicit interest
              in adding new amenities and reinforcing the best aspects of the
              course. After 24 years of operating, the course remains a mainstay
              in the DW area as a location for PGA training, annual tournaments,
              and golf enjoyed by all.
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-2 gap-4 p-4 border-green-800 border-r-0">
        <div className="h-full w-full col-span-3">
          <div className="md:col-span-12 text-center mb-4 p-1">
            <h2 className="text-green text-xl font-semibold mb-2 uppercase">
              Meet The Team
            </h2>
          </div>
          <div className="flex justify-between flex-col md:flex-row w-full">
            <div className="flex flex-col items-center space-x-4 px-4">
              {" "}
              {/* Added space-y-4 */}
              <img
                src={Josh}
                alt="Person 1"
                className="w-80 h-auto object-contain"
              />
              <p className="text-center text-green font-semibold">
                JOSH STUCKY
              </p>
              <p className="text-center text-gray-600">GENERAL MANAGER</p>
            </div>
            <div className="flex flex-col items-center space-x-4 md:space-y-0 md:space-x-2">
              <img
                src={Ingrid}
                alt="Person 2"
                className="w-80 h-auto object-contain"
              />
              <p className="text-center text-green font-semibold">
                INGRID BORJAS
              </p>
              <p className="text-center text-gray-600">OPERATIONS MANAGER</p>
            </div>
            <div className="flex flex-col items-center space-x-4 px-4">
              {" "}
              {/* Added space-y-4 */}
              <img
                src={Chris}
                alt="Person 3"
                className="w-80 h-auto object-contain"
              />
              <p className="text-center text-green font-semibold">
                CHRIS HUTCHINSON
              </p>
              <p className="text-center text-gray-600">COURSE SUPERINTENDENT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8"></div>

      <LeaveAMessage />
      <Footer />
    </>
  );
};

export default AboutView;
