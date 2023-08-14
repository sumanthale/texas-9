import React from "react";
import NavBar from "./NavBar";
import BG1 from "../../assets/golf/teetimes.jpg";

const MiniHeader = ({ heading, image }) => {
  return (
    <>
      <NavBar />

      <div
        className="overflow-hidden bg-cover bg-center relative h-80"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${
            image || BG1
          }`,
        }}
      >
        <div className="max-w-screen-xl px-4 mx-auto flex justify-center items-center w-full h-full">
          <h1 className="text-white text-3xl sm:text-7xl font-primary uppercase font-bold my-5 tracking-wide ">
            {heading}
          </h1>
        </div>
      </div>
    </>
  );
};

export default MiniHeader;
