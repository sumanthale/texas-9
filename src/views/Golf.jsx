// import React from "react";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import { LiaGolfBallSolid } from "react-icons/lia";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import MapCourse from "../assets/golf/mapcourse.png";
import Golf1 from "../assets/golf/golf1.png";
import Golf2 from "../assets/golf/golf2.png";
import Golf3 from "../assets/golf/golf3.png";
import Golf4 from "../assets/golf/golf4.png";
import Golf5 from "../assets/golf/golf5.png";
import Golf6 from "../assets/golf/golf6.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Carousel } from "react-responsive-carousel";
import GolfBallPattern from "../assets/golf/golfballpattern.png";

const Golf = () => {
  return (
    <>
      <MiniHeader heading={"Golf"} subHeading={""} />
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6  pt-6 px-8">
        <div className="md:col-span-4 md:order-last mb-2">
          <p className="block md:hidden text-justify mb-6">
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
          </p>
          <div className="border-2 gap-4 p-4 border-[#7da33f]" style={{}}>
            <h1 className="text-[#7da33f] font-bold text-2xl text-center">
              9 HOLE EXECUTIVE COURSE
            </h1>
            <div className="px-2">
              <p className="text-left  my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                cumque earum doloribus blanditiis exercitationem sunt voluptatem
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

            <h1 className="text-[#7da33f] font-bold text-2xl  uppercase my-3 text-left">
              Driving range
            </h1>
            <div className="px-2">
              <p className="text-left my-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                cumque earum doloribus blanditiis exercitationem sunt voluptatem
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

              <button className="uppercase outline  outline-1 px-2 text-[#7da33f] w-full text-xl my-3 tracking-wider outline-[#7da33f] ">
                play more save more with a membership!
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <p className="hidden md:block text-justify mb-6">
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
          </p>
          <img
            src={MapCourse}
            alt="Golf Course"
            className="object-fill"
            style={{ width: "100%", height: "auto", maxHeight: "350px" }}
          />
          <div
            className="bg-pattern grid grid-col-1  md:grid-cols-10 relative bg-contain md:bg-cover"
            style={{
              backgroundImage: `url(${GolfBallPattern})`,
              marginTop: "10px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="absolute text-xl md:text-3xl font-bold left-10">
              KNOW THE ETIQUTTE
            </h1>
            <div className="md:col-start-4 md:col-span-4 pl-1 pt-10 text-sm">
              <li>Lorem ipsum dolor sit amet sit amet </li>
              <li>Lorem ipsum dolor sit amet sit amet </li>
              <li>Lorem ipsum dolor sit amet sit amet </li>
              <li>Lorem ipsum dolor sit amet sit amet </li>
              <li>Lorem ipsum dolor sit amet sit amet </li>
              <li>Lorem ipsum dolor sit amet sit amet </li>
              <li>Lorem ipsum dolor sit amet sit amet </li>
              <li>Lorem ipsum dolor sit amet sit amet </li>
              <li>Lorem ipsum dolor sit amet sit amet </li>
              <li>Lorem ipsum dolor sit amet sit amet </li>
            </div>

            <div className="md:col-span-3 py-4">
              <Carousel
                autoPlay
                infiniteLoop
                swipeable={false}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={4000}
                stopOnHover={false}
                className="carousel"
                style={{ maxHeight: "100%", maxWidth: "60%", margin: "0 auto" }}
              >
                <div
                  className="w-full carousel-image-item h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf1})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf2})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf3})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf4})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf5})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf6})`,
                  }}
                ></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <LeaveAMessage />
      <Footer />
    </>
  );
};

export default Golf;
