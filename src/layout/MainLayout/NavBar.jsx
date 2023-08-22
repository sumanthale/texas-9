import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import LogoImg from "../../assets/logos/Texas 9 - Social Logo.png";
import LogoImg from "../../assets/golf/white-logo.png";
import IndexPage from "./IndexPage";
import { FiMenu } from "react-icons/fi";
import "../../index.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hiddenRef = useRef(null);
  const location = useLocation();
  // const navRef = useRef(null);
  // const observer = useRef(null);
  // useEffect(() => {
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new window.IntersectionObserver((entries) => {
  //     if (!navRef.current) return;
  //     if (!entries[0].isIntersecting) {
  //       navRef.current.style.backgroundColor = "white";
  //       navRef.current.style.color = "black";
  //     } else {
  //       navRef.current.style.backgroundColor = "transparent";
  //       navRef.current.style.color = "white";
  //     }
  //   });

  //   const { current: currentObserver } = observer;

  //   currentObserver.observe(hiddenRef.current);
  // }, []);

  return (
    <>
      {/* <div className="fixed  z-50 w-full bg-[#162649] text-white"> */}
      <div className="fixed z-50 w-full h-[80px] bg-[#162649] text-white font-Gbook">
        <div className=" px-6 py-2 bg-[#7da33f] flex items-center justify-center absolute right-8 lg:right-20  top-16  ">
          <Link to={"/tee-times"} className="hover:text-white">
            BOOK A TEE TIME
          </Link>
        </div>
        <div className="hidden lg:flex items-center font-semibold  links justify-center pr-10 h-[80px] relative ">
          <div className="mr-auto p-4 lg:ml-16">
            <Link to={"/"}>
              <img
                className="absolute top-2 h-[50px]"
                src={LogoImg}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="dropdown p-4 items-center justify-center">
            <Link to="/golf">
              <button
                className={`dropbtn ${
                  location.pathname.startsWith("/golf") ? "active" : ""
                }`}
              >
                GOLF
              </button>
              {/* <button className="dropbtn">GOLF</button> */}
            </Link>

            <div className="dropdown-content">
              <Link to="/golf/rates">RATES</Link>
              <Link to="/golf/memberships">MEMBERSHIPS</Link>
              <Link to="/golf/lessons">LESSONS</Link>
              <Link to="/tee-times">TEE TIMES</Link>
            </div>
          </div>

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888", // or any other grey color you prefer
              borderRadius: "50%",
              margin: "0 10px", // adjust the margin to control the spacing
            }}
          />

          <div className="dropdown p-4">
            <Link to="/fitness">
              <button
                className={`dropbtn ${
                  location.pathname.startsWith("/fitness") ? "active" : ""
                }`}
              >
                FITNESS
              </button>
              {/* <button className="dropbtn">FITNESS</button> */}
            </Link>
            <div className="dropdown-content">
              <Link to="/fitness/fitness-membership">MEMBERSHIPS</Link>

              <div className="relative group2">
                <Link to="/fitness/services">SERVICES</Link>
                {/* 
                <div className="dropdown-content submenu absolute w-fit top-0 left-36 invisible group2-hover:visible">
                  <Link to="/fitness/personal-training">PERSONAL TRAINING</Link>
                  <Link to="/fitness/golf-mobility">
                    GOLF MOBILITY & STRENGTH TRAINING
                  </Link>
                  <Link to="/fitness/massage-therapy">MASSAGE THERAPY</Link>
                  <Link to="/fitness/yoga">YOGA</Link>
                </div> */}
              </div>
            </div>
          </div>

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888", // or any other grey color you prefer
              borderRadius: "50%",
              margin: "0 10px", // adjust the margin to control the spacing
            }}
          />

          <div className="p-4">
            <Link to={"/community"}>COMMUNITY </Link>
          </div>

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888", // or any other grey color you prefer
              borderRadius: "50%",
              margin: "0 10px", // adjust the margin to control the spacing
            }}
          />

          <div className="p-4">
            <Link
              to={"/event"}
              className={location.pathname === "/event" ? "active" : ""}
            >
              EVENTS
            </Link>
          </div>

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888", // or any other grey color you prefer
              borderRadius: "50%",
              margin: "0 10px", // adjust the margin to control the spacing
            }}
          />

          <div className="p-4 flex items-center justify-center">
            <Link
              to={"/about"}
              className={location.pathname === "/about" ? "active" : ""}
            >
              ABOUT US
            </Link>
          </div>

          {/* <div
          className="dot-separator"
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: "#888", // or any other grey color you prefer
            borderRadius: "50%",
            margin: "0 10px", // adjust the margin to control the spacing
          }}
        />


          <div className="p-4">
            <Link to={"/contact"}>CONTACT</Link>
          </div> */}

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888", // or any other grey color you prefer
              borderRadius: "50%",
              margin: "0 10px", // adjust the margin to control the spacing
            }}
          />

          <a
            href="https://goo.gl/maps/iPceoCQZ3R8JjvR58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 flex items-center justify-center lg:mr-14">
              GET DIRECTIONS
            </div>
          </a>
        </div>
        <div className="h-full flex lg:hidden items-center  pr-10">
          <div className="mr-auto p-3">
            <img className="absolute h-16 top-2" src={LogoImg} alt="Logo" />
          </div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <FiMenu color="#fff" />{" "}
          </button>
        </div>

        <div
          className={`relative z-10 ${isOpen ? "block" : "hidden"} `}
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto relative w-screen max-w-xs sm:max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-black text-white pb-6 shadow-xl">
                    <div className="w-fit flex mt-5 mx-auto rounded-full p-2  border-2 justify-center items-center">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white "
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="4"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-5 mx-auto text-2xl font-bold underline underline-offset-4">
                      <img
                        src={LogoImg}
                        alt="Logo"
                        style={{
                          width: "70%",
                          margin: "0 auto",
                        }}
                      />
                    </div>
                    <div className="relative mt-2 flex-1 px-4 sm:px-6">
                      <IndexPage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="" ref={hiddenRef}></div>
    </>
  );
};

export default NavBar;
