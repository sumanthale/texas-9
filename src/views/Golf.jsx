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
    <div>
      <MiniHeader heading={"Golf"} subHeading={""} />
      <div className="bg-white">
        <div className="font-primary p-5 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="md:col-span-1 md:order-last">
              <div className="border-2 border-green-500 gap-4 p-4 border-green-500" style={{ paddingBottom: "1200px", borderWidth: "2px", maxWidth: "90%" }}>
                {/* Content */}
                9-HOLE EXECUTIVE COURSE
                {/* ... rest of the text */}
              </div>
            </div>
            <div className="md:col-span-1 p-4">
              Nestled amidst rolling hills and picturesque landscapes, the quaint 9-hole golf course offers a delightful escape for both novice and experienced golfers alike. 
              Its compact layout weaves through lush green fairways, bordered by gently swaying trees and strategically placed bunkers that provide just the right amount of challenge. 
              With each hole presenting a unique set of obstacles, golfers can enjoy a leisurely yet engaging round of golf, perfect for a quick game or a relaxing afternoon outing. 
              The course's intimate setting fosters a sense of community, where players can socialize and share their passion for the game in a serene environment. 
              Whether seeking a casual round or an opportunity to refine their skills, visitors to Texas 9 are sure to relish in its tranquil charm and natural beauty.
              <img src={MapCourse} alt="Golf Course" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
          </div>
          {/* <div className="bg-pattern" style={{ backgroundImage: `url(${GolfBallPattern})`, backgroundSize: "cover", backgroundPosition: "center", marginTop: "20px"  }}></div> */}
          <div className="bg-pattern" style={{ 
            backgroundImage: `url(${GolfBallPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "20px",
            width: "100%", // Add this to ensure the background covers the entire width
            height: "300px", // Adjust the height as needed
            zIndex: -1
          }}>

<div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "black", textAlign: "center" }}>
Nestled amidst rolling hills and picturesque landscapes, the quaint 9-hole golf course offers a delightful escape for both novice and experienced golfers alike. 
              Its compact layout weaves through lush green fairways, bordered by gently swaying trees and strategically placed bunkers that provide just the right amount of challenge. 
              With each hole presenting a unique set of obstacles, golfers can enjoy a leisurely yet engaging round of golf, 
            </div>

          </div>
        </div>
        <div className="h-full w-full col-span-1">
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
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf1})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf2})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf3})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf4})`,
                  }}
                ></div>
                 <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf5})`,
                  }}
                ></div>
                 <div
                  className="w-full carousel-image-item h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Golf6})`,
                  }}
                ></div>
              </Carousel>
            </div>
      </div>
      <LeaveAMessage />
      <Footer />
    </div>
  );
};

export default Golf;
