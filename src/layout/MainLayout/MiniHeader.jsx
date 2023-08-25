import React from "react";
import NavBar from "./NavBar";
import BG1 from "../../assets/golf/teetimes.png";

const MiniHeader = ({ heading, image }) => {
  return (
    <>
      <NavBar />
      <div className="h-20"></div>
      <div
        className="overflow-hidden bg-cover bg-center relative h-80 grid place-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${
            image || BG1
          }`,
        }}
      >
        <h1 className="text-white text-3xl sm:text-7xl font-DinCondensed uppercase font-bold tracking-wide ">
          {heading}
        </h1>
        {/* <div className="max-w-screen-xl px-4 mx-auto flex justify-center items-center w-full h-full"></div> */}
      </div>
    </>
  );
};

export default MiniHeader;
