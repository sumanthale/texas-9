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

        <div className="md:col-span-12">
  <div className="hidden md:flex justify-center items-center h-full">
    <div className="max-w-2xl mx-auto px-18">
      <p className="text-center">
        Our versatile event spaces are ready to host your memorable moments, whether it's a birthday party, corporate event, or any other celebration.
        Our dedicated team will ensure every detail is taken care of, leaving you free to enjoy the festivities.
      </p>
      <p className="text-center">
        Our banquet room is 1800 sq ft & can fit 125 guests.
      </p>
    </div>
  </div>
</div>


      </div>



<div className="col-span-1 md:col-span-2 flex justify-center items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:mx-16">
      <img
        src={Event1}
        alt="Event 1"
        className="object-fill h-full"
        style={{ width: "100%",  maxHeight: "450px" }}
      />
      <img
        src={Event2}
        alt="Event 2"
        className="object-fill h-full"
        style={{ width: "100%", maxHeight: "450px" }}
      />
    </div>
  </div>

  <div className="px-4 py-8">

       
       </div>
       <LeaveAMessage /> 
      <Footer />
    </>
  );
};

export default EventView;
