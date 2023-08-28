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
import CommunityHeader from "../assets/golf/community-header.png";
import Campus from "../assets/golf/campus.png";
import KJCF from "../assets/golf/kjcf.png";
import YOC from "../assets/golf/YOC.png";
import FirstTee from "../assets/golf/first-tee.png";
import FIRSTTEELOGO from "../assets/golf/FIRSTTEE-logo.png";
import KJCFLOGO from "../assets/golf/KJCF-logo.png";
import YOCLOGO from "../assets/golf/YOC-logo.png";

const Community = () => {
  return (
    <>
      <MiniHeader
        heading={"Community"}
        subHeading={""}
        image={CommunityHeader}
      />
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6 gap-x-12  pt-6 w-full mx-auto font-primary font-semibold">
        <div className="md:col-span-12">
          <p className=" md:block text-justify mb-6 mx-auto  max-w-[90vw] text-lg font-semibold ">
            At our golf course, we recognize that the heart of our establishment
            is the vibrant community that forms around our greens. We understand
            that golf is more than just a game - it's a catalyst for
            connections. Our course serves as a gathering place where
            individuals come together to share their love for the sport. forge
            lasting friendships. and create cherished memories. Whether you're E
            seasoned golfer or new to the game, our inclusive atmosphere
            welcomes all. From casual rounds to engaging tournaments and social
            events. our communitv brinas enthusiasts and pavers of a skieves
            closer fostering an environment of camaraderie that sets us apart.
            Join us to experience the true essence of aot and the power of
            communitv on and oft the tairwavs
          </p>
          <div className="relative">
            <img
              src={Campus}
              alt="Golf Course"
              className="object-fill"
              style={{ width: "100%", height: "auto", maxHeight: "450px" }}
            />

            <div className=" flex items-center justify-center">
              <div className="absolute top-8 lg:top-2 w-full grid grid-cols-2 place-items-center">
                <p className="font-bold justify-self-center absolute text-center text-5xl font-DinCondensed">
                  Texas 9 Campus
                </p>
                <p></p>
                <p className="  text-center  font-bold max-w-sm hidden md:block">
                  Texas 9 has the honor of sharing it's clubhouse and campus
                  with a few local companies that make us who we are?
                </p>
              </div>
            </div>

            {/* <div className="relative flex items-center justify-center">
            <div className="absolute top-2 w-full flex justify-center">
              <div className="grid grid-cols-3 place-items-center">
                <p className="text-center text-4xl font-bold">
                  Texas 9 Campus
                </p>
                <p className="text-center font-bold max-w-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores saepe incidunt non. Iusto neque accusantium vel odit
                  porro, explicabo nisi voluptate esse
                </p>
              </div>
            </div>
          </div> */}
          </div>

          <div className="bg-[#172649] font-primary font-semibold p-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-10  mx-auto  lg:max-w-[80vw] text-center md:text-start">
              <div className="p-4 lg:pl-10">
                <h2 className="font-semibold mb-2 text-white uppercase text-5xl font-DinCondensed">
                  team enoch
                </h2>
                <p className="text-white mb-4 text-lg">
                  Team Enoch's roots are right here, in DFW serving the
                  community with all their HVAC, Electrical, Plumbing and
                  Roofing needs
                </p>
                <button className="text-white py-2 px-4 rounded border-2 font-GBook font-semibold ">
                  <Link to="https://www.teamenoch.com" target={"_blank"}>
                    {" "}
                    LEARN MORE
                  </Link>
                </button>
              </div>
              <div className="p-4 lg:pl-10">
                <h2 className="text-5xl font-DinCondensed font-semibold mb-2 text-white">
                  TEXAS HEALTH SPORTS MEDICINE
                </h2>
                <p className="text-white mb-4 text-lg">
                  Whether you're a young athlete or weekend warrior, Texas
                  Health Sports Medicine delivers care for injuries nutrition.
                  pnvsical therapv and more
                </p>
                <button className=" text-white py-2 px-4 rounded border-2 font-GBook font-semibold">
                  <Link to="https://www.texashealth.org" target={"_blank"}>
                    {" "}
                    LEARN MORE
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-12 text-center my-4 p-1">
            <h2 className="text-brown text-3xl lg:text-5xl font-DinCondensed font-semibold mb-2 uppercase">
              Who We Work With
            </h2>
          </div>

          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-4 border-4 gap-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
            <div className="h-full w-full col-span-1 flex justify-end ">
              <div
                className="w-full carousel-image-item  bg-cover bg-center h-60 lg:h-auto border-b-4 lg:border-r-4 lg:border-b-0 "
                style={{
                  backgroundImage: `url(${KJCF})`,
                  borderColor: "#8B4513",
                }}
              ></div>
            </div>

            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 p-4 gap-6">
              <div className="flex flex-col  items-center">
                <img
                  src={KJCFLOGO}
                  alt="Golf Course"
                  className="object-fill "
                  style={{ width: "100%", height: "auto", maxHeight: "450px" }}
                />
                <button
                  className=" mt-4 mx-autoblock lg:hidden text-brown py-2 px-8 rounded border-brown border text-xl tracking-wide w-fit  col-span-3 font-GBook font-semibold"
                  style={{ border: "2px solid #8B4513" }}
                >
                  CHECK THEM OUT
                </button>
              </div>
              <p className="lg:col-span-2 tracking-wide text-xl font-primary  font-semibold my-3 text-justify">
                kJ Choi foundation was established to invest in the dreams of
                talented children with a vision to build a brighter future for
                everyone. in return, as adults they will give back to the
                community, the support they received
              </p>
              <a
                href="http://kjchoi.igearmall.biz/eng/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block  text-brown py-2 px-8 rounded border-brown border text-xl tracking-wide w-fit  col-span-3 font-GBook font-semibold"
                style={{ border: "2px solid #8B4513" }}
              >
                CHECK THEM OUT
              </a>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
            <div className="bg-white flex flex-col justify-between relative col-span-2 p-4">
              <img
                src={FIRSTTEELOGO}
                alt="Golf Course"
                className="object-fill lg:col-span-1"
                style={{ width: "50%", height: "auto", maxHeight: "350px" }}
              />
              <p className="tracking-wide text-xl my-3 text-justify font-primary font-semibold">
                First Tee is a youth development organization that enables kids
                to bulld the strength of character that empowers them through a
                lifetime of new challenges. By seamlessly integrating the game
                of golf with a life skills curriculum, we create active learning
                experiences that build inner strength, self-confidence, and
                resilience that kids can carry to everything they do. We're
                Building Game Changers through our junior golf programs.
              </p>
              <a
                href="https://firsttee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown py-2 px-8 rounded border-brown border text-xl tracking-wide w-fit  col-span-3 font-GBook font-semibold"
                style={{ border: "2px solid #8B4513" }}
              >
                CHECK THEM OUT
              </a>
            </div>

            <div className="h-full w-full col-span-1">
              <div
                className="w-full carousel-image-item h-[370px] bg-cover bg-center border-t-4 lg:border-l-4 lg:border-t-0"
                style={{
                  backgroundImage: `url(${FirstTee})`,
                  borderColor: "#8B4513",
                }}
              ></div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
            <div className="h-full w-full col-span-1">
              <div
                className="w-full carousel-image-item h-[360px]  bg-cover bg-center  border-b-4 lg:border-r-4 lg:border-b-0"
                style={{
                  backgroundImage: `url(${YOC})`,
                  borderColor: "#8B4513",
                }}
              ></div>
            </div>

            <div className="bg-white flex flex-col justify-between md:pr-24 relative col-span-2 p-4">
              <img
                src={YOCLOGO}
                alt="Golf Course"
                className="object-fill lg:col-span-1"
                style={{ width: "60%", height: "auto", maxHeight: "450px" }}
              />
              <p className="tracking-wide text-xl font-primary  font-semibold  my-2 text-justify">
                The core purpose of Youth on Course is to provide youth with
                access to life-changing oppurtunities through golf. YOC members
                gain oppurtunities through paid high school internships, college
                scholarships and more, all while forging lifelong connections.
              </p>
              <a
                href="https://youthoncourse.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown py-2 px-8 rounded border-brown border text-xl tracking-wide w-fit  col-span-3 font-GBook font-semibold"
                style={{ border: "2px solid #8B4513" }}
              >
                CHECK THEM OUT
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <LeaveAMessage /> */}
      <Footer />
    </>
  );
};

export default Community;
