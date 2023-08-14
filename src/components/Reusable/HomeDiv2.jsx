// import MiniHeader from "../layout/MainLayout/MiniHeader";
// import Footer from "../reusable/Footer";
// import LeaveAMessage from "../components/Home/LeaveAMessage";
import Smallgallery1 from "../../assets/golf/smallgallery1.png";
import Smallgallery2 from "../../assets/golf/smallgallery2.png";
import Smallgallery3 from "../../assets/golf/smallgallery3.png";
import Smallgallery4 from "../../assets/golf/smallgallery4.png";
import Review from "../../assets/golf/review.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { Carousel } from "react-responsive-carousel";
// import LogoImg from "../assets/logos/Texas 9 Golf.png";
// import AboutHeader from "../assets/golf/about-header.jpg";
const HomeDiv2 = () => {
  const reviews = [
    {
      id: 1,
      text: "NINE HOLE LITTLE PARADISE.\nExcellent course to work on your short game. Staff was friendlier than any big course I have gone to!",
      author: "HECTOR GARZA",
    },
    // Add more reviews here
    {
      id: 2,
      text: "Hospitality is everything and we immediately felt welcomed! The course was awesome and they even have brand NEW EPIC GOLF CARTS that are a must.",
      author: "ARMANDO AGUILAR",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div>
      <div className=" bg-[#fff]  p-4 font-primary first-letter: ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6">
          <div className="bg-[#7DA33F] p-10 flex flex-col items-center text-white col-span-1 lg:col-span-1">
            <h1 className="uppercase tracking-wide text-4xl font-primary font-bold text-center mt-6">
              GET YOUR TEE TIME!
            </h1>
            <p className="tracking-wide text-xl font-primary text-center font-semibold my-3">
              Minimize the wait and schedule your next visit on our nine hole
              course.
            </p>
            <Link
              to="/tee-times"
              className=" p-2 px-8 text-2xl bg-[#7DA33F]  hover:text-gray-800 border-2 border-white"
            >
              BOOK NOW
            </Link>
          </div>

          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 border-2 gap-4 p-4 border-red-500">
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
                className="carousel max-h-72 "
                style={{ maxHeight: "100%", maxWidth: "60%", margin: "0 auto" }}
              >
                <div
                  className="w-full carousel-image-item h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Smallgallery1})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Smallgallery2})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Smallgallery3})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Smallgallery4})`,
                  }}
                ></div>
              </Carousel>
            </div>

            <div className="bg-white flex flex-col items-center   relative col-span-2">
              <p className="tracking-wide text-xl font-primary  font-semibold  my-3 text-justify">
                Hailed as one of the best executive golf courses in DFW, our
                course was designed by Steven D. Plumber, ASGCA, and opened in
                1999. The course was created to be a public course, filling a
                niche in DFW so the greater community can have better access to
                the benefits of golf. Formerly known as Texas Golf Center, the
                course came under new management in 2023 with an explicit
                interest in adding new amenities and reinforcing the best
                aspects of the course.
              </p>
              <p className="tracking-wide text-2xl font-primary text-center font-bold  my-3 text-red-500">
                NO CLUB FEES! OPEN TO THE PUBLIC!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page p-4">
        <section
          className="hero-section"
          style={{
            backgroundImage: `url(${Review})`,
          }}
        >
          <div className="hero-content w-full">
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              interval={5000}
              onChange={setCurrentReview}
            >
              {reviews.map((review) => (
                <div key={review.id} className="review-slide">
                  <p>{review.text}</p>
                  <p>- {review.author}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeDiv2;
