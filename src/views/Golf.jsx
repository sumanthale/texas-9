// import React from "react";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import { LiaGolfBallSolid } from "react-icons/lia";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import MapCourse from "../assets/golf/mapcourse.png";
import Golf1 from "../assets/golf/golf-1.png";
import Golf2 from "../assets/golf/golf-2.png";
import Golf3 from "../assets/golf/golf-3.png";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Carousel } from "react-responsive-carousel";
import GolfBallPattern from "../assets/golf/golfballpattern.png";

const Golf = () => {
  return (
    <>
      <MiniHeader heading={"Golf"} subHeading={""} />
      <div className="grid grid-cols-1  md:grid-cols-12 pt-6 w-full max-w-[90vw] mx-auto px-4">
        <div className="col-span-12 mb-2 ">
          <div className="text-justify font-primary font-semibold">
            Nestled amidst rolling hills and picturesque landscapes, the quaint
            9-hole golf course offers a delightful escape for both novice and
            experienced golfers alike. Its compact layout weaves through lush
            green fairways, bordered by gently swaying trees and strategically
            placed bunkers that provide just the right amount of challenge. With
            each hole presenting a unique set of obstacles, golfers can enjoy a
            leisurely yet engaging round of golf, perfect for a quick game or a
            relaxing afternoon outing. The course's intimate setting fosters a
            sense of community, where players can socialize and share their
            passion for the game in a serene environment. Whether seeking a
            casual round or an opportunity to refine their skills, visitors to
            Texas 9 are sure to relish in its tranquil charm and natural beauty.
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <img
            src={MapCourse}
            alt="Golf Course"
            className="object-fill col-span-8"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="col-span-4 flex  flex-col items-center justify-around space-y-4">
            <div>
              <button className="uppercase outline outline-1 px-2 text-[#7da33f] text-xl tracking-wider outline-[#7da33f]">
                <Link
                  to="/tee-times"
                  className="block w-full h-full font-GBook"
                >
                  Book Your Tee Time
                </Link>
              </button>
            </div>
            <div>
              <button className="uppercase outline outline-1 px-2 text-maroon text-xl tracking-wider outline-[#791214]">
                <Link
                  to="/tee-times"
                  className="block w-full h-full font-GBook"
                >
                  PLAY MORE SAVE MORE WITH A MEMBERSHIP!
                </Link>
              </button>
            </div>
            <div>
              <button className="uppercase outline outline-1 px-2 text-violet text-xl tracking-wider outline-[#172649]">
                <Link
                  to="/tee-times"
                  className="block w-full h-full font-GBook"
                >
                  BOOK A PRIVATE LESSON
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <div
            className="bg-pattern grid grid-col-1  md:grid-cols-10 relative bg-contain md:bg-cover opacity-80"
            style={{
              marginTop: "10px",
            }}
          >
            <img
              src={GolfBallPattern}
              alt="balls"
              className="absolute -z-10 -left-20"
            />
            <h1 className="absolute text-xl md:text-3xl font-bold left-10">
              KNOW THE ETIQUTTE
            </h1>
            <ul className="list-disc md:col-start-2 md:col-span-6 pt-10 mx-auto px-6 place-self-center font-primary font-semibold">
              <li>show up early to take advantage of your tee time </li>
              <li>obey the cart rules & stay on the path </li>
              <li>warm up with three balls</li>
              <li>don't talk & stand away </li>
              <li>only look tor a lost ball for three min </li>
              <li>be respectful of time and play at an appropriate pace </li>
              <li>be prepared to play when its yourtime to go </li>
              <li>stay off your phone as much as you can</li>
              <li>yell FORE when a ball is going toward another person </li>
              <li>fix your ball mark after you hit when on the green </li>
            </ul>

            <div className="md:col-span-3 py-4 flex flex-col lg:flex-row gap-4 mx-auto">
              <img
                src={Golf1}
                alt="Golf Course"
                className="object-fill"
                style={{
                  width: "80%",
                  height: "auto",
                  maxHeight: "420px",
                  marginRight: "30px",
                }}
              />
              <img
                src={Golf2}
                alt="Golf Course"
                className="object-fill"
                style={{
                  width: "80%",
                  height: "auto",
                  maxHeight: "420px",
                  marginRight: "30px",
                }}
              />

              <img
                src={Golf3}
                alt="Golf Course"
                className="object-fill"
                style={{ width: "80%", height: "auto", maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <LeaveAMessage header={"HAVE QUESTIONS?"} />
      <Footer />
    </>
  );
};

export default Golf;
