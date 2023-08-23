import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import EVENTSHEADER from "../assets/golf/events-header.png";
import Event1 from "../assets/golf/event-1.png";
import Event2 from "../assets/golf/event-2.png";
import LeaveAMessage from "../components/Home/LeaveAMessage";
const EventView = () => {
  return (
    <>
      <MiniHeader heading={"EVENTS"} subHeading={""} image={EVENTSHEADER}/>
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6 gap-x-10  pt-6  lg:pr-20 pb-6">
        <div className="md:col-span-4 md:order-last mb-2 pr-4  pl-4 ">
          <div className="block md:hidden pl-4 lg:pl-20">
            <p className="text-justify ">
              Tee up for success with golf lesson Whether you're new to the game
              or looking to refine your skills, our experienced instructors are
              here to elevate your swing. Join us for engaging lessons that
              cover everything from putting to driving, all set against the
              backdrop of our scenic course. With our limited-time offer, now is
              the perfect time to take your golf game to the next level. Don't
              miss out on this opportunity to improve your game and enjoy the
              greens like never before!
            </p>
            <div className="py-4 pr-4 lg:pr-0 ">
             
            </div>
          </div>
         
        </div>

       <div className="md:col-span-8">
  <div className="hidden md:block pl-4 lg:pl-20 flex justify-center items-center h-full">
    <p className="text-center">
      Our versatile event spaces are ready to host your memorable moments, whether it's a birthday party, corporate event, or any other celebration.
      Our dedicated team will ensure every detail is taken care of, leaving you free to enjoy the festivities.
      Our banquet room is 1800 sq ft & can fit 125 guests.
    </p>
  </div>
</div>

      </div>

      {/* <img
            src={Event1}
            alt="Golf Course"
            className="object-fill lg:col-span-1"
            style={{ width: "100%", height: "auto", maxHeight: "450px" }}
          />

      <img
            src={Event2}
            alt="Golf Course"
            className="object-fill lg:col-span-1"
            style={{ width: "100%", height: "auto", maxHeight: "450px" }}
          /> */}


<div className="col-span-1 md:col-span-2 flex justify-center items-center">
    <div className="grid grid-cols-2 gap-4">
      <img
        src={Event1}
        alt="Event 1"
        className="object-fill"
        style={{ width: "100%", height: "auto", maxHeight: "450px" }}
      />
      <img
        src={Event2}
        alt="Event 2"
        className="object-fill"
        style={{ width: "100%", height: "auto", maxHeight: "450px" }}
      />
    </div>
  </div>

       <LeaveAMessage /> 
      <Footer />
    </>
  );
};

export default EventView;
