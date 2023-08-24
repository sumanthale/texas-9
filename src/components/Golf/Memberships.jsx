import React, { useState } from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import MembershipHeader from ".././../assets/golf/membership-header.png";
import MembershipFitness from ".././../assets/golf/membership-fitness.png";
import MembershipRange from ".././../assets/golf/membership-range.png";
// ... (other import statements)

const Membership = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  
  return (
    <div>
      <MiniHeader heading={"Memberships"} image={MembershipHeader} />
      <div className="md:col-span-12 text-center my-4 p-1">
        <h2 className="text-brown text-3xl lg:text-5xl font-semibold mb-2 uppercase">
          YEARLY MEMBERSHIPS
        </h2>
      </div>

      <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 border-4 gap-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
        {/* Part A: Texas 9 Member */}
        <div className="col-span-1 lg:col-span-1 p-4">
          <div className="flex flex-col items-center">
            {/* Display your logo or other content */}
          </div>
          <p className="tracking-wide text-xl font-primary font-semibold my-3 text-justify">
          <h1 className="text-[#7da33f] font-bold text-2xl text-center my-4">
          TEXAS 9 MEMBER
            </h1>
            <div className="px-2 text">
              <p className="text-left  my-4">
              Texas 9 Members receive priority access to the course and unlimited access the driving range, full access to the gym & 15% off yoga.
              </p>

              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                INDIVIDUAL - $1,069
                  <br />
                  
                
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                ADDITONAL FAMILY - $540/PERSOn
                *up to 4 additional familv members    
                  <br />
                 
                 
                </li>
              </ul>

             
            </div>
          </p>
        </div>

        {/* Part B: Range Member */}
        <div className="col-span-1 lg:col-span-1 p-4">
          <div className="flex flex-col items-center">
            {/* Display your logo or other content */}
          </div>
          <p className="tracking-wide text-xl font-primary font-semibold my-3 text-justify">
          <h1 className="text-[#7da33f] font-bold text-2xl text-center my-4">
             RANGE MEMEBER
            </h1>
            <div className="px-2 text">
              <p className="text-left  my-4">
              Texas 9 Range Members receive unlimited access to the driving range anytime day or night to perfect their swing.
              </p>

              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                INDIVIDUAL - $756
                  <br />
                  
                
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                ADDITIONAL FAMILY - $324/PERSOn
                *up to 4 additional family members
                  <br />
                 
                 
                </li>
              </ul>

             
            </div>

          </p>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:mx-16">
          <img
            src={MembershipFitness}
            alt="Event 1"
            className="object-fill h-full"
            style={{ width: "100%", maxHeight: "450px" }}
          />
          <img
            src={MembershipRange}
            alt="Event 2"
            className="object-fill h-full"
            style={{ width: "100%", maxHeight: "450px" }}
          />
        </div>
      </div>

      <div className="md:col-span-12 text-center my-4 p-1">
        <h2 className="text-brown text-3xl lg:text-5xl font-semibold mb-2 uppercase">
          MONTHLY MEMBERSHIPS
        </h2>
      </div>

      <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 border-4 gap-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
        {/* Part A: Texas 9 Member */}
        <div className="col-span-1 lg:col-span-1 p-4">
          <div className="flex flex-col items-center">
            {/* Display your logo or other content */}
          </div>
          <p className="tracking-wide text-xl font-primary font-semibold my-3 text-justify">
          <h1 className="text-[#7da33f] font-bold text-2xl text-center my-4">
          TEXAS 9 MEMBER
            </h1>
            <div className="px-2 text">
              <p className="text-left  my-4">
              Texas 9 Members receive priority access to the course and unlimited access the driving range, full access to the gym & 15% off yoga.
              </p>

              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                INDIVIDUAL - $99
                  <br />
                  
                
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                ADDITONAL FAMILY - $50/PERSOn
                *up to 4 additional family members
                  <br />
                 
                 
                </li>
              </ul>

             
            </div>
          </p>
        </div>

        {/* Part B: Range Member */}
        <div className="col-span-1 lg:col-span-1 p-4">
          <div className="flex flex-col items-center">
            {/* Display your logo or other content */}
          </div>
          <p className="tracking-wide text-xl font-primary font-semibold my-3 text-justify">
          <h1 className="text-[#7da33f] font-bold text-2xl text-center my-4">
             RANGE MEMEBER
            </h1>
            <div className="px-2 text">
              <p className="text-left  my-4">
              Texas 9 Range Members receive unlimited access to the driving range anytime day or night to perfect their swing.
              </p>

              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                INDIVIDUAL - $70
                  <br />
                  
                
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                ADDITIONAL FAMILY - $35/PERSOn
                *up to 4 additional family members
                  <br />
                 
                 
                </li>
              </ul>

             
            </div>

          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Membership;
