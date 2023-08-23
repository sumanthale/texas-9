// import MiniHeader from "../layout/MainLayout/MiniHeader";
// import Footer from "../reusable/Footer";
// import LeaveAMessage from "../components/Home/LeaveAMessage";
// import AboutImage from "../assets/images/about-image.jpg";
// import LogoImg from "../assets/logos/Texas 9 Golf.png";
// import AboutHeader from "../assets/golf/about-header.jpg";
// const AboutView = () => {
//   return (
//     <div>
//       <MiniHeader heading={"About Us"} subHeading={""} image={AboutHeader} />
//       <div className=" bg-[#162649]  pt-6 font-primary">
//         <div className="p-8 grid grid-cols-1 gap-6 w-full mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 ">
//             <div
//               className=" bg-cover bg-center h-[300px] sm:h-[500px] lg:h-auto"
//               style={{
//                 backgroundImage: `url(${AboutImage})`,
//               }}
//             ></div>
//             <div className="bg-white p-10 flex flex-col items-center  relative">
//               <h1 className="uppercase tracking-wide text-4xl font-primary font-bold  text-center mt-6">
//                 <img src={LogoImg} alt="hGolfMobility" className="h-24" />
//               </h1>
//               <p className="tracking-wide text-xl font-primary text-center font-semibold  my-3 ">
//                 Hailed as one of the best executive golf courses in DFW, our
//                 course was designed by Steven D. Plumber, ASGCA, and opened in
//                 1999. The course was created to be a public course, filling a
//                 niche in DFW so the greater community can have better access to
//                 the benefits of golf. Formerly known as Texas Golf Center, the
//                 course came under new management in 2023 with an explicit
//                 interest in adding new amenities and reinforcing the best
//                 aspects of the course.
//               </p>
//               <p className="tracking-wide text-xl font-primary text-center font-semibold  my-3 ">
//                 After 24 years of operating, the course remains a mainstay in
//                 the DFW area as a location for PGA training, annual tournaments,
//                 and golf enjoyed by all.
//               </p>
//             </div>
//           </div>
//           <div className="bg-[#7da33f] p-8">
//             <h1 className="text-center text-4xl  font-medium  text-white mb-10">
//               OUR TEAM
//             </h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center text-white">
//               <div>
//                 <h1 className="text-xl font-semibold tracking-wide">
//                   JOSH STUCKEY
//                 </h1>
//                 <h1 className="text-xl font-semibold tracking-wide">
//                   General Manager
//                 </h1>
//               </div>
//               <div>
//                 <h1 className="text-xl font-semibold tracking-wide">
//                   INGRID BORJAS
//                 </h1>
//                 <h1 className="text-xl font-semibold tracking-wide">
//                   Operations Manager
//                 </h1>
//               </div>
//               <div>
//                 <h1 className="text-xl font-semibold tracking-wide">
//                   CHRIS HUTCHINSON
//                 </h1>
//                 <h1 className="text-xl font-semibold tracking-wide">
//                   Course Superintendent
//                 </h1>
//               </div>
//               <div>
//                 <h1 className="text-xl font-semibold tracking-wide">
//                   VICKI MUSENGO
//                 </h1>
//                 <h1 className="text-xl font-semibold tracking-wide">
//                   Event Coordinator
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <LeaveAMessage header={"LEAVE A MESSAGE"} />
//       <Footer />
//     </div>
//   );
// };

// export default AboutView;


import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import ABOUTHEADER from "../assets/golf/about-header.png";
import Ingrid from "../assets/golf/about-ingrid.png";
import Josh from "../assets/golf/about-josh.png";
import Chris from "../assets/golf/about-chris.png";
import LeaveAMessage from "../components/Home/LeaveAMessage";
const AboutView = () => {
  return (
    <>
      <MiniHeader heading={"About Us"} subHeading={""} image={ABOUTHEADER}/>
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
          <div className="hidden md:block pl-4 lg:pl-20">
            <p className="text-justify ">
            Hailed as one of the best executive golf courses in DFW, our course was designed by Steven D. 
            Plumber, ASGCA, and opened in 1999. 
            The course was created to be a public course, filling a niche in DFW so the greater community can have better access to the benefits of golf. 
            Formerly known as Texas Golf Center, the course came under new management in 2023 with an explicit interest in adding new amenities and reinforcing the best aspects of the course. 
            After 24 years of operating, the course remains a mainstay in the DW area as a location for PGA training, annual tournaments, and golf enjoyed by all.
            </p>
           
          </div>

        
        </div>
      </div>


<div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-2 gap-4 p-4 border-green-800 border-r-0">
  <div className="h-full w-full col-span-3">
    <div className="md:col-span-12 text-center mb-4 p-1">
      <h2 className="text-green text-xl font-semibold mb-2 uppercase">Meet The Team</h2>
    </div>
    <div className="flex justify-between flex-col md:flex-row w-full">
      <div className="flex flex-col items-center space-x-4 px-4"> {/* Added space-y-4 */}
        <img
          src={Josh}
          alt="Person 1"
          className="w-80 h-auto object-contain"
        />
        <p className="text-center text-green font-semibold">JOSH STUCKY</p>
        <p className="text-center text-gray-600">GENERAL MANAGER</p>
      </div>
      <div className="flex flex-col items-center space-x-4 md:space-y-0 md:space-x-2">
        <img
          src={Ingrid}
          alt="Person 2"
          className="w-80 h-auto object-contain"
        />
        <p className="text-center text-green font-semibold">INGRID BORJAS</p>
        <p className="text-center text-gray-600">OPERATIONS MANAGER</p>
      </div>
      <div className="flex flex-col items-center space-x-4 px-4"> {/* Added space-y-4 */}
        <img
          src={Chris}
          alt="Person 3"
          className="w-80 h-auto object-contain"
        />
        <p className="text-center text-green font-semibold">CHRIS HUTCHINSON</p>
        <p className="text-center text-gray-600">COURSE SUPERINTENDENT</p>
      </div>
    </div>
  </div>
</div>







              <div className="px-4 py-8">
 
</div>

<LeaveAMessage />
  <Footer />

       {/* <LeaveAMessage />  */}
      
    </>
  );
};

export default AboutView;
