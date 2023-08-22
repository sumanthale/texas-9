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
      <MiniHeader heading={"Community"} subHeading={""} image={CommunityHeader}/>
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6 gap-x-12  pt-6 w-full lg:max-w-[90vw] mx-auto px-4">
        <div className="md:col-span-4 md:order-last mb-2 ">
          <p className="block md:hidden text-justify mb-6">
            {/* Nestled amidst rolling hills and picturesque landscapes, the quaint
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
            Texas 9 are sure to relish in its tranquil charm and natural beauty. */}
          </p>
          
           

         
        </div>

        <div className="md:col-span-12">
          <p className=" md:block text-justify mb-6">
          At our golf course, we recognize that the heart of our establishment is the vibrant community that forms around our greens.
          We understand that golf is more than just a game - it's a catalyst for connections. Our course serves as a gathering place where individuals come together to share their love for the sport.
          forge lasting friendships. and create cherished memories. Whether vou're E seasoned golfer or new to the game, our inclusive atmosphere welcomes all. From casual rounds to engaging tournaments and social events. 
          our communitv brinas enthusiasts and pavers of a skieves closer fostering an environment of camaraderie that sets us apart. Join us to experience the true essence of aot and the power of communitv on and oft the tairwavs
          </p>
          <img
            src={Campus}
            alt="Golf Course"
            className="object-fill"
            style={{ width: "100%", height: "auto", maxHeight: "450px" }}
          />
{/* 
<img
  src={Campus}
  alt="Golf Course"
  className="object-cover w-full h-[350px]"
  style={{ width: "100%", height: "auto", maxHeight: "350px" }}
/> */}

           {/* <div className="bg-[#172649] font-primary p-4">

            </div> */}

<div className="bg-[#172649] font-primary p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 text-white uppercase">team enoch</h2>
      <p className="text-white mb-4">
      Team Enoch's roots are right here, in DFW serving the community with all their HVAC,
Electrical, Flumming and Roofing needs!
      </p>
      <button className= "text-white py-2 px-4 rounded">
        {/* <a href="https://www.teamenoch.com" target="_blank">
        LEARN MORE!
        </a> */}
         <Link to="https://www.teamenoch.com">
                Plan Your Visit
              </Link>
      </button> 
       {/* <a href="https://www.teamenoch.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <button className="py-2 px-4 rounded bg-blue-500">
          LEARN MORE!
        </button>
      </a> */}
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 text-white">TEXAS HEALTH SPORTS MEDICINE</h2>
      <p className="text-white mb-4">
      Whether you're a young athlete or weekend warrior, Texas Health Sports Medicine delivers care for injuries
      nutrition. pnvsical therapv and more
      </p>
      <button className=" text-white py-2 px-4 rounded">
        LEARN MORE!
      </button>
    </div>
  </div>
</div>

<div className="md:col-span-12 text-center mb-4 p-1">
    <h2 className="text-brown text-xl font-semibold mb-2 uppercase">Who We Work With</h2>
  </div>



<div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-4 border-2 gap-4 mb-8 border-red-800">
            <div className="h-full w-full col-span-1 flex justify-end border-brown border">
            
                <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${KJCF})`,
                  }}
                >
                </div>
              
            </div>

            <img
            src={KJCFLOGO}
            alt="Golf Course"
            className="object-fill lg:col-span-1"
            style={{ width: "100%", height: "auto", maxHeight: "450px" }}
          />

            <div className="bg-white flex flex-col justify-between md:pr-24 relative col-span-2">
              <p className="tracking-wide text-xl font-primary  font-semibold  my-3 text-justify">
                kJ Choi foundation was established to invest in the dreams of talented children with a
                vision to build a brighter future for everyone.
                in return, as adults they will give back to the
                community, the support they received
              </p>
            
              <button className="text-brown py-2 px-2 rounded border-brown border inline-flex items-center" style={{ border: "1px solid #8B4513" }}>
                CHECK THEM OUT!
              </button>
            </div>
          
        </div>


        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-2 gap-4 mb-8 border-red-800">
           

            <div className="bg-white flex flex-col justify-between md:pr-24 relative col-span-2">
            <img
            src={FIRSTTEELOGO}
            alt="Golf Course"
            className="object-fill lg:col-span-1"
            style={{ width: "60%", height: "auto", maxHeight: "350px" }}
          />
              <p className="tracking-wide text-xl font-primary  font-semibold  my-3 text-justify md:px-6">
              First Tee is a youth development organization that enables kids to bulld the strength of character that empowers them through a lifetime of new challenges.
              By seamlessly integrating the game of golf with a life skills curriculum, we create active learning experiences that build inner strength, self-confidence, and resilience
              that kids can carry to everything they do. We're Building Game Changers through our junior golf programs.
              </p>
              {/* <p className="tracking-wide text-4xl font-primary text-justify font-bold   text-red-800">
                NO CLUB FEES! OPEN TO THE PUBLIC!
              </p> */}
               <button className=" text-black py-2 px-4 rounded">
                CHECK THEM OUT!
              </button>
            </div>

            <div className="h-full w-full col-span-1">
            
            <div
              className="w-full carousel-image-item h-80 bg-cover bg-center"
              style={{
                backgroundImage: `url(${FirstTee})`,
              }}
            >
            </div>
          
        </div>
          
        </div>

        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-2 gap-4 mb-8 border-red-800">
            <div className="h-full w-full col-span-1">
            
                <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${YOC})`,
                  }}
                >
                </div>
              
            </div>

            {/* <img
            src={YOCLOGO}
            alt="Golf Course"
            className="object-fill lg:col-span-1"
            style={{ width: "100%", height: "auto", maxHeight: "450px" }}
          /> */}

            <div className="bg-white flex flex-col justify-between md:pr-24 relative col-span-2">
            <img
            src={YOCLOGO}
            alt="Golf Course"
            className="object-fill lg:col-span-1"
            style={{ width: "60%", height: "auto", maxHeight: "450px" }}
          />
              <p className="tracking-wide text-xl font-primary  font-semibold  my-3 text-justify">
                The core purpose of Youth on Course is to provide youth with access to life-changing oppurtunities through golf.
                YOC members gain oppurtunities through paid high school internships, college scholarships and more, all while forging lifelong connections.
              </p>
              {/* <p className="tracking-wide text-4xl font-primary text-justify font-bold   text-red-800">
                NO CLUB FEES! OPEN TO THE PUBLIC!
              </p> */}
               <button className=" text-black py-2 px-4 rounded">
                CHECK THEM OUT!
              </button>
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
