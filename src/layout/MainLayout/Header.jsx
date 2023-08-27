// import GYMImg from "../.././assets/golf/gym.jpg";
// import RangeImg from "../.././assets/golf/Range.jpg";
// import Range2Img from "../.././assets/golf/range2.jpg";
// import BGImg from "../.././assets/golf/GrassWithLake.jpeg";
// import TEETimesImg from "../.././assets/golf/teetimes.jpg";
import header1 from "../.././assets/golf/header1.png";
import header2 from "../.././assets/golf/header2.png";
import header3 from "../.././assets/golf/header3.png";
import header4 from "../.././assets/golf/header4.png";
import header5 from "../.././assets/golf/header5.png";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NavBar from "./NavBar";
import Slider from "react-slick";

const images = [header1, header2, header3, header4, header5];
const Header = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };
  return (
    <>
      <NavBar />

      <div className="pt-20 font-primary overflow-hidden">
        <Slider {...settings} className="mt-10 lg:mt-0 h-full lg:h-[55vh]">
          {images.map((image, idx) => (
            <div key={idx} className="w-full">
              <img
                src={image}
                className="w-full h-full lg:h-[55vh] object-center object-contain lg:object-cover "
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Header;
